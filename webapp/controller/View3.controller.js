sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("Task3.controller.View3", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View3").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {

			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";

			var oModel = new sap.ui.model.odata.ODataModel(sServiceUri, {
				json: true
			});
			this.getView().setModel(oModel, "SCHeaderSet");
			var refNo = oEvent.getParameter("arguments").refNo;
			var oData = this.getView().getModel("SCHeaderSet");
			console.log(oData, refNo)

		},
		onCreate: function() {
			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUri);

			var newEntries = {
				// General Details
				Zshift: this.getView().byId("shift").getValue(),
				ZdateGluFru: this.getView().byId("date").getValue(),
				//تحويلات الجلوكوز	
				ZTank1Sta: +(this.getView().byId("awl1").getValue()),
				ZTank3Sta: +(this.getView().byId("akher1").getValue()),
				ZTank5Sta: +(this.getView().byId("y1").getValue()),
				ZTank2Sta: +(this.getView().byId("awl2").getValue()),
				ZTank4Sta: +(this.getView().byId("akher2").getValue()),
				ZTank6Sta: +(this.getView().byId("y2").getValue()),
				ZTank7Sta: +(this.getView().byId("br").getValue()),
				ZFru1Sta: +(this.getView().byId("total").getValue()),
				//النشا الجاف
				// : +(this.getView().byId("orderNo").getValue()),
				ZDry1Sta: +(this.getView().byId("H").getValue()),
				ZDry2Sta: +(this.getView().byId("I").getValue()),
				//النشا التام
				// : +(this.getView().byId("orderNo1").getValue()),
				ZPack1Sta: +(this.getView().byId("K").getValue()),
				ZPack2Sta: +(this.getView().byId("L").getValue()),
				ZPack3Sta: +(this.getView().byId("M").getValue()),
				// فرق تغير تانكات حليب النشا
				// : +(this.getView().byId("orderNo2").getValue()),
				ZTank18Sta: +(this.getView().byId("T1").getValue()),
				// ZBy1Sta: +(this.getView().byId("KM").getValue()),
				ZTank14Sta: +(this.getView().byId("T2").getValue()),
				// ZBy4Sta: +(this.getView().byId("GM").getValue()),
				ZTank15Sta: +(this.getView().byId("T3").getValue()),
				// ZBy7Sta: +(this.getView().byId("JM").getValue()),
				ZTank16Sta: +(this.getView().byId("T4").getValue()),
				ZBy10Sta: +(this.getView().byId("Oil").getValue()),
				ZTank17Sta: +(this.getView().byId("T5").getValue()),
				ZBy14Sta: +(this.getView().byId("W").getValue()),
				//Table
				ZQty1Sta: +(this.getView().byId("production1").getValue()),
				ZOil1Sta: +(this.getView().byId("oil1").getValue()),
				ZQty2Sta: +(this.getView().byId("production2").getValue()),
				ZOil2Sta: +(this.getView().byId("oil2").getValue()),
				ZQty3Sta: +(this.getView().byId("production3").getValue()),
				ZOil3Sta: +(this.getView().byId("oil3").getValue()),
				ZQty4Sta: +(this.getView().byId("production4").getValue()),
				ZOil4Sta: +(this.getView().byId("oil4").getValue()),
				//الباقي
				ZKkSta: +(this.getView().byId("KK").getValue()),
				ZSsSta: +(this.getView().byId("SS").getValue()),
				ZQtyproSta: +(this.getView().byId("Protin").getValue()),
				ZHumSta: +(this.getView().byId("HumR").getValue()),
				// ---------------
				ZWat1Sta: +(this.getView().byId("first").getValue()),
				ZWat2Sta: +(this.getView().byId("last").getValue()),
				ZWat3Sta: +(this.getView().byId("WY").getValue()),
				ZWatHumSta: +(this.getView().byId("WHum").getValue()),
				ZBy1Sta: +(this.getView().byId("PK").getValue()),
				ZBy4Sta: +(this.getView().byId("PG").getValue()),
				ZBy7Sta: +(this.getView().byId("GT").getValue())
			};

			oModel.create("/SCHeaderSet", newEntries, {
				success: function(oData) {
					console.log(oData)
				},
				error: function(oError) {
					console.log(oError)
				}
			});
			oModel.submitChanges();
		},
		onNavBack: function() {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		}

	});
});