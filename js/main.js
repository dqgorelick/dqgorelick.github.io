$(document).ready(function(){
	if(location.hash.slice(1) !== ""){
		openModal(location.hash.slice(1));
	}
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 27:
		    e.preventDefault();
        	closeModal();
        	break;
        default: return;
    }
});

$(window).on('hashchange', function() {
	var page = location.hash.slice(1);
	if (projects[page]) {
		openModal(page);
	} else {
		closeModal();
	}
});

function openModal(id){
	$(".wrapper").css("display", "none");
	$(".modal").css("display", "inherit");
	location.hash = id;
	var page = projects[id];
	page.title ? $(".title").html(page.title) : $(".title").html("");
	page.areas ? $(".areas").html(page.areas) : $(".areas").html("");
	page.link ? $(".html-link").html("&#8212;<a target='_blank' href='" + page.link + "'>DEMO</a>") : $(".html-link").html("");
	page.github ? $(".github-link").html("&#8212;<a target='_blank' href='" + page.github + "'>GITHUB</a>") : $(".github-link").html("");
	page.description ? $(".description").html(page.description) : $(".description").html("");
	page.date ? $(".date").html(page.date) : $(".date").html("");
	if (page.images){
		$(".slideshow").html("");
		page.images.forEach(function(image){
			if (page["small-image"]){
				$(".slideshow").append("<img class='smaller' src='"+ image + "'><br>");
			} else {
				$(".slideshow").append("<img src='"+ image + "'><br>");
			}
		});
	} else {
		$(".slideshow").html("");
	}
	$(".browser").html("");
	if (page.iframe && !Modernizr.touch){
		$(".browser").html("<iframe src='" + page.iframe + "'width='100%' height='600px'><p>Your browser does not support iframes.</p></iframe>");
	}
	if (page.images) {
		page.images.forEach(function(image){
			if (page["small-image"]){
				$(".browser").append("<img class='smaller' src='"+ image + "'><br>");
			} else {
				$(".browser").append("<img src='"+ image + "'><br>");
			}
		});
	}
}

function closeModal(){
	$(".modal").css("display", "none");
	$(".wrapper").css("display", "inherit");
	location.hash = "";
}
