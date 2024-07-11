sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("Task3.controller.View2", {
		onInit: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onRouteMatched, this);

		},
		_onRouteMatched: function(oEvent) {
			var displayBlock = document.getElementsByClassName("displayNone");
			for (var i2 = 0; i2 < displayBlock.length; i2++) {
				displayBlock[i2].style.display = "none";
			}
			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";

			var oModel = new sap.ui.model.odata.ODataModel(sServiceUri, {
				json: true
			});
			this.getView().setModel(oModel, "SCHeaderSet");
			var refNo = oEvent.getParameter("arguments").refNo;
			var oData = this.getView().getModel("SCHeaderSet");

			oData.read("/SCHeaderSet(" + refNo + ")", {
				success: function(oData2) {

					this.getView().byId("genRef").setText(oData2.ZdateSta);
					this.getView().byId("genShift").setText(oData2.Zshift);
					this.getView().byId("genDate").setText(oData2.ZdateGluFru);
					this.getView().byId("genStatus").setText(oData2.ZStatusSta);
					// General Information

					this.getView().byId("shiftTex").setText(oData2.Zshift);
					this.getView().byId("dateTex").setText(oData2.ZdateGluFru);
					//تحويلات الجلوكوز
					this.getView().byId("awl1Tex").setText(oData2.ZTank1Sta);
					this.getView().byId("akher1Tex").setText(oData2.ZTank3Sta);
					this.getView().byId("y1Tex").setText(oData2.ZTank5Sta);
					this.getView().byId("awl2Tex").setText(oData2.ZTank2Sta);
					this.getView().byId("akher2Tex").setText(oData2.ZTank4Sta);
					this.getView().byId("y2Tex").setText(oData2.ZTank6Sta);
					this.getView().byId("brTex").setText(oData2.ZTank7Sta);
					this.getView().byId("totalTex").setText(oData2.ZFru1Sta);
					//النشا الجاف
					this.getView().byId("HTex").setText(oData2.ZDry1Sta);
					this.getView().byId("ITex").setText(oData2.ZDry2Sta);
					//النشا التام
					this.getView().byId("KTex").setText(oData2.ZPack1Sta);
					this.getView().byId("LTex").setText(oData2.ZPack2Sta);
					this.getView().byId("MTex").setText(oData2.ZPack3Sta);
					// فرق تغير تانكات حليب النشا
					this.getView().byId("T1Tex").setText(oData2.ZTank18Sta);
					this.getView().byId("KMTex").setText(oData2.ZBy1Sta);
					this.getView().byId("T2Tex").setText(oData2.ZTank14Sta);
					this.getView().byId("GMTex").setText(oData2.ZBy4Sta);
					this.getView().byId("T3Tex").setText(oData2.ZTank15Sta);
					this.getView().byId("JMTex").setText(oData2.ZBy7Sta);
					this.getView().byId("T4Tex").setText(oData2.ZTank16Sta);
					this.getView().byId("OilTex").setText(oData2.ZBy10Sta);
					this.getView().byId("T5Tex").setText(oData2.ZTank17Sta);
					this.getView().byId("WTex").setText(oData2.ZBy14Sta);
					//Table
					this.getView().byId("production1Tex").setText(oData2.ZQty1Sta);
					this.getView().byId("oil1Tex").setText(oData2.ZOil1Sta);
					this.getView().byId("production2Tex").setText(oData2.ZQty2Sta);
					this.getView().byId("oil2Tex").setText(oData2.ZOil2Sta);
					this.getView().byId("production3Tex").setText(oData2.ZQty3Sta);
					this.getView().byId("oil3Tex").setText(oData2.ZOil3Sta);
					this.getView().byId("production4Tex").setText(oData2.ZQty4Sta);
					this.getView().byId("oil4Tex").setText(oData2.ZOil4Sta);
					//الباقي
					this.getView().byId("KKTex").setText(oData2.ZKkSta);
					this.getView().byId("SSTex").setText(oData2.ZSsSta);
					this.getView().byId("ProtinTex").setText(oData2.ZQtyproSta);
					this.getView().byId("HumRTex").setText(oData2.ZHumSta);
					// ---------------
					this.getView().byId("firstTex").setText(oData2.ZWat1Sta);
					this.getView().byId("lastTex").setText(oData2.ZWat2Sta);
					this.getView().byId("WTex").setText(oData2.ZWat3Sta);
					this.getView().byId("WHumTex").setText(oData2.ZWatHumSta);
					this.getView().byId("PKTex").setText(oData2.ZBy1Sta);
					this.getView().byId("PGTex").setText(oData2.ZBy4Sta);
					this.getView().byId("GTTex").setText(oData2.ZBy7Sta);
					//Outputs
					this.getView().byId("meter1").setText(oData2.ZTank8Sta);
					this.getView().byId("meter2").setText(oData2.ZTank9Sta);
					this.getView().byId("tonD1").setText(oData2.ZTank10Sta);
					this.getView().byId("tonD2").setText(oData2.ZTank11Sta);
					this.getView().byId("tonR1").setText(oData2.ZTank12Sta);
					this.getView().byId("tonR2").setText(oData2.ZTank13Sta);
					this.getView().byId("G").setText(oData2.ZFru1Sta);
					this.getView().byId("G1").setText(oData2.ZFru3Sta);
					this.getView().byId("J").setText(oData2.ZDryTotalSta);
					this.getView().byId("N").setText(oData2.ZDryPrdSta);
					this.getView().byId("R").setText(oData2.ZTankTotalSta);
					this.getView().byId("KR").setText(oData2.ZOil5Sta);
					this.getView().byId("NZ").setText(oData2.ZNzSta);
					this.getView().byId("NK").setText(oData2.ZNkSta);
					this.getView().byId("NDS").setText(oData2.ZNdsSta);
					this.getView().byId("NDG").setText(oData2.ZNdgSta);
					this.getView().byId("BRG").setText(oData2.ZBrgSta);
					this.getView().byId("BR").setText(oData2.ZBrSta);
					this.getView().byId("YW").setText(oData2.ZWat4Sta);
					this.getView().byId("mWatG").setText(oData2.ZWat5Sta);
					this.getView().byId("watDG").setText(oData2.ZWat6Sta);
					this.getView().byId("WG").setText(oData2.ZWgSta);
					this.getView().byId("OPK").setText(oData2.ZBy16Sta);
					this.getView().byId("OPG").setText(oData2.ZBy17Sta);
					this.getView().byId("OGT").setText(oData2.ZBy18Sta);
					this.getView().byId("PZ").setText(oData2.ZBy19Sta);
					this.getView().byId("SW").setText(oData2.ZBy20Sta);
					this.getView().byId("TM").setText(oData2.ZBy21Sta);
					this.getView().byId("WW").setText(oData2.ZBy22Sta);
					this.getView().byId("WW2").setText(oData2.ZBy23Sta);
					this.getView().byId("by").setText(oData2.ZdateStaBy);
					this.getView().byId("on").setText(oData2.ZdateStaOn);

				}.bind(this),
				error: function(oError) {
					console.log("error")
				}
			});

		},
		onChange: function() {
			var displayBlock = document.getElementsByClassName("displayNone");
			for (var i2 = 0; i2 < displayBlock.length; i2++) {
				displayBlock[i2].style.display = "Block";
			}
			var editIcon = document.getElementsByClassName("onEdit");
			for (var i = 0; i < editIcon.length; i++) {
				editIcon[i].style.display = "none";
			}
			this.getView().byId("save2").setVisible(true);
			this.getView().byId("cancel").setVisible(true);

			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";

			var oModel = new sap.ui.model.odata.ODataModel(sServiceUri, {
				json: true
			});
			this.getView().setModel(oModel, "SCHeaderSet");
			var refNo = this.getView().byId("genRef").getText();
			console.log(refNo)
			var oData = this.getView().getModel("SCHeaderSet");
			oData.read("/SCHeaderSet(" + refNo + ")", {
				success: function(oData2) {

					// General Information

					this.getView().byId("shift").setValue(oData2.Zshift);
					this.getView().byId("date").setValue(oData2.ZdateGluFru);
					//تحويلات الجلوكوز
					this.getView().byId("awl1").setValue(oData2.ZTank1Sta);
					this.getView().byId("akher1").setValue(oData2.ZTank3Sta);
					this.getView().byId("y1").setValue(oData2.ZTank5Sta);
					this.getView().byId("awl2").setValue(oData2.ZTank2Sta);
					this.getView().byId("akher2").setValue(oData2.ZTank4Sta);
					this.getView().byId("y2").setValue(oData2.ZTank6Sta);
					this.getView().byId("br").setValue(oData2.ZTank7Sta);
					this.getView().byId("total").setValue(oData2.ZFru1Sta);
					//النشا الجاف
					this.getView().byId("H").setValue(oData2.ZDry1Sta);
					this.getView().byId("I").setValue(oData2.ZDry2Sta);
					//النشا التام
					this.getView().byId("K").setValue(oData2.ZPack1Sta);
					this.getView().byId("L").setValue(oData2.ZPack2Sta);
					this.getView().byId("M").setValue(oData2.ZPack3Sta);
					// فرق تغير تانكات حليب النشا
					this.getView().byId("T1").setValue(oData2.ZTank18Sta);
					this.getView().byId("KM").setValue(oData2.ZBy1Sta);
					this.getView().byId("T2").setValue(oData2.ZTank14Sta);
					this.getView().byId("GM").setValue(oData2.ZBy4Sta);
					this.getView().byId("T3").setValue(oData2.ZTank15Sta);
					this.getView().byId("JM").setValue(oData2.ZBy7Sta);
					this.getView().byId("T4").setValue(oData2.ZTank16Sta);
					this.getView().byId("Oil").setValue(oData2.ZBy10Sta);
					this.getView().byId("T5").setValue(oData2.ZTank17Sta);
					this.getView().byId("W").setValue(oData2.ZBy14Sta);
					//Table
					this.getView().byId("production1").setValue(oData2.ZQty1Sta);
					this.getView().byId("oil1").setValue(oData2.ZOil1Sta);
					this.getView().byId("production2").setValue(oData2.ZQty2Sta);
					this.getView().byId("oil2").setValue(oData2.ZOil2Sta);
					this.getView().byId("production3").setValue(oData2.ZQty3Sta);
					this.getView().byId("oil3").setValue(oData2.ZOil3Sta);

					this.getView().byId("production4").setValue(oData2.ZQty4Sta);

					this.getView().byId("oil4").setValue(oData2.ZOil4Sta);
					//الباقي

					this.getView().byId("KK").setValue(oData2.ZKkSta);

					this.getView().byId("SS").setValue(oData2.ZSsSta);

					this.getView().byId("Protin").setValue(oData2.ZQtyproSta);

					this.getView().byId("HumR").setValue(oData2.ZHumSta);
					// ---------------

					this.getView().byId("first").setValue(oData2.ZWat1Sta);

					this.getView().byId("last").setValue(oData2.ZWat2Sta);

					this.getView().byId("WY").setValue(oData2.ZWat3Sta);

					this.getView().byId("WHum").setValue(oData2.ZWatHumSta);

					this.getView().byId("PK").setValue(oData2.ZBy1Sta);

					this.getView().byId("PG").setValue(oData2.ZBy4Sta);

					this.getView().byId("GT").setValue(oData2.ZBy7Sta);

				}.bind(this),
				error: function(oError) {
					console.log("error")
				}
			});

			console.log(displayBlock)
		},

		onEdit: function() {
			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUri);

			var refNo = this.getView().byId("genRef");
			var refValue = refNo.getText();

			var oUpdatedData = {
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

				ZDry1Sta: +(this.getView().byId("H").getValue()),
				ZDry2Sta: +(this.getView().byId("I").getValue()),
				//النشا التام

				ZPack1Sta: +(this.getView().byId("K").getValue()),
				ZPack2Sta: +(this.getView().byId("L").getValue()),
				ZPack3Sta: +(this.getView().byId("M").getValue()),
				// فرق تغير تانكات حليب النشا

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

			oModel.update("/SCHeaderSet(" + refValue + ")", oUpdatedData, {
				success: function() {
					MessageToast.show("Refrence Number: " + refValue + " Updated successfully");

					this.getView().byId("save2").setVisible(false);

					var displayBlock = document.getElementsByClassName("displayNone");
					for (var i2 = 0; i2 < displayBlock.length; i2++) {
						displayBlock[i2].style.display = "none";
					}

					location.reload();

				}.bind(this),
				error: function(oError) {
					console.log(oError);
				}
			});

		},
		onCancel: function() {
			var displayBlock = document.getElementsByClassName("displayNone");
			for (var i2 = 0; i2 < displayBlock.length; i2++) {
				displayBlock[i2].style.display = "none";
			}
			var editIcon = document.getElementsByClassName("onEdit");
			for (var i = 0; i < editIcon.length; i++) {
				editIcon[i].style.display = "block";
			}
			this.getView().byId("save2").setVisible(false);
			this.getView().byId("cancel").setVisible(false);
		},
		onCreate: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("View3");
		},
		onNavBack: function() {
			var displayBlock = document.getElementsByClassName("displayNone");
			for (var i2 = 0; i2 < displayBlock.length; i2++) {
				displayBlock[i2].style.display = "none";
			}
			var editIcon = document.getElementsByClassName("onEdit");
			for (var i = 0; i < editIcon.length; i++) {
				editIcon[i].style.display = "block";
			}
			this.getView().byId("save2").setVisible(false);
			this.getView().byId("cancel").setVisible(false);
			window.history.back();

			// var oHistory = History.getInstance();
			// var sPreviousHash = oHistory.getPreviousHash();

			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
			// 	var oRouter = this.getOwnerComponent().getRouter();
			// 	oRouter.navTo("overview", {}, true);
			// }
		}
	});
});