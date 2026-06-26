import { BasePage } from "./BasePage";


class DashboardPage extends BasePage{

    addToCart:any
    viewDetailsBtn:any
    signOutLink:any
    cartLink:any
    ordersLink:any
    homeLink:any
    sidebar:any 
    validationText:any
    subCategories:any
    noProdFoundText:any


    constructor(page:any){
        super(page)
        this.addToCart = page.getByRole('button', { name: 'Add To Cart' })
        this.viewDetailsBtn = page.getByRole('button', { name: 'View' })
        this.signOutLink = page.getByRole('button', { name: 'Sign Out' })
        this.cartLink = page.getByRole('button', { name: '   Cart' });
        this.ordersLink = page.getByRole('button', { name: 'ORDERS' })
        this.homeLink = page.getByRole('button', { name: 'HOME' })
        this.sidebar = page.locator("#sidebar")
        this.validationText = page.locator(".toast-success").filter({ hasText: 'Product Added To Cart' })
        this.noProdFoundText = page.locator(".toast-error").filter({ hasText: 'No Products Found' })
        
    }

    async clickLogoutButton(){
        await this.signOutLink.click()
    }

    async clickProductDetails(productName:string){

        if(productName =='ADIDAS ORIGINAL' )
            await this.viewDetailsBtn.first().click()
        if(productName =='ZARA COAT 3')
            await this.viewDetailsBtn.nth(1).click()
        if(productName == 'iphone 13 pro')
           await this.viewDetailsBtn.nth(2).click()
            
                       }
    
    async clickAddToCartButton(productName?:string){

        if(productName =='ADIDAS ORIGINAL' )
            await this.addToCart.first().click()
        if(productName =='ZARA COAT 3')
            await this.addToCart.nth(1).click()
        if(productName == 'iphone 13 pro')
           await this.addToCart.nth(2).click()

        else 
            await this.addToCart.click()


    }

    async clickCartLink(){

        await this.cartLink.click()

    }

    async clickOrdersLink(){
        await this.ordersLink.first().click()
    }

    async clickHomeLink(){

        await this.homeLink.click()
    }

    async selectSubCategory(category:string){
        if(category == "t-shirts"){
            this.subCategories = this.page.getByRole('checkbox').nth(3)}
            this.subCategories.click()

        if(category == "shirts"){
            this.subCategories = this.page.getByRole('checkbox').nth(4).click()}
        if(category == "shoes"){
            this.subCategories = this.page.getByRole('checkbox').nth(5).click()}
        if(category == "mobiles"){
            this.subCategories = this.page.getByRole('checkbox').nth(6).click()}
        if(category == "laptops"){
            this.subCategories = this.page.getByRole('checkbox').nth(7).click()}

    }


                

}

export {DashboardPage}