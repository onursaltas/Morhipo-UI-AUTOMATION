const { I } = inject();
let Val = require('../Parameters/Value.json');

module.exports = {
  fields: {},
  selects: {},
   getEnvironmetParameters : function(key) {
        return Val[key];
  },
  buttons: {
    closeCookieBtn: "//span[@class='icontype ui-close-sm']",
    homePageLogo:"//span[@class='mrhp-logo']"
  },

  homePage: function () {
    //siteye giriş
    I.amOnPage('https://www.morhipo.com/');
  },
  backToHomePage: function () {
    //anasayfaya geri dönme
    I.waitForClickable(this.buttons.homePageLogo);
    I.click(this.buttons.homePageLogo);
  },

  closeCookies: async function () {
    //cookies popup sayısı alma
    let isCookiesEnabled = await I.grabNumberOfVisibleElements(this.buttons.closeCookieBtn);
    if (isCookiesEnabled != 0) {
      //çerezler popup kapatma
      I.click(this.buttons.closeCookieBtn);
    }

  }
  // insert your locators and methods here
}
