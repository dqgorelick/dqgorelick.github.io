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

var cube = 0;
var cubes = [
	"http://49.media.tumblr.com/f3a91e94721d65565ace30eafafae61c/tumblr_n5dulb9GMo1rpco88o1_400.gif",
	"http://38.media.tumblr.com/5cf28f70141757cb291d3bcc7e2be302/tumblr_nqu6envNSA1qzgw9to1_500.gif",
	"https://media.giphy.com/media/phxXlMiXA1Xjy/giphy.gif"
];

function changeCube(){
	$(".cube").html("<img src='" + cubes[cube] + "'>");
	cube++;
	if (cube === cubes.length) {
		cube = 0;
	}
}


var projects = {
	bostonhacks : {
		"title": "Bostonhacks Live Page",
		"link": "http://live.bostonhacks.io",
		"github": "https://github.com/boston-hacks/boston-hacks.github.io",
		"iframe": "http://live.bostonhacks.io/map",
		"areas": "Design and development",
		"description": "Website created for the first national hackathon at Boston University in October 2015. The site acted as the main form of communication with the 400 hackers who attended.<br><br>Technologies:<br>Foundation<br>Parse backend<br>CSS Keyframes",
		"images" :[
			"../images/bostonhacks/screenshot1.png",
			"../images/bostonhacks/screenshot2.png"
		]
	},
	orator : {
		"title": "Orator WebApp",
		"link": "./orator",
		"github": "https://github.com/dqgorelick/orator",
		"iframe": "./orator",
		"areas": "Development",
		"description": "24-hour hackathon project project at Make BU 2014 to explore the uses of speech to text and text semantic analysis. Created a smart teleprompter that will follow the speakers progress during a speech, as well as a speech analyzing engine which will rate a speech on various metrics such as sentiment, posture, speed, and flag profanity.<br><br>Technologies:<br>Google Voice chrome webkit<br>Semantria API<br>HTML5 Canvas<br>HTML video and microphone",
		"images" :[
			"../images/orator/screenshot1.png",
			"../images/orator/screenshot2.png"
		]
	},
	wikinauts : {
		"title": "Wikinauts Android App",
		"link": "http://wikinauts.github.io",
		"iframe" : "http://wikinauts.github.io",
		"areas": "Design and development",
		"description": "The mobile take on the popular ‘Wikipedia game’, where the goal is to find the shortest path between Wikipedia article pages by only clicking on the links. The application was completed as a final project in the EC327 course at Boston University. Demo and Google Play store link are on the live page.",
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
		"description" : "Video editing and rendering web application created for the New York Times. Purpose of the project is to pragmatically generate video content for static articles, for the newsroom to be able to rapidly edit and publish. The web application is built using Angular.js and can render .mov, .webm, and .gif by capturing animation frames from the canvas object. <br><br>Technologies:<br>HTML5 canvas and Fabric.js library<br>Angular.js<br>Ffmpeg.js<br>Node and express",
		"areas": "Design and development",
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
		"areas": "UX and development",
		"description" : "Visual and UX concept for a design portfolio. All pieces of work displayed are created by Calvin Chin (BU ‘16).",
		"images" :[
			"../images/calvin/screenshot1.png",
			"../images/calvin/screenshot2.png",
			"../images/calvin/screenshot3.png"
		]
	},
	map : {
		"title": "Boston University Marauder's Map",
		"description" : "Created for the Boston University chapter of Global Water Brigades’ Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Painted elements created by Alison Staffin (BU ‘17).",
		"areas": "Design",
		"images" :[
			"../images/map/screenshot1.jpg",
			"../images/map/screenshot2.jpg",
			"../images/map/screenshot3.png",
			"../images/map/screenshot3.png"
		]
	},
	typespecimen : {
		"title": "Type Specimens: Helvetica",
		"description" : "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the College of Fine Arts at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
		"areas": "Design",
		"images" : [
			"../images/typespecimen/screenshot1.png",
			"../images/typespecimen/screenshot2.png",
			"../images/typespecimen/screenshot3.png"
		]
	}
}

function openModal(id){
	$(".wrapper").css("display", "none");
	$(".modal").css("display", "inherit");
	location.hash = id;
	(projects[id].title ? $(".title").html(projects[id].title) : $(".title").html(""));
	(projects[id].areas ? $(".areas").html(projects[id].areas) : $(".areas").html(""));
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
	$(".browser").html("");
	if (projects[id].iframe && !Modernizr.touch){
		$(".browser").html("<iframe src='" + projects[id].iframe + "'width='100%' height='600px'><p>Your browser does not support iframes.</p></iframe>");
	} else {
		projects[id].images.forEach(function(image){
			if (projects[id]["small-image"]){
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
