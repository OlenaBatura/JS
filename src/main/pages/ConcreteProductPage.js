var waiter = require("../utils/Waiters");
/**
 * Created by Olena_Batura on 21.12.2016.
 */

var ConcreteProductPage = function () {
    this.basketIcon = function(){
         return element(by.xpath("//a[@data-event-prefix='shopcheckprice']"));
    };

    this.addIntoBasketButton = function () {
      return element(by.xpath("//div[@class='overview__pickers']//button[@class='add-to-cart-button']"));
    };

    this.addIntoWishListButton = function () {
      return element(by.xpath("//button[@class='add-to-wishlist-button']"));
    };

    this.productName = function () {
      return element(by.xpath("//h1[@class='overview__name']"));
    };

   this.clickOnBasketIcon = function(){
            waiter.waitWhileElementBeClicable(this.basketIcon(),5000);
            this.basketIcon().click();
    };

   this.clickAddIntoBasketButton = function () {
     waiter.waitForElementVisibility(this.addIntoBasketButton(),5000);
     browser.sleep(5000);
     this.addIntoBasketButton().click();
   };

   this.clickAddIntoWishListButton =function () {
      waiter.waitForElementVisibility(this.addIntoWishListButton(),5000);
      this.addIntoWishListButton().click();
   };
};

module.exports = new ConcreteProductPage();
