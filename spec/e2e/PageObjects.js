var webdriver = require('selenium-webdriver');

var Homepage = function() {
  var page = this;
  
  page.pageHeading = element(webdriver.By.id('welcome-message'));
  
  page.get = function() {
    browser.get('index.html');
  }
};

module.exports = Homepage;