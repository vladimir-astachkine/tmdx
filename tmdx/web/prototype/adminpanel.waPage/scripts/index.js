
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var cboxFemale = {};	// @Checkbox
	var cboxMale = {};	// @Checkbox
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.person.query("ispatient = :1", true);
	};// @lock

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
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("cboxFemale", "click", cboxFemale.click, "WAF");
	WAF.addListener("cboxMale", "click", cboxMale.click, "WAF");
	WAF.addListener("cboxFemale", "change", cboxFemale.change, "WAF");
	WAF.addListener("cboxMale", "change", cboxMale.change, "WAF");
// @endregion
};// @endlock
