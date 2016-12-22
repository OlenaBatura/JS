var WishListPage = function () {
    this.productCode = function () {
        return element(by.xpath("//span[@data-test='wishlist-item-75159-code']"));
    };
};

module.exports = new WishListPage();