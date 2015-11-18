$(document).ready(function(){
	if(location.hash.slice(1) !== ""){
		openModal(location.hash.slice(1));
	}
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 27:
        	closeModal();
        	break;
        default: return;
    }
    e.preventDefault();
});

$(window).on('hashchange', function() {
	if(location.hash == ""){
		closeModal();
	}
});
var projects = {
	bostonhacks : {
		"title": "Bostonhacks Live Page",
		"link": "http://live.bostonhacks.io",
		"github": "https://github.com/boston-hacks/boston-hacks.github.io",
		"description": "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/bostonhacks/screenshot1.png",
			"../images/bostonhacks/screenshot2.png"
		]
	},
	orator : {
		"title": "Orator WebApp",
		"link": "./orator",
		"github": "https://github.com/dqgorelick/Orator",
		"description": "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/orator/screenshot1.png",
			"../images/orator/screenshot2.png"
		]
	},
	wikinauts : {
		"title": "Wikinauts Android App",
		"link": "http://wikinauts.github.io",
		"description": "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/wikinauts/screenshot1.png",
			"../images/wikinauts/screenshot2.png",
			"../images/wikinauts/screenshot3.png",
			"../images/wikinauts/screenshot4.png"
		],
		"small-image": true
	},
	newyorktimes : {
		"title": "Times Trailers",
		"description" : "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/newyorktimes/screenshot1.png",
			"../images/newyorktimes/screenshot2.png",
			"../images/newyorktimes/screenshot3.png"
		]
	},
	calvin : {
		"title": "Calvin Chin Design Portfolio",
		"link" : "http://cvin519.github.io/",
		"github" : "https://github.com/cvin519",
		"description" : "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/calvin/screenshot1.png",
			"../images/calvin/screenshot2.png"
		]
	},
	map : {
		"title": "Boston University Marauder's Map",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images" :[
			"../images/map/screenshot1.jpg",
			"../images/map/screenshot2.jpg",
			"../images/map/screenshot3.png",
			"../images/map/screenshot3.png"
		]
	},
	typespecimen : {
		"title": "Type Specimens: Helvetica",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images" : [
			"../images/typespecimen/screenshot1.png",
			"../images/typespecimen/screenshot2.png",
			"../images/typespecimen/screenshot3.png"
		]
	}
}

function openModal(id){
	$(".modal").css("display", "inherit");
	location.hash = id;
	(projects[id].title ? $(".title").html(projects[id].title) : $(".title").html(""));
	(projects[id].link ? $(".html-link").html("&#8212;<a href='" + projects[id].link + "'>Live site</a>") : $(".html-link").html(""));
	(projects[id].github ? $(".github-link").html("&#8212;<a href='" + projects[id].github + "'>Github</a>") : $(".github-link").html(""));
	(projects[id].description ? $(".description").html(projects[id].description) : $(".description").html(""));
	if (projects[id].images){
		$(".slideshow").html("");
		projects[id].images.forEach(function(image){
			if (projects[id]["small-image"]){
				$(".slideshow").append("<img class='smaller' src='"+ image + "'><br>");
			} else {
				$(".slideshow").append("<img src='"+ image + "'><br>");
			}
		})
	} else {
		$(".slideshow").html("");
	}
}

function closeModal(){
	$(".modal").css("display", "none");
	location.hash = "";
}
