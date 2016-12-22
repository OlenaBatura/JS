var BasketPopUp = function () {
    this.productCode = function () {
        return element(by.xpath("//span[@data-test='item-product-code']"));
    }
};

module.exports = new BasketPopUp();