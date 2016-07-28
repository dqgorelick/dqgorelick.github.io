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
	var page = location.hash.slice(1);
	if (projects[page]) {
		openModal(page);
	} else {
		closeModal();
	}
});


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
		],
		"date": "Sep&#8212;Nov 2015",
	},
	orator : {
		"title": "Orator WebApp",
		"link": "./orator",
		"github": "https://github.com/dqgorelick/orator",
		"areas": "Development",
		"description": "24-hour hackathon project project at Make BU 2014 to explore the uses of speech to text and text semantic analysis. Created a smart teleprompter that will follow the speakers progress during a speech, as well as a speech analyzing engine which will rate a speech on various metrics such as sentiment, posture, speed, and flag profanity.<br><br>Technologies:<br>Google Voice chrome webkit<br>Semantria API<br>HTML5 Canvas<br>HTML video and microphone",
		"images" :[
			"../images/orator/screenshot1.png",
			"../images/orator/screenshot2.png"
		],
		"date": "Apr 2015",
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
		"small-image": true,
		"date": "Sep&#8212;Dec 2014",
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
		],
		"date": "Jun&#8212;Aug 2015",
	},
	calvin : {
		"title": "Design Portfolio Concept",
		"link" : "http://cvin519.github.io/",
		"areas": "UX and development",
		"description" : "Visual and UX concept for a design portfolio. All pieces of work displayed are created by Calvin Chin (BU ‘16).",
		"images" :[
			"../images/calvin/screenshot1.png",
			"../images/calvin/screenshot2.png",
			"../images/calvin/screenshot3.png"
		],
		"date": "Feb 2015",
	},
	map : {
		"title": "Boston University Marauder's Map",
		"description" : "Created for the Boston University chapter of Global Water Brigades’ Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Raised over $1.2k for the BU Global Water Brigades. Painted elements created by Alison Staffin (BU ‘17).",
		"areas": "Design",
		"images" :[
			"../images/map/screenshot1.jpg",
			"../images/map/screenshot2.jpg",
			"../images/map/screenshot3.png",
			"../images/map/screenshot4.png"
		],
		"date": "Oct&#8212;Nov 2015",
	},
	typespecimen : {
		"title": "Type Specimens: Helvetica",
		"description" : "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the College of Fine Arts at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
		"areas": "Design",
		"images" : [
			"../images/typespecimen/screenshot1.png",
			"../images/typespecimen/screenshot2.png",
			"../images/typespecimen/screenshot3.png"
		],
		"date": "Nov 2015",
	},
	about : {
		"title" : "A small word",
		"areas" : "Jamestown, RI",
		"description" : "<img src='../images/nyc_photo.jpg'><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images" : []
	},
	sharks_and_minnows : {
		"title": "Sharks and Minnows",
		"link": "http://sharksandminnows.xyz/",
		"github": "https://github.com/dqgorelick/digital-ocean",
		"areas": "Development",
		"description": "Hackathon project built at HackBeanpot 2016. My first experience at using web sockets extensively as well as game development paradigms. We had a great team, and we all learned a bunch (and didn't sleep much).<br><br>Technologies:<br>Socket.io<br>HTML5 Canvas",
		"images" :[
			"../images/sharks/screenshot0.png",
			"../images/sharks/screenshot1.png",
			"../images/sharks/screenshot2.png"
		],
		"date": "Jan 2016",
	},
	breakerbot : {
		"title": "Breakerbot",
		"github": "https://github.com/dqgorelick/breakerbot",
		"areas": "Development / Project Management",
		"description": "Senior Design project for Boston University College of Engineering. Created a semi-autonomous robot for ConEd which transports and aligns circuit breakers. Finalist in the Intel Cornell Cup Systems Engineering national competition and won best overall project in the Computer and Electrical Engineering Department.<br><br>Technologies:<br>Angular<br>UNIX sockets (C++/Node)<br>IoT (Intel Edison)",
		"iframe":"https://www.youtube.com/embed/yyhNmTSDY2Q?autoplay=1&controls=0",
		"images" : [
			"../images/breakerbot/screenshot1.png",
			"../images/breakerbot/screenshot2.jpeg",
		],
		"date": "Sep 2015&#8212;May 2016",
	},
	pokemon : {
		"title": "Twitch Plays Pokemon Go!",
		"link": "https://www.twitch.tv/twitchpokemongo",
		"description": "Brought the phenomena of &#8220;Twitch plays&#8221; and &#8220;Pokemon Go&#8221; together for a wonderful crowdsourced Pokemon experience. This is made possible by location spoofing and simulating touch events on the iPhone. Stream viewers are able to vote for the player's movement by typing the commands into the chat. Though the stream only ran for about a week, our hackNY team became <a href='www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>semi-internet famous</a> for a short stint.<br><br>Technologies:<br>Cycript<br>Python & VanillaJS",
		"areas": "Development / Design",
		"images" :[
			"../images/pokemon/screenshot1.png",
			"../images/pokemon/screenshot2.png",
			"../images/pokemon/screenshot3.png",
			"../images/pokemon/screenshot4.png",
			"../images/pokemon/screenshot5.png",
		],
		"date": "June 2016",
	},
	neif : {
		"title": "Nick Ebner Integrative Fitness",
		"link": "http://nickebnerfitness.com/",
		"areas": "Development",
		"description": "Worked with <a href='http://avenir-interactive.com/'>Avenir Interactive</a> to create the professional site for Nick Ebner's gym.<br><br>Technologies:<br>Middleman",
		"iframe": "http://nickebnerfitness.com/",
		"date": "Oct&#8212;Dec 2015",
	},
	processing : {
		"title": "Interactive Design",
		"areas": "Development / Design",
		"github": "https://github.com/dqgorelick/processing",
		"description": "Collection of projects created during the Boston University College of Fine Arts course Interactive Design. All of the projects are created using the Processing language.",
		"images" :[
			"../images/processing/screenshot1.png",
			"../images/processing/screenshot2.png",
			"../images/processing/screenshot3.jpg",
			"../images/processing/screenshot4.png",
		],
		"date": "Jan&#8212;May 2016",
	}
}

function openModal(id){
	$(".wrapper").css("display", "none");
	$(".modal").css("display", "inherit");
	$(".modal-wrapper").removeClass("bio");
	if(id === "about") {
		$(".browser").html("");
		$(".slideshow").html("");
		$(".modal-wrapper").addClass("bio");
	}
	location.hash = id;
	var page = projects[id];
	page.title ? $(".title").html(page.title) : $(".title").html("");
	page.areas ? $(".areas").html(page.areas) : $(".areas").html("");
	page.link ? $(".html-link").html("&#8212;<a href='" + page.link + "'>Demo</a>") : $(".html-link").html("");
	page.github ? $(".github-link").html("&#8212;<a href='" + page.github + "'>Github</a>") : $(".github-link").html("");
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
