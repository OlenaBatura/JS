var ProductCategoryCatalogPage = function () {
    this.productCategoriesPageHeaderText = "Products";

    this.productCategoriesPageHeader = function () {
        return element(by.xpath("//div[normalize-space(@class)='hgroup']/h2"));
    };
    this.starWarCategoryItem = function () {
        return element(by.xpath("//a[contains(@href,'StarWars')]"));
    };

    this.clickOnStarWarsItem = function () {
        this.starWarCategoryItem().click();
    };
};

module.exports = new ProductCategoryCatalogPage();