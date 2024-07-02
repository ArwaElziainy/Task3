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
				console.log("error");
			});
			this.getView().setModel(oModel);

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
			console.log(sQuery)
			if (sQuery) {
				var sPath = "/SCHeaderSet(" + sQuery + ")";
				var oModel = this.getView().getModel();

				this.byId("table").unbindItems();

				oModel.read(sPath, {
					success: function(oData) {
						console.log("Data fetched successfully:", oData);

						var aData = [oData];
						var oJSONModel = new JSONModel({
							results: aData
						});
						this.getView().setModel(oJSONModel, "SCHeaderSet");

						this.byId("table").bindItems({
							path: "SCHeaderSet>/results",
							template: new sap.m.ColumnListItem({
								cells: [
									new sap.m.Text({
										text: "{SCHeaderSet>ZdateSta}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet>ZStatusSta}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet>ZdateGluFru}"
									}),
									new sap.m.Text({
										text: "{SCHeaderSet>Zshift}"
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
			}
		},

		onStatus: function(oEvent) {
			var sQuery = this.byId("status").getValue();
			console.log(sQuery)
			if (sQuery) {
				var sPath = "/SCHeaderSet(" + sQuery + ")";
				var oModel = this.getView().getModel();

				this.byId("table").unbindItems();

				oModel.read(sPath, {
					success: function(oData) {
						console.log("Data fetched successfully:", oData);

						var aData = [oData];
						var oJSONModel = new JSONModel({
							results: aData
						});
						this.getView().setModel(oJSONModel, "detailModel");

						this.byId("table").bindItems({
							path: "detailModel>/results",
							template: new sap.m.ColumnListItem({
								cells: [
									new sap.m.Text({
										text: "{detailModel>ZdateSta}"
									}),
									new sap.m.Text({
										text: "{detailModel>ZStatusSta}"
									}),
									new sap.m.Text({
										text: "{detailModel>ZdateGluFru}"
									}),
									new sap.m.Text({
										text: "{detailModel>Zshift}"
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
			}
		}
	});
});