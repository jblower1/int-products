sap.ui.define(["interview/products/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("interview.products.controller.MainView", {
        onInit: function(){
            this.setModel(this.getOwnerComponent().getModel());
        }
    });
});