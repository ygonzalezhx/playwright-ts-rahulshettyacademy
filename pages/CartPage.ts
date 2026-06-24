import { BasePage } from "./BasePage";


class CartPage extends BasePage{
    
    buyNowBtn:any
    deleteBtn:any
    checkoutBtn:any

    constructor(page:any){
        super(page)
        this.buyNowBtn = page.getByRole('button', { name: 'Buy Now' })
        this.deleteBtn = page.locator(".btn-danger")
        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' })

    }

    async clickBuyNowButton(){
        await this.buyNowBtn.click()
    }

    async clickCheckoutButton(){
        await this.checkoutBtn.click()

    }

    async clickDeleteButton(){
        await this.deleteBtn.first().click()
    }
}

export { CartPage}