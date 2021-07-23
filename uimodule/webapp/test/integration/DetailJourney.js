sap.ui.define([
    "sap/ui/test/opaQunit",
    // "./pages/Main",
    "./pages/Main",
    "./pages/Detail"
  ], function (opaTest) {
    "use strict";

    opaTest("Should see editable fields when the edit button is pressed", function(Given, When, Then){
        // When.onTheDetailPage.iChangeTheHashToTheObjectItem();
        // Given.iStartMyApp();
        // When.onTheMainPage.iNavigateToTheDetailPage();
        When.onTheMainPage.iChangeTheHashToTheObjectItem();
        // When.onTheDetailPage.iPressTheEditButton();
        Then.onTheDetailPage.iShouldSeeTheDetailPage();
        // Then.onTheDetailPage.theFieldsShouldBeEditable();
      });

      opaTest("Should see the detail page with title", function(Given, When, Then){
        // Then.onTheDetailPage.iChangeTheHashToTheObjectItem();
        Then.onTheDetailPage.iShouldSeeTheTitle();
        // Cleanup
        Then.iTeardownMyApp();
      });

});