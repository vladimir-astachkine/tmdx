
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var combobox1 = {};	// @combobox
	var doctorsEvent = {};	// @dataSource
	var documentEvent = {};	// @document
	var cboxFemale = {};	// @Checkbox
	var cboxMale = {};	// @Checkbox
// @endregion// @endlock

// eventHandlers// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		waf.sources.doctors.query("isdoctor = :1", true);
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		waf.sources.person.query("ispatient = :1", true);
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	doctorsEvent.onCurrentElementChange = function doctorsEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		event.dataSource.getCurrentElement();
		var doctorflag = event.dataSource.getAttribute("isdoctor").getValue();
		var patflag = event.dataSource.getAttribute("ispatient").getValue();
		
////debug		
//		console.log("object: " + event.dataSource.getAttribute("isdoctor"));
//		console.log("isdoctor = " + doctorflag);
//		console.log("ispatient = " + patflag);
		
		if( (doctorflag != null) && (doctorflag == false) )
		{
//			console.log(">> doctorflag = false");
			
			event.dataSource.getAttribute("isdoctor").setValue(true);
			event.dataSource.getAttribute("ispatient").setValue(false);
			event.dataSource.save();
			
//debug			
			console.log(">> doctorflag synced");
		}
	};// @lock

	doctorsEvent.onBeforeCurrentElementChange = function doctorsEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
//code to add
	};// @lock

	doctorsEvent.onIDAttributeChange = function doctorsEvent_onIDAttributeChange (event)// @startlock
	{// @endlock
//		code to add
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.person.query("ispatient = :1", true);
		waf.sources.doctors.query("isdoctor = :1", true);
	};// @lock

	cboxFemale.click = function cboxFemale_click (event)// @startlock
	{// @endlock
		var curval = $$("cboxFemale").value();
//		console.log(curval);
		
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
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("doctors", "onCurrentElementChange", doctorsEvent.onCurrentElementChange, "WAF");
	WAF.addListener("doctors", "onBeforeCurrentElementChange", doctorsEvent.onBeforeCurrentElementChange, "WAF");
	WAF.addListener("doctors", "onIDAttributeChange", doctorsEvent.onIDAttributeChange, "WAF", "ID");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("cboxFemale", "click", cboxFemale.click, "WAF");
	WAF.addListener("cboxMale", "click", cboxMale.click, "WAF");
	WAF.addListener("cboxFemale", "change", cboxFemale.change, "WAF");
	WAF.addListener("cboxMale", "change", cboxMale.change, "WAF");
// @endregion
};// @endlock
