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

  opaTest("Should see the table", function(Given, When, Then){
    Then.onTheMainPage.iShouldSeeThetable();
  });
});
