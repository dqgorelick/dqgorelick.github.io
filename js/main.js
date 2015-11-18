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
	if(location.hash === ""){
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
		"description": "24-hour hackathon project project at Make BU 2014 to explore the uses of speech to text and text semantic analysis. Created a smart teleprompter that will follow the speakers progress during a speech, as well as a speech analyzing engine which will rate a speech on various metrics such as sentiment, posture, speed, and flag profanity. Also offers support different languages!<br><br>Technologies:<br>Google Voice chrome webkit<br>Semantria API<br>HTML5 Canvas<br>HTML video and microphone",
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
		"title": "Times Trailers<br>Summer 2015",
		"description" : "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.",
		"images" :[
			"../images/newyorktimes/example.gif",
			"../images/newyorktimes/screenshot1.png",
			"../images/newyorktimes/screenshot2.png",
			"../images/newyorktimes/screenshot3.png"
		]
	},
	calvin : {
		"title": "Design Portfolio Concept",
		"link" : "http://cvin519.github.io/",
		"github" : "https://github.com/cvin519",
		"description" : "Visual and UX concept for a design portfolio. All pieces of work displayed are created by Calvin Chin (BU ‘16).",
		"images" :[
			"../images/calvin/screenshot1.png",
			"../images/calvin/screenshot2.png"
		]
	},
	map : {
		"title": "Boston University Marauder's Map",
		"description" : "Created for the Boston University chapter of Global Water Brigades’ Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Painted elements created by Alison Staffin (BU ‘17).",
		"images" :[
			"../images/map/screenshot1.jpg",
			"../images/map/screenshot2.jpg",
			"../images/map/screenshot3.png",
			"../images/map/screenshot3.png"
		]
	},
	typespecimen : {
		"title": "Type Specimens: Helvetica",
		"description" : "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the College of Fine Arts at Boston University. The poster is 24 inches by 36 inches printed black and white.",
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
		});
	} else {
		$(".slideshow").html("");
	}
}

function closeModal(){
	$(".modal").css("display", "none");
	location.hash = "";
}
