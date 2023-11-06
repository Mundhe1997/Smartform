/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/SmartForm/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/SmartForm/test/integration/pages/Worklist",
	"com/SmartForm/test/integration/pages/Object",
	"com/SmartForm/test/integration/pages/NotFound",
	"com/SmartForm/test/integration/pages/Browser",
	"com/SmartForm/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.SmartForm.view."
	});

	sap.ui.require([
		"com/SmartForm/test/integration/WorklistJourney",
		"com/SmartForm/test/integration/ObjectJourney",
		"com/SmartForm/test/integration/NavigationJourney",
		"com/SmartForm/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});