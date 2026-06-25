import { BasePage } from "./BasePage";


class ProductPage extends BasePage{
    continueShoppingBtn:any
    productDetails:any
    addToCart:any
    validationText:any
    
    
    


    constructor(page:any){
        super(page)
        this.continueShoppingBtn = page.getByRole('link', { name: 'Continue Shopping' })
        this.productDetails = page.getByText('Apple phone')
        this.addToCart = page.getByRole('button', { name: 'Add To Cart' })
        this.validationText = page.locator(".toast-success").filter({ hasText: 'Product Added To Cart'
})

    }
    async clickAddToCartButton(){

     await this.addToCart.click()


    }

    async clickContinueShoppingButton(){
        await this.continueShoppingBtn.click()
    }

}

export {ProductPage}