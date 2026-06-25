import { BasePage } from "./BasePage";


class OrdersHistoryPage extends BasePage{

    displayedOrders:any    
    backToShopBtn:any

    constructor(page:any){
        super(page)
        this.displayedOrders = page.locator("tbody")
        this.backToShopBtn = page.getByRole('button', {name: 'Go Back to Shop'})
//getByRole('rowheader', { name: '6a3d3c8c378febeacdcdbbad' })

    }

    async getLastOrderHistoryText(item:string){
        const text = await this.displayedOrders.allTextContents()
        return (text.toString()).split(item)[0]
    }
}

export { OrdersHistoryPage}