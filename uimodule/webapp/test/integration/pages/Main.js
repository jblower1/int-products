sap.ui.require([
  "sap/ui/test/Opa5",
  "sap/ui/test/actions/Press"
], function (Opa5, Press) {
  "use strict";

  var sViewName = "interview.products.view.MainView";

  Opa5.createPageObjects({
    onTheMainPage: {
      viewName: sViewName,

      actions: {
        // add action functions here
        iPressTheButton: function () {
          return this.waitFor({
            controlType: "sap.m.Button",
            actions: new Press(),
            errorMessage: "App does not have a button"
          });
        }
      },

      assertions: {
          // add assertion functions here
          iShouldSeeTheTitle: function () {
            return this.waitFor({
              controlType: "sap.m.Title",
              properties: {
                text: "interview.products"
              },
              success: function() {
                Opa5.assert.ok(true, "The page shows the correct title");
              },
              errorMessage: "App does not show the expected title interview.products"
            });
        },
        iShouldSeeItems: function(){
          return this.waitFor({
            id: "productsTable",
            viewName: "MainView",
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
