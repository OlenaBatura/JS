var waiter = require("../utils/Waiters");
/**
 * Created by Olena_Batura on 22.12.2016.
 */

var Header = function () {
    this.basketButton = function () {
        return element(by.xpath("//div[@id='util-bar-dropdown-cart']"));
    };
    this.wishListButton = function () {
        return element(by.xpath("//a[@class='util-bar__link-wishlist']"));
    };
    this.clickOnBasketButton = function () {
        waiter.waitWhileElementBeClicable(this.basketButton(), 5000);
        this.basketButton().click();
    };
    this.clickOnWishListButton = function () {
        waiter.waitWhileElementBeClicable(this.wishListButton(), 5000);
        this.wishListButton().click();
    };

};

module.exports = new Header();