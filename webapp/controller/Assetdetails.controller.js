sap.ui.define([
    'Asset/controller/BaseController'
], function (BaseController) {
    'use strict';
    return BaseController.extend("Asset.controller.Assetdetails",
        {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                
            }
            
        });
});