var waiter = require("../utils/Waiters");

/**
 * Created by Olena_Batura on 21.12.2016.
 */
var ConfirmUserPopUp = function () {
    this.continueButton = function () {
        return element(by.xpath("//a[text()='CONTINUE']"));
    };

    this.clickOnContinueButton = function () {
        waiter.waitWhileElementBeClicable(this.continueButton(), 5000)
        this.continueButton().click();
    };
};

module.exports = new ConfirmUserPopUp();
