import { BasePage } from "./BasePage";


class OrderPlacedPage extends BasePage{

    headerMessage:any
    header:any
    downloadOrderDetails:any
    successText:any
    

    constructor(page:any){
        super(page)
        this.headerMessage = page.getByRole('heading', { name: 'Thankyou for the order.' })
        this.header = page.getByRole('cell', { name: 'Thankyou for the order. You' }).nth(1)
        this.downloadOrderDetails = page.getByRole('button', { name: 'Click To Download Order' })
        this.successText = page.locator(".toast-success")


    }

    async clickDownloadOrderDetails(){
        await this.downloadOrderDetails.click()
    }

    async getOrderNumber(){
        const message = await this.header.textContent()
        const numberOrder = message.split('|')[1]
        return (numberOrder.trim())
    }
}

export { OrderPlacedPage}