sap.ui.define(["interview/products/controller/BaseController"], function (Controller) {
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
            let productId = oEvent.getParameter("arguments").productId;
            let view = this.getView();
            view.bindElement({
                path: "/Products(productId='" + productId + "')"
            });
        },
        switchFavourite: function(){
            // let isFavourite = this.getView().getBindingContext().getProperty("isFavourite");
            // this.getView().getBindingContext().s
        },
        initialiseObjectModel: function(){
            this.objectModel.setProperty("/editable", false);
            // this.objectModel.setData({
            //     editable: false
            //     // name: "",
            //     // description: "",
            //     // colour: "",
            //     // activeFrom: "",
            //     // activeTo: "",
            //     // isFavourite: "",
            //     // price: ""
            // });
        },
        pressEdit: function(oEvent){
            //toggle pressed property
            oEvent.getSource().setPressed(!oEvent.getSource().getPressed());
            //updatge editable model to open up fields
            let editable = this.objectModel.getProperty("/editable");
            this.objectModel.setProperty("/editable", !editable);

            this.objectModel.setProperty("/description", this.getView().byId("descriptionInput").getValue());
        }
    });
});
