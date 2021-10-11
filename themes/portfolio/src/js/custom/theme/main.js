/* jQuery
------------------------------*/

jQuery(document).ready(function(){

	/* Toggle Demo Modal */
	jQuery(".demo a").click(function(){
		jQuery("#frontModal").modal("toggle");
	});

	/* Toggle Demo Modal */
	var url = window.location.href;
	if(url.indexOf("?profession") != -1) {
		jQuery("#frontModal").modal("show");
		jQuery(".panel_wrapper").addClass("flex");
		jQuery(".modalChoiceDemo").addClass("active");
		jQuery(".modalChoiceIntro").removeClass("active");
		jQuery(".modalChoiceClients").removeClass("active");
	};

	/*Toggle Modal Content */
	jQuery("#intro").click(function(){
		jQuery(".modalChoiceIntro").addClass("active");
		jQuery(".modalChoiceDemo").removeClass("active");
		jQuery(".modalChoiceClients").removeClass("active");
	});

	jQuery("#demos").click(function(){
		jQuery(".modalChoiceDemo").addClass("active");
		jQuery(".modalChoiceIntro").removeClass("active");
		jQuery(".modalChoiceClients").removeClass("active");

	});

	jQuery("#clients").click(function(){
		jQuery(".modalChoiceClients").addClass("active");
		jQuery(".modalChoiceDemo").removeClass("active");
		jQuery(".modalChoiceIntro").removeClass("active");
	});
});
