sap.ui.define([
  "sap/ui/test/opaQunit",
  // "./pages/Main",
  "./pages/Main"
], function (opaTest) {
  "use strict";

  opaTest("Should see the worklist page with title", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    // Assertions
    Then.onTheMainPage.iShouldSeeTheTitle();
  });

  opaTest("Should see the table with the correct number of items", function(Given, When, Then){
    Then.onTheMainPage.iShouldSeeThetable().and.iShouldSeeItems();
    // Then.iTeardownMyApp();
  });

  opaTest("Should see the detail page with title", function(Given, When, Then){
    // Then.onTheDetailPage.iChangeTheHashToTheObjectItem();
    // When.onTheMainPage.iChangeTheHashToTheObjectItem();
    When.onTheMainPage.iPressOnTheItemWithTheID("P5782");
    Then.onTheDetailPage.iShouldSeeTheTitle();
    // Cleanup
    // Then.iTeardownMyApp();
  });

  opaTest("Should see editable fields when the edit button is pressed", function(Given, When, Then){
    // When.onTheDetailPage.iChangeTheHashToTheObjectItem();
    // Given.iStartMyApp();
    // When.onTheMainPage.iNavigateToTheDetailPage();
    When.onTheMainPage.iChangeTheHashToTheObjectItem();
    // When.onTheDetailPage.iPressTheEditButton();
    Then.onTheDetailPage.iShouldSeeTheDetailPage();
    // Then.onTheDetailPage.theFieldsShouldBeEditable();
    Then.iTeardownMyApp();
  });

});
