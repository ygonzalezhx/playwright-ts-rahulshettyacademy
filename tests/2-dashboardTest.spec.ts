import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';



test.describe("Testing dashboard", async()=>{

    let loginObj:any
    let dashObj:any
    let page:any

    test.beforeEach("Launch browser and login",async({browser})=>{
        const context= await browser.newContext()
        page= await context.newPage()
        loginObj = new LoginPage(page)
        dashObj = new DashboardPage(page)

        await loginObj.goToUrl("https://rahulshettyacademy.com/client/")
        await loginObj.setCredentials("mehadimanzoor5@gmail.com","Mehek@123")
        await loginObj.clickLoginButton()

        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")

    })

    test.skip("Dashboard correctly displayed", async()=>{

        await expect(dashObj.sidebar).toBeVisible()
    })


    test("Add dashboard product to cart",async()=>{

       
        await dashObj.clickAddToCartButton("iphone 13 pro")

        await expect(dashObj.validationText).toBeVisible()

        await expect(dashObj.validationText).toContainText("Product Added To Cart")

        await page.pause()
    })

})