sap.ui.require([
  "sap/ui/test/Opa5",
  "sap/ui/test/matchers/AggregationLengthEquals",
  "sap/ui/test/matchers/I18NText"
], function (Opa5, AggregationLengthEquals, I18NText) {
  "use strict";

  var sViewName = "interview.products.view.MainView";

  Opa5.createPageObjects({
    onTheMainPage: {
      viewName: sViewName,

      actions: {

      },

      assertions: {
          // add assertion functions here
          iShouldSeeTheTitle: function () {
            return this.waitFor({
              controlType: "sap.m.Page",
              matchers: new I18NText({
                key: "worklistTitle",
                propertyName: "title"
              }),
              success: function() {
                Opa5.assert.ok(true, "The main page shows the correct title");
              },
              errorMessage: "App does not show the expected title"
            });
        },
        iShouldSeeThetable: function(){
          return this.waitFor({
            id: "productsTable",
            viewName: sViewName,
            controlType: "sap.m.Table",
            success: function(){
              Opa5.assert.ok(true, "The main page shows the products table");
            }
          });
        },
        iShouldSeeItems: function(){
          return this.waitFor({
            id: "productsTable",
            viewName: sViewName,
            matchers: new AggregationLengthEquals({
              name: "items",
              length: 7
            }),
            success: function(){
              Opa5.assert.ok(true, "The table has 7 items");
            },
            errorMessage: "The table does not contain 7 items"
          });
        }
      }
    }
  });

});
