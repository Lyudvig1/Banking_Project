module.exports = class Page {
  open(path) {
    browser.maximizeWindow();
    return browser.url(env.BASE_URL + path);
  }
};
