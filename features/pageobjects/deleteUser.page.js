const Page = require("./page");
const expectChai = require("chai").expect;
class DeleteUser extends Page {
  get deleteBtn() {
    return $('//button[text()[contains(.,"Delete")]]');
  }

  get tableColumnsInfo() {
    return $("tbody>tr");
  }

  async getTableIndex() {
    let parent = await this.tableColumnsInfo;
    let child = parent.$$("tbody");
    return child;
  }

  async deleteCustomer() {
    let deleteUser = await this.deleteBtn;
    await deleteUser.click();
  }

  async isDelete() {
    let display = await this.tableColumnsInfo;
    expectChai(await display.isExisting()).to.be.false;
  }
}
module.exports = new DeleteUser();
