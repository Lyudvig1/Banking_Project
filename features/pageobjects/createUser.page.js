const Page = require("./page");
class CreateUser extends Page {
  get firstNameInput() {
    return $('//input[../label/text()[contains(., "First Name :")]]');
  }

  get lastNameInput() {
    return $('//input[../label/text()[contains(., "Last Name :")]]');
  }

  get postCodeInput() {
    return $('//input[../label/text()[contains(., "Post Code :")]]');
  }

  get addCustomerButton() {
    return $("form>button");
  }

  addUser = async (data) => {
    let firstName = await this.firstNameInput;
    await firstName.click();
    await firstName.setValue(data.firstname);
    let lastName = await this.lastNameInput;
    await lastName.click();
    await lastName.setValue(data.lastname);
    let postCode = await this.postCodeInput;
    await postCode.click();
    await postCode.setValue(data.postcode);
    let click = await this.addCustomerButton;
    await click.click();
    await browser.acceptAlert();
  };
}
module.exports = new CreateUser();
