import { BasePage } from "./BasePage";


class OrdersHistoryPage extends BasePage{

    displayedOrders:any    

    constructor(page:any){
        super(page)
        this.displayedOrders = page.locator(".ng-star-inserted")


    }
}

export { OrdersHistoryPage}