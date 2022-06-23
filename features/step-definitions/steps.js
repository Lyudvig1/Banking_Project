const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const CreateUser = require("../pageobjects/createUser.page");
const Search = require("../pageobjects/searchUser.page");
const DeleteUser = require("../pageobjects/deleteUser.page");
const expectChai = require("chai").expect;
const faker = require("@faker-js/faker").faker;

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
  await expect(browser).toHaveTitleContaining("XYZ Bank");
});

When(/^I navigate to the addCust section$/, async () => {
  await LoginPage.clickOnTheLoginBtn();
  await LoginPage.clickOnTheAddBtn();
});

When(/^I add new customer$/, async () => {
  let dataObj = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    postcode: "12121",
  };

  global.SharedVariable.data = dataObj;
  await CreateUser.addUser(dataObj);
  await browser.pause(1000);
});

When(/^I search newly created customer$/, async () => {
  await Search.searchName(global.SharedVariable.data.firstname);
  let userInfo = await Search.getTableInfo();
  let firstName = userInfo[0];
  let lastName = userInfo[1];
  let postCode = userInfo[2];
  expectChai(await firstName).to.equals(global.SharedVariable.data.firstname);
  expectChai(await lastName).to.equals(global.SharedVariable.data.lastname);
  expectChai(await postCode).to.equals(global.SharedVariable.data.postcode);
});

When(/^I delete the newly created customer$/, async () => {
  await DeleteUser.deleteCustomer();
});

Then(/^I verify that customer is deleted$/, async () => {
  await Search.searchName(global.SharedVariable.data.firstname);
  await DeleteUser.isDelete();
});
