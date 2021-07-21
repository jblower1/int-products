sap.ui.define(["interview/products/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("interview.products.controller.DetailView", {
        onInit: function(){
            //when view loads, need to bind the model to the view
            this.getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this)
        },
        _onObjectMatched: function(oEvent){
            let productId = oEvent.getParameter("arguments").productId;
            let view = this.getView();
            view.bindElement({
                path: "/Products(productId='" + productId + "')"
            });
        },
        switchFavourite: function(oEvent){
            // let isFavourite = this.getView().getBindingContext().getProperty("isFavourite");
            // this.getView().getBindingContext().s
        }
    });
});
