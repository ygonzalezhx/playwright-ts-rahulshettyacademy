import { test, expect,request } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderPlacedPage } from '../pages/OrderPlacedPage';
import { CartApi } from '../api/CartApi';
import { AuthApi } from '../api/AuthApi';




test.describe("Testing dashboard", async()=>{

    let loginObj:any
    let dashObj:any
    let page:any
    let prodObj:any
    let cartObj:any
    let checkoutObj:any
    let orderPlacedObj:any
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
        cartObj = new CartPage(page)
        checkoutObj = new CheckoutPage(page)
        orderPlacedObj = new OrderPlacedPage(page)
        authAPI = new AuthApi(request)
        apiToken = await authAPI.login(email,pass)

        await loginObj.goToUrl("https://rahulshettyacademy.com/client/")
        await loginObj.setCredentials(email,pass)
        await loginObj.clickLoginButton()
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")

        

    })

       test.skip("Add product to cart and checkout ",async({request})=>{
        const cartApi = new CartApi(request,baseUrl,apiToken)
        
        await dashObj.clickProductDetails("ADIDAS ORIGINAL")    
        await expect (prodObj.productDetails).toBeVisible() //espero que se carguen los datos del producto
        
        await prodObj.clickAddToCartButton()
        expect (await cartApi.getCartCount()).toBeGreaterThan(0) //chequear api de cart, a ver cuantos prod tiene
       
        await dashObj.clickCartLink()
        await expect(cartObj.buyNowBtn).toBeVisible()
        await cartObj.clickCheckoutButton()

        await checkoutObj.setCardNumber("0303456")
        await checkoutObj.setExpiryMonth('05')
        await checkoutObj.setExpiryYear('27')
        await checkoutObj.setCardCode("233")
        await checkoutObj.setCardName("Yasmin Gonzalez")
        await checkoutObj.setCountry("Argentina")
        await checkoutObj.clickPlaceOrderButton()

        await expect(orderPlacedObj.headerMessage).toBeVisible()

        console.log(await orderPlacedObj.getOrderNumber())

        await expect(orderPlacedObj.successText).toContainText("Order Placed Successfully")

    })

    test("Checkout product and verify cart is empty",async({request})=>{
        const cartApi = new CartApi(request,baseUrl,apiToken)
        
        await dashObj.clickProductDetails("ADIDAS ORIGINAL")    
        await expect (prodObj.productDetails).toBeVisible() //espero que se carguen los datos del producto
        await prodObj.clickAddToCartButton()
        expect (await cartApi.getCartCount()).toBeGreaterThan(0) //chequear api de cart, a ver cuantos prod tiene
        console.log(await cartApi.getCartCount())
        await dashObj.clickCartLink()
        await expect(cartObj.buyNowBtn).toBeVisible()
        await cartObj.clickCheckoutButton()

        await checkoutObj.setCardNumber("0303456")
        await checkoutObj.setExpiryMonth('05')
        await checkoutObj.setExpiryYear('27')
        await checkoutObj.setCardCode("233")
        await checkoutObj.setCardName("Yasmin Gonzalez")
        await checkoutObj.setCountry("Argentina")
        await checkoutObj.clickPlaceOrderButton()
        await expect(orderPlacedObj.headerMessage).toBeVisible()

        
        await expect(orderPlacedObj.successText).toContainText("Order Placed Successfully")
        expect(await cartApi.getCartMessage()).toBe("No Product in Cart")

      
    })


})
