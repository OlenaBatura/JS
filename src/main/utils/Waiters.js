var Waiters = function () {
    this.waitWhileElementBeClicable = function (element, timeouts) {
        var ec = protractor.ExpectedConditions.elementToBeClickable(element);
        browser.wait(ec, timeouts);
    };
    this.waitForElementPresense = function (element, timeout) {
        var ec = protractor.ExpectedConditions.presenceOf(element);
        browser.wait(ec, timeout);
    };
    this.waitForElementVisibility = function (element, timeouts) {
        var ec = protractor.ExpectedConditions.visibilityOf(element);
        browser.wait(ec, timeouts);
    }
};

module.exports = new Waiters();