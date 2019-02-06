import * as fs from 'fs'
import * as util from 'util'
import * as dot from 'dot'
import { parseString } from 'xml2js'
const readFile = util.promisify(fs.readFile)

const parseXml = util.promisify(parseString) as any

export { parseXml }

export interface BaseXML {
  template: string
  data: any
}

export async function getXML<T extends BaseXML>(params: T) {
  const template = await readFile(`${__dirname}/xml/${params.template}.xml`, {
    encoding: 'utf8'
  })
  const compileFn = dot.template(template)
  return compileFn(params.data)
}
