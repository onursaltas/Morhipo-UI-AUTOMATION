const { I } = inject();
let Val = require('../Parameters/Value.json');








module.exports = {

  fields: {
    searchField: "//div[@class='pw-sac-toggle-overlay']",
  },
  getEnvironmetParameters : function(key) {
      return Val[key];
   },
  buttons: {
    searchButton: "//div[@id='pw-sac-mobile-toggle']//child::span[@class='search-btn']",
    chooseProduct: "//a[@href='/hummel-209080-2004-eightyone-sneaker/25464528/detay']"
  },
  sort: {
      selectSortType: "//select[@id='ddlFilter']",
      isSelectOption6: "//select[@id='ddlFilter']//child::option[6]"
    },


  searchProduct: function () {
    //laptop arama
    I.fillField(this.fields.searchField,this.getEnvironmetParameters("productName"));
    //arama butonu
    I.click(this.buttons.searchButton);
  },

  selectPage: function () {
    //Select Sort Type
    I.waitForClickable(this.sort.selectSortType);
    I.click(this.sort.selectSortType);
     I.click(this.sort.secondPageButton);

  },

  selectProduct: function () {
    //ürün seçme
    I.click(this.getEnvironmetParameters("productXpath"));
  },


}
