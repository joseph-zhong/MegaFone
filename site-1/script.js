function hideButtons() {
	$("#logout").fadeOut();
	$("#getPhotos").fadeOut();
	setTimeout(showPhotoOptions, 500);
}

function showPhotoOptions() {
	document.getElementById("title").innerHTML = "Which photo?";
	$("#coverSelect").fadeIn();
	$("#profileSelect").fadeIn();
}

function findImage(type) {
	$("coverSelect").fadeOut();
	$("profileSelect").fadeOut();
	if(type == "cover") {
		getPhotos("Cover Photos");
	} else {
		getPhotos("Profile Pictures");
	}
}