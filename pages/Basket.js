const { I } = inject();
let Val = require('../Parameters/Value.json');

module.exports = {
  fields: {
    isAmountTwo:"//select[@id='qtyselect-452981620']//child::option[2]",
    isCartEmpty:'Sepetinizde ürün bulunmamaktadır.',
  },
 getEnvironmetParameters : function(key) {
        return Val[key];
     },
  selects: {},
  buttons: {
    addCartButton:"//button[@id='add-to-basket']",
    myCartButton:"//a[@href='/sepet']",
    deleteProductButton:"//a[@class='remove-product']",
  },

  addCart: function () {
    //sepete ekleme
    I.waitForClickable(this.buttons.addCartButton);
    I.click(this.buttons.addCartButton);
  },
  myCart: function () {
    //sepete gitme
    I.waitForClickable(this.buttons.myCartButton);
    I.click(this.buttons.myCartButton);
  },
  addAmount: function () {
    //ürün adedini 2 yapma    
    I.selectOption(this.buttons.addAmountButton,this.getEnvironmetParameters("productAmount"));
    //2 ürün olduğunu kontrol etme
    I.seeElement(this.fields.isAmountTwo);
  },
  deleteProduct: function () {
    //sepetten ürünü silme
    I.waitForClickable(this.buttons.deleteProductButton);
    I.click(this.buttons.deleteProductButton);
    //sepetin boş olduğunu kontrol etme
    I.wait(3);
    I.see(this.fields.isCartEmpty);
  },
  // insert your locators and methods here
}
