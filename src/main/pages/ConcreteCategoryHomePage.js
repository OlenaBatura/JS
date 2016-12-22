var ConcreteCategoryHomePage = function () {
    //region Locators
    this.productMenuItem = function () {
        return element(by.xpath("//div[@class='grid-column']//nav[@role='navigation']//a[contains(@href,'products')]"));
    };
    //endregion

    //region Actions
    this.clickOnProductMenuItem = function () {
        this.productMenuItem().click();
    };
    //endregion
};
module.exports = new ConcreteCategoryHomePage();