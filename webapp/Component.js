sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    'use strict';
    return UIComponent.extend("Asset.Component", {
        metadata: {
            manifest:"json"
        },
        // constructor of the class
        init: function () {
            //   super class constructor call 
            UIComponent.prototype.init.apply(this);
            // Get the router Object
        var oRouter = this.getRouter();
        // Initialization function
        oRouter.initialize();

        },

        destory: function () { }
    })
});