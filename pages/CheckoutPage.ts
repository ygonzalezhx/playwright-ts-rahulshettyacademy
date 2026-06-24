import { BasePage } from "./BasePage";


class CheckoutPage extends BasePage{

    cardNumber:any
    expiryMonthDate:any
    expiryYearDate:any
    cvvCode:any
    cardName:any
    couponCode:any
    applyCouponBtn:any
    country:any
    placeOrderBtn:any

    constructor(page:any){
        super(page)
        this.cardNumber = page.locator(".text-validated").first()
        this.expiryMonthDate = page.getByRole('combobox')
        this.expiryYearDate = page.getByRole('combobox')
        this.cvvCode = page.getByRole('textbox').nth(1)
        this.cardName = page.getByRole('textbox').nth(2)
        this.couponCode = page.getByText('Apply Coupon').first()
        this.applyCouponBtn = page.getByRole('button', { name: 'Apply Coupon' })
        this.country = page.getByRole('textbox', { name: 'Select Country' })
        this.placeOrderBtn = page.getByText("Place Order")

    }

    async setCardNumber(cardNumb:string){
        await this.cardNumber.fill(cardNumb)
    }

    async setExpiryMonth(month:string){
        await this.expiryMonthDate.first().selectOption(month)
    }

    async setExpiryYear(year:string){
        await this.expiryYearDate.nth(1).selectOption(year)
    }


    async setCardCode(cardCode:string){
        await this.cvvCode.fill(cardCode)
    }

    async setCardName(name:string){
        await this.cardName.fill(name)
    }

    async setCouponcode(coupon:string){
        await this.couponCode.fill(coupon)
    }

    async clickApplyCouponButton(){
        await this.applyCouponBtn.click()

    }

    async setCountry(countryOption:string){
        await this.country.pressSequentially(countryOption)
        await this.page.getByRole('button',{name: countryOption}).click()
    }

    async clickPlaceOrderButton(){
        await this.placeOrderBtn.click()
    }
}

export {CheckoutPage}