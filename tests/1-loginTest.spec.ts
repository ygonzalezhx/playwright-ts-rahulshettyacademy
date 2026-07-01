import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';



test.describe.serial("Testing login feature", async()=>{

    let loginObj:any
    let dashObj:any
    let page:any

    test.beforeEach("Launch browser",async({browser})=>{
        const context= await browser.newContext()
        page= await context.newPage()
        loginObj = new LoginPage(page)
        dashObj = new DashboardPage(page)

        await loginObj.goToUrl("/client")

    })

    test("Login succesfully",async()=>{

        await loginObj.setCredentials("mehadimanzoor5@gmail.com","Mehek@123")
        await loginObj.clickLoginButton()

        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
        await expect(loginObj.successfulLoginText).toBeVisible()
       
    })

    test("Logout successfully",async()=>{
        await loginObj.setCredentials("mehadimanzoor5@gmail.com","Mehek@123")
        await loginObj.clickLoginButton()

        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")

        await dashObj.clickLogoutButton()
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth/login")

        
    })


    test("Login with empty credentials",async()=>{
        await loginObj.setCredentials("","")
        await loginObj.clickLoginButton()

        const messages= await loginObj.getValidationMessages()

        expect(messages).toContain("*Email is required")
        expect(messages).toContain("*Password is required")
    })

    test("Login with invalid credentials",async()=>{
        await loginObj.setCredentials("mehadimanzoor5@gmail.com","asda")
        await loginObj.clickLoginButton()

       
        await expect(loginObj.invalidCredentialsText).toBeVisible()
    })

})
