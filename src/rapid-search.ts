import { soapRequest } from './request'
import * as util from 'util'
import { parseString } from 'xml2js'
import { getXML } from './xml'
const parseXml = util.promisify(parseString) as any

export interface RapidSearchXML {
  template: 'rapid-search'
  data: {
    token: string
    keresett: string // "keresett" means something like query in hungarian 🙈
  }
}

interface RapidSearchResponse {
  'SOAP-ENV:Envelope': {
    $: $
    'SOAP-ENV:Body': SOAPENVBodyItem[]
  }
}
interface $ {
  'xmlns:SOAP-ENV': string
  'xmlns:ns1': string
}
interface SOAPENVBodyItem {
  'ns1:RapidSearchResponse': Ns1RapidSearchResponseItem[]
}
interface Ns1RapidSearchResponseItem {
  'ns1:keresett': string[]
  'ns1:Lista': Ns1ListaItem[]
}
interface Ns1ListaItem {
  'ns1:RapidSearchResponseItem': Ns1RapidSearchResponseItemItem[]
}
interface Ns1RapidSearchResponseItemItem {
  'ns1:Name': string[]
  'ns1:Address': Ns1AddressItem[]
  'ns1:RegNumber': string[]
  'ns1:ShortTaxNumber': string[]
}
interface Ns1AddressItem {
  'ns1:Zip': string[]
  'ns1:City': string[]
  'ns1:StreetAndNum': string[]
}

export async function rapidSearch(query: string, token?: string) {
  const xml = await getXML<RapidSearchXML>({
    template: 'rapid-search',
    data: { token, keresett: query }
  })
  const response = await soapRequest(
    'https://www.opten.hu/soap/cegtar/unique/uniquemin',
    xml,
    {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8' }
    }
  )
  const parsed: RapidSearchResponse = await parseXml(response)
  const results = parsed['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0][
    'ns1:RapidSearchResponse'
  ][0]['ns1:Lista'][0]['ns1:RapidSearchResponseItem'].map(el => {
    return {
      name: el['ns1:Name'][0],
      address: {
        zip: el['ns1:Address'][0]['ns1:Zip'][0],
        city: el['ns1:Address'][0]['ns1:City'][0],
        street: el['ns1:Address'][0]['ns1:StreetAndNum'][0]
      },
      regNumber: el['ns1:RegNumber'][0],
      shortTaxNumber: el['ns1:ShortTaxNumber'][0]
    }
  })
  return results
}
