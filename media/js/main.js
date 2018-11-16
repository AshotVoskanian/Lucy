
var information = document.querySelectorAll(".information");
var spans = document.querySelectorAll(".block span");

	for (var i = 0; i < information.length; i++) {
		spans[i].id = i;
	}
	for (var i = 0; i < spans.length; i++) {
		spans[i].addEventListener('click', function(event) {
			information[event.target.id].style.overflowY = "scroll";
	        spans[event.target.id].style.display = 'none';
	    });
	}