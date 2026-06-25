import { BaseApiClient } from "./BaseApiClient"

class CartApi extends BaseApiClient {

async getCartCount(userId:string) {
    const res = await this.get(`/api/ecom/user/get-cart-count/${userId}`)

    const resJson =await res.json()

     return resJson?.count ?? 0
  }

async getCartMessage(userId:string) {
    const res = await this.get(`/api/ecom/user/get-cart-count/${userId}` )

    const resJson =await res.json()

    return (resJson.message)
  }

  async addToCart(payload: any) {
    return this.postJson('/api/ecom/user/add-to-cart',payload)
  }
}

export {CartApi}