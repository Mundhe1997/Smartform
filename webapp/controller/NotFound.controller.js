sap.ui.define([
		"com/SmartForm/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.SmartForm.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);