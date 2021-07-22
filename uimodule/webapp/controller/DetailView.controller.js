sap.ui.define([
    "interview/products/controller/BaseController",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("interview.products.controller.DetailView", {
        onInit: function(){
            //load jsohhn object model for driving editable object page
            this.objectModel = this.getOwnerComponent().getModel("Object");
            this.initialiseObjectModel();
            //when view loads, need to bind the model to the view
            this.getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this)
        },
        _onObjectMatched: function(oEvent){
            this.productId = oEvent.getParameter("arguments").productId;
            let view = this.getView();
            view.bindElement({
                path: "/Products(productId='" + this.productId + "')"
            });
        },
        initialiseObjectModel: function(){
            this.objectModel.setProperty("/editable", false);
        },
        pressEdit: function(oEvent){
            let editable = this.objectModel.getProperty("/editable");
            if (!editable){ //make it editable
                this.objectModel.setProperty("/editable", true);
            } else {
                this.getView().getModel().resetChanges();
                this.objectModel.setProperty("/editable", false);
            }
        },
        switchFavourite: function(oControlEvent){
            const button = oControlEvent.getSource();
            this.getView().getBindingContext().getProperty("isFavourite");
            if (button.getIcon() === "sap-icon://unfavorite"){
              button.setIcon("sap-icon://favorite");
              MessageToast.show(this.getResourceBundle().getText("FavouriteAdded"));
              return;
            }
            button.setIcon("sap-icon://unfavorite");
            MessageToast.show(this.getResourceBundle().getText("FavouriteRemoved"));
          },
          onSave: function(){
            this.getView().getModel().attachEventOnce("batchRequestCompleted", function(){
                this.objectModel.setProperty("/editable", false);
                let message = this.getResourceBundle().getText("ObjectUpdated");
                MessageToast.show(message);
            }.bind(this));
            this.getView().getModel().submitChanges();
          }
    });
});
