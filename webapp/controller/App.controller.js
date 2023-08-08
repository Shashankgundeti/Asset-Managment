sap.ui.define([
    'Asset/controller/BaseController'
], function (BaseController) {
    'use strict';
    return BaseController.extend("Asset.controller.App",
        {
            onInit: function () {
                console.log("app controller is ready")
            }
        });
});