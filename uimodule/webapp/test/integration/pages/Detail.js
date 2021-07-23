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