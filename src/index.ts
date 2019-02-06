import { rapidSearch } from './rapid-search'
import { authorize } from './authorize'
import { multiInfo, ExampleMultiInfoResponse } from './multi-info'
import * as dayjs from 'dayjs'

export interface OptenOptions {
  username: string
  password: string
  mockMultiInfo?: boolean
}
export class Opten {
  token: string = null
  tokenExpiresAt: dayjs.Dayjs
  options: OptenOptions
  constructor(options: OptenOptions) {
    this.options = options
  }

  async getToken() {
    if (this.token) {
      if (dayjs().isBefore(this.tokenExpiresAt)) return this.token
    }
    const token = await authorize({
      username: this.options.username,
      password: this.options.password
    })
    this.token = token
    this.tokenExpiresAt = dayjs().add(175, 'minute') // token expires in 3 hours

    return token
  }

  async rapidSearch(query: string) {
    const token = await this.getToken()
    return rapidSearch(query, token)
  }

  async multiInfo<T = ExampleMultiInfoResponse>(firmTaxNo: string) {
    const token = await this.getToken()
    return multiInfo<T>(firmTaxNo, token)
  }
}
