sap.ui.define([], function () {
    "use strict";
    return {
        priceState: function(price){
            return price && price < 100 ? "Success" : "Error";
        },
        priceDisplay: function(price){
            //trailing zeros
            if (price){
                let sPrice = price.toString();
                let length = sPrice.length;
                let dps = sPrice.indexOf(".");
                let precision = 0;
                if (dps === -1)  precision = length + 2;
                else if (dps === length - 2) precision = length;
                else if (dps === length - 3) precision = length - 1;
                return price.toPrecision(precision) ;
            } else {
                return "";
            }
        },
        favouriteState: function(isFavourite){
            return isFavourite ? "Success" : "None";
        },
        favouriteIcon: function(isFavourite){
            return isFavourite ? "sap-icon://favorite" : "sap-icon://unfavorite";
        }
    };
});
