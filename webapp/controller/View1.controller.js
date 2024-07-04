sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function(Controller, Filter, FilterOperator, JSONModel) {
	"use strict";

	return Controller.extend("Task3.controller.View1", {
		onInit: function() {
			var sServiceUrl = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
				useBatch: false,
				defaultBindingMode: "TwoWay"
			});
			oModel.attachMetadataFailed(function() {
			
			});
			this.getView().setModel(oModel, "odataModel");

		},
		onGo: function() {
			var oModel = this.getView().getModel("odataModel");
			var oTable = this.byId("table");

			// Fetch all data from the OData service
			oModel.read("/SCHeaderSet", {
				success: function(oData) {
					var oJSONModel = new JSONModel(oData);
					oTable.setModel(oJSONModel, "SCHeaderSet2");

					oTable.bindItems({
						path: "SCHeaderSet2>/results",
						template: new sap.m.ColumnListItem({
							cells: [
								new sap.m.Text({
									text: "{SCHeaderSet2>ZdateSta}"
								}),
								new sap.m.Text({
									text: "{SCHeaderSet2>ZStatusSta}"
								}),
								new sap.m.Text({
									text: "{SCHeaderSet2>ZdateGluFru}"
								}),
								new sap.m.Text({
									text: "{SCHeaderSet2>Zshift}"
								})
							],
							type: "Navigation",
							press: this.onPress.bind(this)
						})
					});
				}.bind(this),
				error: function(oError) {
					console.error("Error occurred: ", oError);
				}
			});

		},
		onPress: function(oEvent) {

			var refNo = oEvent.getSource().getBindingContext('SCHeaderSet2').getObject().ZdateSta;

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2", {
				refNo: refNo
			}, false);
		},
		onCreate: function(oEvent) {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			console.log(oRouter.navTo("View3"))
			oRouter.navTo("View3");
		},
		onRefNo: function(oEvent) {
			var sQuery = this.byId("refNo").getValue();
			if (sQuery) {
				var sPath = "/SCHeaderSet(" + sQuery + ")";
				var oModel = this.getView().getModel("odataModel");

				if (!oModel) {
					console.error("OData model not found");
					return;
				}

				var oTable = this.byId("table");

				// Unbind previous items
				oTable.unbindItems();

				// Fetch specific entry based on sQuery
				oModel.read(sPath, {
					success: function(oData) {
						var aData = [oData];
						var oJSONModel = new JSONModel({
							results: aData
						});
						oTable.setModel(oJSONModel, "SCHeaderSet2");

						oTable.bindItems({
							path: "SCHeaderSet2>/results",
							template: new sap.m.ColumnListItem({
								cells: [
									new sap.m.Text({
										text: "{SCHeaderSet2>ZdateSta}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet2>ZStatusSta}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet2>ZdateGluFru}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet2>Zshift}"
									})
								],
								type: "Navigation",
								press: this.onPress.bind(this)
							})
						});
					}.bind(this),
					error: function(oError) {
						console.error("Error occurred: ", oError);
					}
				});
			} else {
				// var oTable = this.byId("table");

				// Unbind previous items
				oTable.unbindItems();
			}
		}
	});
});