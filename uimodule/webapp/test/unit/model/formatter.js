sap.ui.define([
    "interview/products/model/formatter"
], function(formatter) {
    "use strict";

    QUnit.module("Price State");

    function priceStateTest(testProperties){
        var actualState = formatter.priceState(testProperties.price);

        testProperties.assert.strictEqual(actualState, testProperties.expected, "Price State" + actualState + " Correct") ;
    }

    QUnit.test("Should format product list items with prices >100 to Error (red)", function(assert){
        priceStateTest({
            assert: assert,
            price: 101,
            expected: "Error"
        });
    });
    QUnit.test("Should format product list items with prices <100 to Success (green)", function(assert){
        priceStateTest({
            assert: assert,
            price: 50,
            expected: "Success"
        });
    });
    QUnit.test("Should format product list items with prices =100 to Error (red)", function(assert){
        priceStateTest({
            assert: assert,
            price: 100,
            expected: "Error"
        });
    });
});