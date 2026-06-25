import { BaseApiClient } from "./BaseApiClient"

class CartApi extends BaseApiClient {

async getCartCount(userId:string) {
    const res = await this.request.get(`${this.baseURL}/api/ecom/user/get-cart-count/${userId}`,
      {
        headers: this.headers()
      }
    )

    const resJson =await res.json()

    return (resJson.count)
  }

async getCartMessage(userId:string) {
    const res = await this.request.get(`${this.baseURL}/api/ecom/user/get-cart-count/${userId}`,
      {
        headers: this.headers()
      }
    )

    const resJson =await res.json()

    return (resJson.message)
  }

  async addToCart(payload: any) {
    return this.postJson('/api/ecom/user/add-to-cart',payload)
  }
}

export {CartApi}