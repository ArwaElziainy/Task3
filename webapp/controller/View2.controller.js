sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Task3.controller.View2", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onRouteMatched, this);
		},
				_onRouteMatched: function(oEvent) {

			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUri, {
				json: true
			});
			this.getView().setModel(oModel, "SCHeaderSet");
			var oData = this.getView().getModel("SCHeaderSet");
			var refNo = this.getView().byId("refNo");
			var refValue = refNo.getValue();
			console.log(refValue)

		

		}

	});
});