import { APIRequestContext, APIResponse } from "@playwright/test"

class BaseApiClient {
  
    constructor(protected request: APIRequestContext,protected baseURL: string, protected token?:string){

  }
  protected headers() {
    return this.token? { Authorization: this.token }: undefined
  }

    async get(url: string) {
        return this.request.get(`${this.baseURL}${url}`, {headers: this.headers()
        })
    }

    async post(url: string, data?: any) {
        return this.request.post(`${this.baseURL}${url}`, {data,headers: this.headers()})
    }

    async getJson<T>(url: string): Promise<T> {
        const res = await this.get(url)
        return await res.json()
    }

    async postJson<T>(url: string, data?: any): Promise<T> {
        const res = await this.post(url, data)
        return await res.json()
    }
    }

export {BaseApiClient}