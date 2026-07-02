import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { CartApi } from '../api/CartApi';
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
    let baseUrl=process.env.BASE_URL!
    let userId:any

    test.beforeEach("Launch browser and login",async({browser, request})=>{
        const context= await browser.newContext()
        page= await context.newPage()
        loginObj = new LoginPage(page)
        dashObj = new DashboardPage(page)
        prodObj = new ProductPage(page)
        authAPI = new AuthApi(request)
        const loginResponse=await authAPI.login(email,pass)
        apiToken = loginResponse.token
        userId = loginResponse.userId


        await loginObj.goToUrl("/client/")
        await loginObj.setCredentials(email,pass)
        await loginObj.clickLoginButton()
        await expect(page).toHaveURL("/client/#/dashboard/dash")

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
        await expect.poll(async () => {return await cartApi.getCartCount(userId)}).toBeGreaterThan(0)
        //expect (await cartApi.getCartCount(userId)).toBeGreaterThan(0)

        
    })

    test("Add product to cart and continue shopping",async({request})=>{
        const cartApi = new CartApi(request,baseUrl,apiToken)
        await dashObj.clickProductDetails("iphone 13 pro")
        await expect (prodObj.productDetails).toBeVisible()
        await prodObj.clickAddToCartButton()

        await expect(prodObj.validationText).toBeVisible()

        await expect.poll(async () => {return await cartApi.getCartCount(userId)}).toBeGreaterThan(0)
       // expect (await cartApi.getCartCount(userId)).toBeGreaterThan(0)

        await prodObj.clickContinueShoppingButton()
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    })

})