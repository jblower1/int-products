sap.ui.define([], function () {
    "use strict";
    return {
        priceState: function(price){
            return price < 100 ? "Success" : "Error";
        },
        priceDisplay: function(price){
            //trailing zeros
            let sPrice = price.toString();
            let length = sPrice.length;
            let dps = sPrice.indexOf(".");
            let precision = 0;
            if (dps === -1)  precision = length + 2;
            else if (dps === length - 2 ) precision = length;
            return price.toPrecision(precision) ;
        }
    };
});
