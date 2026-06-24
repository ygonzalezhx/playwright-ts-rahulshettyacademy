import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";


class LoginPage extends BasePage{

    email:any
    password: any
    loginButton:any
    validationMessages:any
    validationText:Locator

    constructor(page:any){
        super(page)
        this.email = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.validationMessages = page.locator(".invalid-feedback")
        this.validationText = page.locator(".toast-error")
    }

    async setCredentials(inputEmail:string, inputPassword:string){
        await this.email.fill(inputEmail)
        await this.password.fill(inputPassword)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async getValidationText(){

        return await this.validationText.textContent()

    }

    async getValidationMessages(){
        const message = await this.validationMessages.allTextContents()
                return message
    }
}

export {LoginPage}