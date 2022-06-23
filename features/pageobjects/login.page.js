const Page = require("./page");
class LoginPage extends Page {
  get bankManagerLoginBtn() {
    return $("//*[text()[contains(.,'Bank Manager Login')]]");
  }

  get addCustomerBtn() {
    return $("//*[text()[contains(.,'Add Customer')]]");
  }

  async clickOnTheLoginBtn() {
    let btn = await this.bankManagerLoginBtn;
    btn.waitForDisplayed();
    btn.click();
  }

  async clickOnTheAddBtn() {
    let btn = await this.addCustomerBtn;
    btn.waitForDisplayed();
    btn.click();
  }  

  open() {
    return super.open("/BankingProject/#/login");
  }
}

module.exports = new LoginPage();
