sap.ui.require([
  "sap/ui/test/Opa5",
  "sap/ui/test/matchers/AggregationLengthEquals",
  "sap/ui/test/matchers/I18NText",
  "sap/ui/test/actions/Press",
  'sap/ui/test/matchers/BindingPath'
], function (Opa5, AggregationLengthEquals, I18NText, Press, BindingPath) {
  "use strict";

  var sViewName = "MainView";
  var sDetailViewName = "DetailView";

  Opa5.createPageObjects({
    onTheMainPage: {
      viewName: sViewName,

      actions: {
        iChangeTheHashToTheObjectItem: function () {
          return this.waitFor({
              success: function () {
                  Opa5.getHashChanger().setHash("Product/" + "P5782");
              }
          });
        },
        iNavigateToTheDetailPage: function(){
          return this.waitFor({
              viewName: sViewName,
              id: "dummyButton",
              controlType: "sap.m.Button",
              actions: new Press(),
              errorMessage: "The detail page does not have an dummy button"
            });
        },
        iPressOnTheItemWithTheID: function (sId) {
          return this.waitFor({
            controlType: "sap.m.ColumnListItem",
            viewName: sViewName,
            matchers: new BindingPath({
              path: "/Products(productId='" + sId + "')"
            }),
            actions: new Press(),
            errorMessage: "No list item with the id " + sId + " was found."
          });
        }
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
    },
    onTheDetailPage: {
      viewName: sDetailViewName,
      actions: {
        iPressTheEditButton: function(){
          return this.waitFor({
            id: "editButton",
            controlType: "sap.m.Button",
            actions: new Press(),
            errorMessage: "The detail page does not have an edit button"
          });
        }
      },
      assertions: {
        iShouldSeeTheTitle: function(){
          return this.waitFor({
            viewName: sDetailViewName,
            controlType: "sap.m.Page",
            matchers: new I18NText({
              key: "detailTitle",
              propertyName: "title"
            }),
            success: function(){
              Opa5.assert.ok(true, "The detail page shows the correct title");
            },
            errorMessage: "The detail page does not show the correct title"
          });
        },
        iShouldSeeTheDetailPage: function(){
          return this.waitFor({
            id: "DetailPage",
            viewName: sDetailViewName,
            controlType: "sap.m.Page",
            success: function(){
              Opa5.assert.ok(true, "The detail page shows");
            }
          });
        },
        theFieldsShouldBeEditable: function(){
          return this.waitFor({
            controlType: "sap.m.Input",//"sap.m.Input", "sap.m.DatePicker"],
            viewName: sDetailViewName,
            matchers: function(inputs){
              //inputs should be an array of inputs
              if (inputs.length === 0){
                return false;
              }
              return inputs.every(function(input){
                return input.getEnabled();
              });
            }
          });
        }
      }
    }
  });

});
