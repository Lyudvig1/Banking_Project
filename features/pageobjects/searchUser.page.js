const Page = require("./page");
class Search extends Page {
  get customerBtn() {
    return $("//*[text()[contains(.,'Customers')]]");
  }

  get searchInput() {
    return $(".input-group>input");
  }

  get tableInfo() {
    return $("tbody>tr");
  }

  get firtName() {
    return $("tbody>tr>td:nth-child(1)");
  }

  get lastName() {
    return $("tbody>tr>td:nth-child(2)");
  }

  get postCode() {
    return $("tbody>tr>td:nth-child(3)");
  }

  async searchName(name) {
    let click = await this.customerBtn;
    await click.click();
    let enter = await this.searchInput;
    await enter.click();
    await enter.setValue(name);
  }

  async getTableInfo() {
    let firstName = await this.firtName;
    let lastName = await this.lastName;
    let postCode = await this.postCode;
    let nameText = firstName.getText();
    let lastNameText = lastName.getText();
    let postCodeText = postCode.getText();
    return [nameText, lastNameText, postCodeText];
  }
}
module.exports = new Search();
