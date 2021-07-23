sap.ui.define([
    "sap/ui/test/Opa5",
    "interview/products/localService/mockserver"
], function (Opa5, mockserver) {
    "use strict";

    return Opa5.extend("interview.products.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            mockserver.init(true);

            this.iStartMyUIComponent({
                componentConfig: {
                    name: "interview.products",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
