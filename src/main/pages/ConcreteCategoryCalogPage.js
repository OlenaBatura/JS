var ConcreteCategoryCatalogPage = function () {
    this.concreteProductIdText = "75159";

    this.concreteProduct = function () {
        return element(by.xpath("//a[contains(@href,'death-star-75159')]"));
    };
    this.concreteProductId = function () {
        return element(by.xpath("//a[contains(@href,'death-star-75159')]//span[@itemprop='identifier']"));
    };
    this.clickOnConcreteProduct = function () {
        this.concreteProduct().click();
    };


};
module.exports = new ConcreteCategoryCatalogPage();