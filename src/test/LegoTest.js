var legoHomePage = require("../main/pages/LegoHomePage");
var productCategoryPage = require("../main/pages/ProductCategoryCatalogPage");
var concreteCategoryHomePage = require("../main/pages/ConcreteCategoryHomePage");
var categoryCatalogPage = require("../main/pages/ConcreteCategoryCalogPage");
var productPage = require("../main/pages/ConcreteProductPage");
var userPopUp = require("../main/modules/ConfirmUserPopUp");
var header = require("../main/global/Header");
var waiter = require("../main/utils/Waiters");
var wishListPage = require("../main/pages/WishListPage");
var basket = require("../main/modules/BasketPopUp");


describe("Lego Shopping Scenario", function () {
    describe(" - Verify If product can be added into wishlist - ", function () {
        it("Verify navigate to home page function", function () {
            legoHomePage.navigateToLegoHomePage();
            expect(legoHomePage.productButton().isDisplayed()).toBe(true);
        });
        it("Verify to categories catalog navigation", function () {
            legoHomePage.clickOnProductButton();
            expect(productCategoryPage.productCategoriesPageHeader().isDisplayed()).toBe(true);
            expect(productCategoryPage.productCategoriesPageHeader().getText()).toBe(productCategoryPage.productCategoriesPageHeaderText);
        });
        it("Verify to Category Home Page navigation", function () {
            productCategoryPage.clickOnStarWarsItem();
            expect(concreteCategoryHomePage.productMenuItem().isDisplayed()).toBe(true);
        });
        it("Verify to product catalog page navigation", function () {
            concreteCategoryHomePage.clickOnProductMenuItem();
            expect(categoryCatalogPage.concreteProduct().isDisplayed()).toBe(true);
        });
        it("Verify to concrete product page navigation", function () {
            categoryCatalogPage.clickOnConcreteProduct();
            expect(productPage.basketIcon().isDisplayed()).toBe(true);
        });
        it("Verify if product is added into wishlist", function () {
            productPage.clickOnBasketIcon();
            userPopUp.clickOnContinueButton();
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            productPage.clickAddIntoWishListButton();
            header.clickOnWishListButton();
            waiter.waitForElementPresense(wishListPage.productCode(), 5000);
            expect(wishListPage.productCode().getText()).toBe(categoryCatalogPage.concreteProductIdText);
        });
    });

    describe(" - Verify If product can be added into basket - ", function () {
        it("Verify navigate to home page function", function () {
            legoHomePage.navigateToLegoHomePage();
            expect(legoHomePage.productButton().isDisplayed()).toBe(true);
        });
        it("Verify to categories catalog navigation", function () {
            legoHomePage.clickOnProductButton();
            expect(productCategoryPage.productCategoriesPageHeader().isDisplayed()).toBe(true);
            expect(productCategoryPage.productCategoriesPageHeader().getText()).toBe(productCategoryPage.productCategoriesPageHeaderText);
        });
        it("Verify to Category Home Page navigation", function () {
            productCategoryPage.clickOnStarWarsItem();
            expect(concreteCategoryHomePage.productMenuItem().isDisplayed()).toBe(true);
        });
        it("Verify to product catalog page navigation", function () {
            concreteCategoryHomePage.clickOnProductMenuItem();
            expect(categoryCatalogPage.concreteProduct().isDisplayed()).toBe(true);
        });
        it("Verify to concrete product page navigation", function () {
            categoryCatalogPage.clickOnConcreteProduct();
            expect(productPage.basketIcon().isDisplayed()).toBe(true);
        });
        it("Verify if product is added into basket", function () {
            productPage.clickOnBasketIcon();
            userPopUp.clickOnContinueButton();
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            productPage.clickOnBasketIcon();
            header.clickOnBasketButton();
            waiter.waitForElementPresense(basket.productCode(), 5000);
            expect(basket.productCode().getText()).toBe(categoryCatalogPage.concreteProductIdText);
        });
    });

});