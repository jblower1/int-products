sap.ui.define([
    "interview/products/model/formatter"
], function(formatter) {
    "use strict";

    QUnit.module("Price State");

    function priceStateTest(testProperties){
        var actualState = formatter.priceState(testProperties.price);

        testProperties.assert.strictEqual(actualState, testProperties.expected, "Price State " + actualState + " Correct") ;
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

    QUnit.module("Price NumberFormat");
    function priceFormatTest(testProperties){
        var actualFormat = formatter.priceDisplay(testProperties.price);

        testProperties.assert.strictEqual(actualFormat, testProperties.expected, "Price Format " + actualFormat + " Correct" );
    }

    QUnit.test("Should format product prices with 2 dp, 0 dp source, 3 digit number", function(assert){
        priceFormatTest({
            assert: assert,
            price: 100,
            expected: "£100.00"
        });
    });

    QUnit.test("Should format product prices with 2 dp, 1 dp source, 3 digit number", function(assert){
        priceFormatTest({
            assert: assert,
            price: 100.5,
            expected: "£100.50"
        });
    });

    QUnit.test("Should format product prices with 2 dp, 1 dp source, 2 digit number", function(assert){
        priceFormatTest({
            assert: assert,
            price: 99.5,
            expected: "£99.50"
        });
    });

    QUnit.test("Should format product prices with 2 dp, 0 dp source, 2 digit number", function(assert){
        priceFormatTest({
            assert: assert,
            price: 99,
            expected: "£99.00"
        });
    });
});