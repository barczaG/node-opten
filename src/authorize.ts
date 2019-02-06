import { soapRequest } from './request'
import * as util from 'util'
import { parseString } from 'xml2js'
import { getXML } from './xml'
const parseXml = util.promisify(parseString) as any

export interface AuthorizeXML {
  template: 'authorize'
  data: {
    username: string
    password: string
  }
}

interface OptenAuthorizeResponse {
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
  'ns1:AuthorizationResponse': Ns1AuthorizationResponseItem[]
}
interface Ns1AuthorizationResponseItem {
  'ns1:Token': string[]
}

export async function authorize({
  username,
  password
}: {
  username: string
  password: string
}) {
  const xml = await getXML<AuthorizeXML>({
    template: 'authorize',
    data: { username, password }
  })
  const response = await soapRequest(
    'https://www.opten.hu/soap/authorize',
    xml,
    {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8' }
    }
  )
  const parsed: OptenAuthorizeResponse = await parseXml(response)
  return parsed['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0][
    'ns1:AuthorizationResponse'
  ][0]['ns1:Token'][0]
}
