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
        // switchFavourite: function(oControlEvent){
        //     // let isFavourite = this.getView().getBindingContext().getProperty("isFavourite");
        //     // this.getView().getBindingContext().s
        //     this.markAsFav(oControlEvent);
        // },
        initialiseObjectModel: function(){
            this.objectModel.setProperty("/editable", false);
        },
        pressEdit: function(oEvent){
            //toggle pressed property
            oEvent.getSource().setPressed(!oEvent.getSource().getPressed());
            //updatge editable model to open up fields
            let editable = this.objectModel.getProperty("/editable");
            this.objectModel.setProperty("/editable", !editable);

            this.objectModel.setProperty("/description", this.getView().byId("descriptionInput").getValue());
        },
        switchFavourite: function(oControlEvent){
            const button = oControlEvent.getSource();
            this.getView().getBindingContext().getProperty("isFavourite");
            if (button.getIcon() === "sap-icon://unfavorite"){
              button.setIcon("sap-icon://favorite");
              this.setFavourite(true);
              MessageToast.show("Added to Favourites");
              return;
            }
            button.setIcon("sap-icon://unfavorite");
            this.setFavourite(false);
            MessageToast.show("Removed from Favourites");
          },
          setFavourite: function(isFavourite){
            // this.getView().getModel().attachEventOnce("batchRequestCompleted", function(){
            //     let message = isFavourite ? "Added to Favourites" : "Removed from Favourites";
            //     MessageToast.show(message);
            // });
            // this.getView().getModel().update("/Products", {productId: this.productId, isFavourite: isFavourite});
            // this.getView().getModel().setProperty("/Products(productId='" + this.productId + "')/isFavourite", isFavourite);
            // this.getView().getModel().submitChanges();
          },
          onSave: function(){
            this.getView().getModel().attachEventOnce("batchRequestCompleted", function(){
                this.objectModel.setProperty("/editable", false);
                let message = "Object Updated";
                MessageToast.show(message);
            }.bind(this));
            this.getView().getModel().submitChanges();
          }
    });
});
