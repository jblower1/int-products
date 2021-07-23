sap.ui.require([
    "sap/ui/test/Opa5",
    "sap/ui/test/matchers/I18NText",
    "sap/ui/test/actions/Press"
  ], function (Opa5, I18NText, Press) {
    "use strict";

    var sDetailViewName = "DetailView";

    Opa5.createPageObjects({
      onTheDetailPage: {
        viewName: sDetailViewName,
        actions: {
          iPressTheEditButton: function(){
            return this.waitFor({
              viewName: sDetailViewName,
              id: "editButton",
              controlType: "sap.m.Button",
              actions: new Press(),
              errorMessage: "The detail page does not have an edit button"
            });
          },
          iChangeTheHashToTheObjectItem: function () {
            return this.waitFor({
                success: function () {
                    // var sObjectId = this.getContext().currentItem.id;
                    Opa5.getHashChanger().setHash("Product/" + "TESTID");
                }
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
          theFieldsShouldBeEditable: function(){
            return this.waitFor({
              controlType: ["sap.m.Input", "sap.m.DatePicker"],
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