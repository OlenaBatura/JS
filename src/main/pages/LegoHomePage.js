/**
 * Created by Olena_Batura on 21.12.2016.
 */

var LegoHomePage=function () {
    this.legoHomePageUrl = "https://www.lego.com/en-us";

    this.productButton = function () {
        return element(by.xpath("//a[contains(@class,'gn-icon-products')]"));
    };
    this.navigateToLegoHomePage = function () {
      browser.get(this.legoHomePageUrl);
        browser.waitForAngular();
    };
    this.clickOnProductButton = function () {
      this.productButton().click();
    };
};

module.exports = new LegoHomePage();