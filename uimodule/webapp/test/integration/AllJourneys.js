sap.ui.define([
  "sap/ui/test/Opa5",
  "./arrangements/Startup",
  "./MainJourney"
  // "./DetailJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    viewNamespace: "interview.products.view",
    autoWait: true
  });

});
