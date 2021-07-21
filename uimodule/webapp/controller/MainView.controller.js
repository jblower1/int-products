sap.ui.define(["interview/products/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("interview.products.controller.MainView", {
        onInit: function(){
        },
        onItemPress: function(oEvent){
            this.navTo("Detail", { productId: oEvent.getSource().getBindingContext().getProperty("productId")});
        }
    });
});
