import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


class OrdersHistoryPage extends BasePage{

    lastOrderDisplayed:any    
    backToShopBtn:any
    ordersList:any

    constructor(page:any){
        super(page)
                this.backToShopBtn = page.getByRole('button', {name: 'Go Back to Shop'})
                this.ordersList = page.locator("tbody th")


    }

    lastOrder(orderNum:string){
        this.lastOrderDisplayed = this.page.getByRole('rowheader', { name: orderNum })
        return this.lastOrderDisplayed
    }

    // async getLastOrderHistoryText(item:string){
    //     const text = await this.displayedOrders.allTextContents()
    //     return (text.toString()).split(item)[0]
    // }

    async getOrdersList(){
         return await this.ordersList.allTextContents()
    }
}

export { OrdersHistoryPage}