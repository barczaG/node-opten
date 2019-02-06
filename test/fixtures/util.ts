import * as fs from 'fs'
import * as util from 'util'
const readFile = util.promisify(fs.readFile)

export async function getMockXML(template: string) {
  const xml = await readFile(`${__dirname}/${template}.xml`, {
    encoding: 'utf8'
  })
  return xml
}
