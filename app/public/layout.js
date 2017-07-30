import $ from './jquery-3.2.0.min.js';

function modifyAppLayout(){
	if (!(window.matchMedia('(max-width: 800px)').matches)) {
		if ($("#sidebar").is(":hidden")) {
			$("#header").css("width", "100%");
			$("#content").css("width", "100%");
			$("#footer").css("width", "100%");
		} else {
			$("#header").css("width", "calc(100% - 15%)");
			$("#content").css("width", "calc(100% - 15%)");
			$("#footer").css("width", "calc(100% - 15%)");
		}
	} else {
		$("#header").css("width", "100%");
		$("#content").css("width", "100%");
		$("#footer").css("width", "100%");
	} 
}

$(window).resize(function(){
	modifyAppLayout()
});


export function jqueryOnHamburgerButtonClick(){
	$("#sidebar").toggle();
	modifyAppLayout();
}

