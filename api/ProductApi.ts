import { BaseApiClient } from "./BaseApiClient"

class ProductApi extends BaseApiClient {

async getProductDetails(productId: string) {
    const res = await this.request.get(
      `${this.baseURL}/api/ecom/product/get-product-detail/${productId}`,
      {
        headers: this.headers()
      }
    )

    return (await res.json())
  }

}

export {ProductApi}