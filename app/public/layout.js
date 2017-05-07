/*
function modifyLayout(){
	if (!(window.matchMedia('(max-width: 800px)').matches)) {

		var sidebar = document.getElementById("sidebar");

		if (sidebar.style.display === 'none') {
			document.getElementById("header").style.width = "100%";
			document.getElementById("content").style.width = "100%";
			document.getElementById("footer").style.width = "100%";
		} else {
			document.getElementById("header").style.width = "calc(100% - 15%)";
			document.getElementById("content").style.width = "calc(100% - 15%)";
			document.getElementById("footer").style.width = "calc(100% - 15%)";
		}
	} else {
		document.getElementById("header").style.width = "100%";
			document.getElementById("content").style.width = "100%";
			document.getElementById("footer").style.width = "100%";
	} 
}

window.onresize = function() {
    modifyLayout()
}

document.onreadystatechange = function(){
	if(document.readyState=='loaded' || document.readyState=='complete'){
		console.dir("Layout....!!");
		document.getElementById("hamburger-btn").onclick = function(){
			var sidebar = document.getElementById("sidebar");
		    if (sidebar.style.display == 'block' || sidebar.style.display=='') {
		        sidebar.style.display = 'none';
		    } else {
		        sidebar.style.display = 'block';
		    }
			modifyLayout();
		}
	}
}

*/

import $ from './jquery-3.2.0.min.js';

function modifyLayout(){
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
	modifyLayout()
});

$(document).ready(function() {
	$("#hamburger-btn").click(function(){
		$("#sidebar").toggle();
		modifyLayout();
	}); 
});
