sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("Task3.controller.View1", {
		onInit: function() {

		},
		onGo: function() {
			var sServiceURL = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";

			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceURL);
			this.getView().setModel(oModel, "SCHeaderSet");
			var oData = this.getView().getModel("SCHeaderSet");
			oData.read("/SCHeaderSet", {
				success: function(response) {

					console.log("success");
				},
				error: function(oError) {

				}
			});
		},
		onPress: function(oEvent) {

			var refNo = oEvent.getSource().getBindingContext('SCHeaderSet').getObject().ZdateSta;

			console.log(refNo);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2", {
				refNo: refNo
			}, false);
		},
		onRefNo: function(oEvent) {
			// var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			// var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUri);
			// this.getView().setModel(oModel, "SCHeaderSet");
			// this.getView().getModel("SCHeaderSet");
			// var aFilter = [], sQuery= oEvent.getParameter("query"),
			// oList = this.getView().byId("table"),
			// oBinding = oList.getBinding("items");

			// if(sQuery){
			// 	aFilter.push(new Filter("ZdateSta",FilterOperator.Contains, sQuery));
			// }
			// oBinding.filter(aFilter);

			// var	sQuery= oEvent.getParameter("query");
			// 		oModel1.read("/SCHeaderSet", {
			// 		filters: [
			// 			new sap.ui.model.Filter("ZdateSta", sap.ui.model.FilterOperator.EQ, sQuery)
			// 		],
			// 		success: function(oData2) {

			// 		}.bind(this),
			// 		error: function(oError) {
			// 			console.log(oError)
			// 		}
			// 	});

			
			var aFilter = [],
				sQuery = oEvent.getParameter("query"),
				// retrieve list control
				oList = this.getView().byId("table"),
				// get binding for aggregation 'items'
				oBinding = oList.getBinding("items");
			
			if (sQuery) {
				aFilter.push(new sap.ui.model.Filter("6", sap.ui.model.FilterOperator.Contains, sQuery));
			}
			// apply filter. an empty filter array simply removes the filter
			// which will make all entries visible again
			oBinding.filter(aFilter);
			console.log(aFilter);

			// var sQuery = oEvent.getParameter("query");
			// var oTable = this.getView().byId("table");
			// var oBinding = oTable.getBinding("items");
			// var oFilter = new Filter("ZdateSta", FilterOperator.Contains, sQuery);
			// console.log(oFilter)
			// oBinding.filter([oFilter]);

		}
	});
});