import * as test from 'blue-tape'
import { authorize } from '../src/authorize'
import { rapidSearch } from '../src/rapid-search'
import { multiInfo, ExampleMultiInfoResponse } from '../src/multi-info'
import * as auth from '../src/authorize'
import * as rapid from '../src/rapid-search'
import * as xml from '../src/xml'
import * as request from '../src/request'
import * as sinon from 'sinon'
import rapidSearchFixture from './fixtures/rapid-search.json'

import { Opten } from '../src'
import { getMockXML } from './fixtures/util'

test('#authorize', async t => {
  const xmlSpy = sinon.spy(xml, 'getXML')
  const authResp = await getMockXML('authorize-response')
  const requestStub = sinon.stub(request, 'soapRequest').resolves(authResp)

  const ret = await authorize({
    username: 'myusername',
    password: 'omgomgsecret'
  })

  t.equal(ret, 'token')

  const requestXml = await xmlSpy.returnValues[0]

  t.ok(requestXml.includes('myusername'))
  t.ok(requestXml.includes('omgomgsecret'))
})

test('#rapid-search', async t => {
  const xmlSpy = sinon.spy(xml, 'getXML')
  const mockResp = await getMockXML('rapid-search-response')
  const requestStub = sinon.stub(request, 'soapRequest').resolves(mockResp)

  const resp = await rapidSearch('hello', 'token')

  const requestXml = await xmlSpy.returnValues[0]
  t.ok(requestXml.includes('<uniq:Token>token</uniq:Token>'))
  t.ok(requestXml.includes('<uniq:keresett>hello</uniq:keresett>'))
  t.deepEqual(resp[0], {
    name: 'HELLO-HELLO Kereskedelmi Korlátolt Felelősségű Társaság',
    address: {
      zip: '8500',
      city: 'Pápa',
      street: 'Szabadság út 1/A. 173/14. hrsz.'
    },
    regNumber: '19 09 517860',
    shortTaxNumber: '25304655'
  })
})

test('#authorize', async t => {
  const xmlSpy = sinon.spy(xml, 'getXML')
  const mockResp = await getMockXML('multi-info-response')
  const requestStub = sinon.stub(request, 'soapRequest').resolves(mockResp)

  const ret = await multiInfo<ExampleMultiInfoResponse>('23044441', 'token')

  const requestXml = await xmlSpy.returnValues[0]
  t.ok(requestXml.includes('<uniq:Token>token</uniq:Token>'))
  t.ok(requestXml.includes('<uniq:FirmTaxNo>23044441</uniq:FirmTaxNo>'))

  const email =
    ret['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns1:MultiInfoResponse'][0][
      'ns1:MultiInfo'
    ][0]['ns1:ScoringAdatok'][0]['ns1:XData'][0]['ns1:Value'][0]._
  const ceo =
    ret['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns1:MultiInfoResponse'][0][
      'ns1:MultiInfo'
    ][0]['ns1:ScoringAdatok'][0]['ns1:XData'][1]['ns1:Value'][0]._
  t.equal(ceo, 'Test László (Test Anna)')
  t.equal(email, 'test@test.hu')
})

test('#Opten', async t => {
  const opten = new Opten({
    username: 'user',
    password: 'pass'
  })

  const authStub = sinon.stub(auth, 'authorize').resolves('token')
  sinon.stub(rapid, 'rapidSearch').resolves(rapidSearchFixture)

  await opten.rapidSearch('Opten')
  await opten.rapidSearch('Opten')

  t.deepEqual(authStub.args, [[{ username: 'user', password: 'pass' }]])
})
