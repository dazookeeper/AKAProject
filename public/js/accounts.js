'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.login-button').click(verifyLogin);
}

function verifyLogin(e) {
	e.preventDefault();

	//var attempt = 3;

	var username = document.getElementById("lg_username").value;
	var password = document.getElementById("lg_password").value;
	if ( username == "admin" && password == "admin") {
		alert("Login successfully");
		window.location = "/artists"; // Redirecting to other page.
		return false;
	}
	else {
		alert("Wrong username and password combination!");
		// Disabling fields after 3 attempts.
		// if( attempt == 0){
		// 	document.getElementById("username").disabled = true;
		// 	document.getElementById("password").disabled = true;
		// 	document.getElementById("submit").disabled = true;
		// 	return false;
		// }
	}
}


/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/" + idNumber, addProject);
	console.log("project/" + idNumber);
}

function addProject(result) {
	console.log(result);
	var projectHTML = '<img src="' + result['image'] + '" class="detailsImage">' +
										'<p>' + result['title'] + '</p>' +
										'<p><small>' + result['date'] + '</small></p>' +
										'<p>' + result['summary'] + '</p>'
	$('#project' + result['id'] + ' .details').html(projectHTML);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 
function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get("/palette", changeColor);
}

function changeColor(result) {
	var colors = result['colors']['hex'];
	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
}
*/