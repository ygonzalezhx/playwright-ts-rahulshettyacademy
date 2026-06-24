import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { CartApi } from '../api/cartApi';
import { AuthApi } from '../api/AuthApi';
import { ProductApi } from '../api/ProductApi';


test.describe("Testing dashboard", async()=>{

    let loginObj:any
    let dashObj:any
    let page:any
    let prodObj:any
    let email="mehadimanzoor5@gmail.com"
    let pass="Mehek@123"
    let authAPI:any 
    let apiToken:any
    let baseUrl="https://rahulshettyacademy.com"

    test.beforeEach("Launch browser and login",async({browser, request})=>{
        const context= await browser.newContext()
        page= await context.newPage()
        loginObj = new LoginPage(page)
        dashObj = new DashboardPage(page)
        prodObj = new ProductPage(page)
        authAPI = new AuthApi(request)
        apiToken = await authAPI.login(email,pass)

        await loginObj.goToUrl("https://rahulshettyacademy.com/client/")
        await loginObj.setCredentials(email,pass)
        await loginObj.clickLoginButton()
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")

    })



    test("View product detail", async()=>{
        await dashObj.clickProductDetails("iphone 13 pro")
        await expect (prodObj.productDetails).toBeVisible()


    })

    test("Add product to cart",async({request})=>{
        const cartApi = new CartApi(request,baseUrl,apiToken)

        await dashObj.clickProductDetails("iphone 13 pro")
        await expect (prodObj.productDetails).toBeVisible()
        await prodObj.clickAddToCartButton()

        await expect(prodObj.validationText).toBeVisible()
        await expect(prodObj.validationText).toContainText("Product Added To Cart")
        expect (await cartApi.getCartCount()).toBeGreaterThan(0)

        //await page.pause()
    })

    test("Add product to cart and continue shopping",async({request})=>{
        const cartApi = new CartApi(request,baseUrl,apiToken)
        await dashObj.clickProductDetails("iphone 13 pro")
        await expect (prodObj.productDetails).toBeVisible()
        await prodObj.clickAddToCartButton()

        await expect(prodObj.validationText).toBeVisible()
        await expect(prodObj.validationText).toContainText("Product Added To Cart")
        expect (await cartApi.getCartCount()).toBeGreaterThan(0)

        await prodObj.clickContinueShoppingButton()
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    })

})