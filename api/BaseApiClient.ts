import { APIRequestContext, APIResponse } from "@playwright/test"

class BaseApiClient {
    protected token?: string
  
    constructor(protected request: APIRequestContext,
        protected baseURL: string,
        token?:string){
        this.token = token
  }
    protected headers() {
        const headers: Record<string, string> = {}

        if (this.token) {
            headers['Authorization'] = this.token
        }

        return headers
        }

    async get(url: string) {
        return this.request.get(`${this.baseURL}${url}`, {headers: this.headers()})
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