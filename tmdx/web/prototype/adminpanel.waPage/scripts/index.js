
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var cboxFemale = {};	// @Checkbox
	var cboxMale = {};	// @Checkbox
// @endregion// @endlock

// eventHandlers// @lock

	cboxFemale.click = function cboxFemale_click (event)// @startlock
	{// @endlock
		var curval = $$("cboxFemale").value();
		console.log(curval);
		
		if(curval){ $$("cboxMale").value(true); }
						else
						   { $$("cboxMale").value(false) }; 
	};// @lock

	cboxFemale.change = function cboxFemale_change (event)// @startlock
	{// @endlock
		
	};// @lock

	cboxMale.click = function cboxMale_click (event)// @startlock
	{// @endlock
		var curval = $$("cboxMale").value();
		console.log(curval);
		
		if(curval){ $$("cboxFemale").value(true); }
						else
						   { $$("cboxFemale").value(false) }; 
	};// @lock

	cboxMale.change = function cboxMale_change (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("cboxFemale", "click", cboxFemale.click, "WAF");
	WAF.addListener("cboxMale", "click", cboxMale.click, "WAF");
	WAF.addListener("cboxFemale", "change", cboxFemale.change, "WAF");
	WAF.addListener("cboxMale", "change", cboxMale.change, "WAF");
// @endregion
};// @endlock
