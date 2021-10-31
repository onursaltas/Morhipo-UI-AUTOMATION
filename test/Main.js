const login = require("../pages/login");

Feature('Select Product for CRUD');

Scenario('Selecet - Add - Delete', async ({ I, homePage,productPage,basketPage }) => {
    
    homePage.homePage();
    await homePage.closeCookies();
    
    productPage.searchProduct();
    productPage.selectPage();
    productPage.selectProduct();

    basketPage.addCart();
    basketPage.myCart();
    basketPage.addAmount();
    basketPage.deleteProduct();

    homePage.backToHomePage();

});
