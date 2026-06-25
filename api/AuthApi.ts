import { APIRequestContext } from "@playwright/test"

class AuthApi {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    const res = await this.request.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: {
          userEmail: email,
          userPassword: password
        }
      }
    )

    const body = await res.json()
    //return body.token
    return body
  }
}

export {AuthApi}