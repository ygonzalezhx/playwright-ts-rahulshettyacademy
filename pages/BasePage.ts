//En la base page van metodos genericos

class BasePage{
  protected page:any

  constructor(page:any){
      this.page=page
  }

  async goToUrl(url:string){
      await this.page.goto(url)
  }

  async clickOnLink(linkName:string){
    await this.page.getByRole('link', {name: linkName}).first().click()
  }

  }
export{BasePage}