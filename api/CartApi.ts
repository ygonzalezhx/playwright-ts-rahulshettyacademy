import { BaseApiClient } from "./BaseApiClient"

class CartApi extends BaseApiClient {

async getCartCount() {
    const res = await this.request.get(`${this.baseURL}/api/ecom/user/get-cart-count/6972ddd1c941646b7ab101f6`,
      {
        headers: this.headers()
      }
    )

    const resJson =await res.json()

    return (resJson.count)
  }

async getCartMessage() {
    const res = await this.request.get(`${this.baseURL}/api/ecom/user/get-cart-count/6972ddd1c941646b7ab101f6`,
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