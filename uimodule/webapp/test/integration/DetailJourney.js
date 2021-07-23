sap.ui.define([
    "sap/ui/test/opaQunit",
    // "./pages/Main",
    "./pages/Detail"
  ], function (opaTest) {
    "use strict";

    opaTest("Should see editable fields when the edit button is pressed", function(Given, When, Then){
        // When.onTheDetailPage.iChangeTheHashToTheObjectItem();
        When.onTheDetailPage.iPressTheEditButton();
        Then.onTheDetailPage.theFieldsShouldBeEditable();
      });

      opaTest("Should see the detail page with title", function(Given, When, Then){
        // Then.onTheDetailPage.iChangeTheHasToTheObjectItem();
        Then.onTheDetailPage.iShouldSeeTheTitle();
        // Cleanup
        Then.iTeardownMyApp();
      });

});