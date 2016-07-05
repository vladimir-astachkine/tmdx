
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var docButton = {};	// @Button
	var patButton = {};	// @Button
	var initButton = {};	// @Button
	var menuItem1 = {};	// @menuItem
	var patbutton = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	docButton.click = function docButton_click (event)// @startlock
	{// @endlock
		$$("initContainer").hide();
		$$("patContainer").hide();
		$$("docContainer").show();
	};// @lock

	patButton.click = function patButton_click (event)// @startlock
	{// @endlock
		$$("initContainer").hide();
		$$("docContainer").hide();
		$$("patContainer").show();
		
	};// @lock

	initButton.click = function initButton_click (event)// @startlock
	{// @endlock
		$$("initContainer").show();
		$$("patContainer").hide();
		$$("docContainer").hide();
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		
	};// @lock

	patbutton.click = function patbutton_click (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("docButton", "click", docButton.click, "WAF");
	WAF.addListener("patButton", "click", patButton.click, "WAF");
	WAF.addListener("initButton", "click", initButton.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("patbutton", "click", patbutton.click, "WAF");
// @endregion
};// @endlock
