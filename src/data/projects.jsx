export const ACTIVE_PROJECTS = [
  "maproom",
  "counterpoint",
  "venmostrips",
  "atc",
  "pokemon",
  // "tabbo",
  // "processing",
  "breakerbot",
  "popallston",
  // "bostonhacks",
  // "neif",
  "mbta",
  "typespecimen",
  "map",
  "newyorktimes",
  "wikinauts",
  // "cribbage",
];


 /*
ALL PROJECTS TABLE OF CONTENTS:

maproom
counterpoint
venmostrips
atc
mbta
bostonhacks
tabbo
cribbage
timesmachine
orator
popallston
wikinauts
newyorktimes
calvin
map
typespecimen
sharks_and_minnows
breakerbot
pokemon
neif
processing
*/

// add tile background in assets/styles/gallery.scss
export const PROJECTS = {
  maproom: {
    title: "St Louis Maproom",
    category: "project",
    collaborators: "Office for Creative Research",
    tagline: "Drawing maps with robots to create a community space.",
    github: "https://github.com/O-C-R/maproom-robot-coordinator",
    press: [{
      name: "St Louis Maproom",
      src: "http://stlmaproom.org/"
    }, {
        name: "Making Mapping More Human",
        src: "https://medium.com/@blprnt/making-mapping-more-human-77a96e92ed49"
      }, {
        name: "Technical Write-up",
        src: "https://medium.com/@cadanderson/drawing-maps-with-robots-opencv-and-raspberry-pi-3389fa05b90f"
      }],
    description: "Worked with the Office for Creative Research to create a community space for map making. The end result was a pop-up installation in St Louis where maps were created by robots, projection, and drawn by hand by visitors to the space. Over the course of a month, 29 groups visited to create 100 maps that reflect the experience of the community who live in the city.<br/><br/>The problems I helped tackle were the mechanics and programming of the drawing robots. The project lent itself to a fantastic combination of software and hardware challenges. I worked on the robot’s control programs, the coordination / orchestration program, as well as prototyped and build the marker-drawing mechanism.<br/><br/>For more context on the motivation for the project by Jer Thorp: <a href='https://medium.com/@blprnt/making-mapping-more-human-77a96e92ed49' target='_blank'>Making Mapping More Human</a>. Some of the technical implementation in a wonderful technical writeup by Chris Anderson: <a href='https://medium.com/@cadanderson/drawing-maps-with-robots-opencv-and-raspberry-pi-3389fa05b90f' target='_blank'>Drawing maps with robots, OpenCV, and Raspberry Pi</a>.",
    technologies: [
      { name: "openFrameworks" }
    ],
    date: "March 2017",
    banner: {
      src: "../images/maproom/robots_0.jpg"
    },
    images: [{
      src: "../images/maproom/robots_5.jpg",
      caption: "Visitors watch the robot at work during the installation",
      smaller: true
    }, {
      src: "../images/maproom/gui.png",
      caption: "openFrameworks robot control GUI",
      smaller: true
    }, {
      src: "../images/maproom/robots_1.jpg",
      caption: "openFrameworks orchestrates two robots to draw the maps together",
      smaller: true
    }],
    pretty: "St Louis Maproom"
  },
  counterpoint: {
    title: "Counterpoint",
    // collaborators: "School for Poetic Computation",
    tagline: "Collaborate and draw lines to create a musical patterns.",
    github: "https://github.com/dqgorelick/SFPC_projects",
    press: [{
        name: "Creative Applications Network",
        src: "http://www.creativeapplications.net/education/school-for-poetic-computation-fall-2016-final-showcase/"
      }, {
        name: "Signal Conference 2017 Talk",
        src: "https://www.youtube.com/watch?v=llIiw3scRak"
      }],
    description: "Counterpoint is an instrument which transforms drawn lines into musical note patterns. The melodies are visualized on a projection where colored circles represent the patterns drawn, following the sequence in a sinusoidal path. <br><br>The installation celebrates collaboration between players to create more complex melodies comprised of multiple, concurrent note sequences. Players can draw lines on an iPad which rests on a music stand in front of the projection, or can add additional voices on their mobile devices.<br><br>The player views and the visualization are web applications, and a Node.js server connects all of the pieces using websockets. The sounds are generated by SuperCollider, which interfaces with the server using Open Sound Control (OSC).<br><br>Installed the project at the SFPC final showcase in December 2016. Also installed and gave a <a href='https://www.youtube.com/watch?v=llIiw3scRak' target='_blank'>talk</a> about the project at the Signal Conference in May 2017.<br><br>",
    technologies: [
      { name: "SuperCollider", link: "http://supercollider.github.io/" },
      { name: "Node.js" },
      { name: "Open Sound Control" }
    ],
    date: "December 2016",
    banner: {
      // src: "../images/counterpoint/counterpoint_4.jpg",
      src: "../images/counterpoint/counterpoint_banner.jpg",
      caption: "Visitors draw lines and see the patterns projected."
    },
    images: [{
      src: "../images/counterpoint/counterpoint_2.jpg",
      caption: "Sometimes the music stand would be lowered for good reason.",
      portrait: true
    }, {
      src: "../images/counterpoint/counterpoint_0.jpg",
      caption: "Visitors draw lines and see the patterns projected."
    }, {
      src: "../images/counterpoint/counterpoint_4.jpg",
      caption: "Counterpoint installed at the Signal Conference in May 2017."
    }],
    videos: [{
      src: "https://player.vimeo.com/video/197356964",
      caption: "Demonstration of the user interaction on multiple devices.",
      type: "vimeo"
    }, {
      src: "https://player.vimeo.com/video/196242333",
      caption: "Counterpoint performance on three devices (two offscreen).",
      type: "vimeo"
    }],
    pretty: "Counterpoint"
  },
  venmostrips: {
    title: "Venmo Strips",
    category: "project",
    // collaborators: "School for Poetic Computation",
    link: "http://venmostrips.com",
    tagline: "Creating new (sometimes comical) narratives.",
    github: "https://github.com/dqgorelick/venmo-bots",
    description: "Generates randomized three-panel comic strips using the most-recent Venmo transaction messages. Visitors can select to choose to re-randomize all or a specific panel. Created comic strips can be saved by printing it onto a receipt to take away. <br><br> The interface is a web application, and the Venmo transactions are accessed by tweaking query paramters on the Venmo’s public API. A Raspberry Pi interfaces with a receipt printer to print the finished comic strips.<br><br>👉👉👉 Live site! <a href='http://venmostrips.com' target='_blank'>venmostrips.com</a> 👈👈👈<br/><br/>More details on retreiving the transaction data from Venmo can be found in my <a href='./scraping-venmo' target='_blank'>post</a>.",
    technologies: [{ name: "Raspberry Pi" }, { name: "Thermal Receipt Printer" }, { name: "Venmo Public API", link: "https://venmo.com/" }, { name: "Node.js / React" }],
    date: "December 2016",
    banner: {
      src: "../images/venmo/venmo_banner.png"
    },
    images: [{
      src: "../images/venmo/venmo_strips_1.jpg",
      caption: "Physical installation at the SFPC showcase allows visitors to print their very own strip on a receipt printer.",
      smaller: true
    }, {
      src: "../images/venmo/example1.png",
      caption: "Comic strip created by a visitor at the SFPC showcase.",
      smaller: true
    }, {
      src: "../images/venmo/example3.png",
      caption: "Comic strip created by a visitor at the SFPC showcase.",
      smaller: true
    }, {
      src: "../images/venmo/example4.png",
      caption: "Comic strip created by a visitor at the SFPC showcase.",
      smaller: true
    }, {
      src: "../images/venmo/venmo_strips_0.jpg",
      caption: "Comics printed by visitors at the showcase.",
      smaller: true
    }],
    pretty: "Venmo Strips"
  },
  atc: {
    title: "ATC Soundscape",
    category: "project",
    // timeline: "School for Poetic Computation",
    tagline: "Live air traffic control radio and procedurally generated sounds.",
    github: "https://github.com/dqgorelick/SFPC_projects",
    description: "An austere table has two pairs of vintage headphones on a stand. Above it are two incandescent bulbs, and two clocks with red airport codes beneath– each clock with the respective time from the airport. Playing through the headphones– is an immersive soundscape of sounds blended with live radio feeds from air traffic control towers. A switch in front of the table toggles between the feeds from different airports. <br><br>The sounds are procedurally generated using SuperCollider, while the ATC radio is accessed via internet streams. A microcontroller changes the stations, and lights the bulb above the clock of the active channel’s airport. <br><br>The piece creates a space for the listener to reflect– while being acutely aware of the present. The instructions for the visitors are to “stop reading this, relax, and listen.”",
    technologies: [
      { name: "SuperCollider", link: "http://supercollider.github.io/" },
      { name: "Intel Edison" }
    ],
    date: "December 2016",
    banner: {
      src: "../images/atc/atc-soundscape_1.jpg",
    },
    images: [{
      src: "../images/atc/atc-soundscape_2.jpg",
      caption: "Listeners hear live chatter streamed from air traffic control radio from JFK or LAX, played over procedurally generated music."
    }, {
      src: "../images/atc/atc-soundscape_3.jpg",
      portrait: true,
      caption: "Visitors listen into the soundscape via the provided headphones."
    }, {
      src: "../images/atc/atc-soundscape_7.jpg",
      smaller: true,
      caption: "Prototype of the ATC radio station toggle. An Intel Edison reads the switch value and interfaces with a Node server via REST calls."
    }, {
      src: "../images/atc/atc-soundscape_8.jpg",
      smaller: true,
      caption: "Prototype connects ATC radio from Tokyo HND airport and JFK airport. Fashioned with the toggle which is used in the final iteration."
    }],
    pretty: "ATC Soundscape"
  },
  mbta: {
    title: "MBTA Performance Analysis",
    category: "project",
    tagline: "Teamed up with the MBTA to improve performance and delay alerts.",
    areas: "Development & Design",
    collaborators: "MBTA, Ben Snyder, EJ Fitzpatrick, and Eddy Luo",
    github: "https://github.com/BU-NU-CLOUD-SP16/MBTA-Alerts-and-Performance-Anlaysis",
    description: "Worked with the <a target='_blank' href='http://www.mbta.com/'>Massachusetts Bay Transportation Authority</a> to better analyze and communicate the effectiveness of performance alerts. Developed full-stack web application to measure real-time performance against statistical models created from aggregated historical data.",
    technologies: [{ name: "Python/Node" }, { name: "D3.js", link: "http://d3js.org" }, { name: "Sqlite3" }, { name: "R (for data analysis)" }],
    // timeline: "3 months",
    date: "May 2016",
    banner: {
      src: "../images/mbta/screenshot1.png",
      caption: "Web application offers real-time analysis and predictions for the MBTA subway lines."
    },
    images: [{
      src: "../images/mbta/dwells.png",
      caption: "From analysing two months of historical data, we found that the ma wait time is most influenced by the variation in dwell times (time the train stays in the station)."
    }, {
      src: "../images/mbta/dwells2.png",
      caption: "Dwell times at each station are shown during peak rush hour. The size is relative to the amount of time."
    }, {
      src: "../images/mbta/screenshot2.png",
      caption: "A live view of each train is available for each line."
    }, {
      src: "../images/mbta/screenshot3.png",
      caption: "D3.js is used to show the status of key stations for the control center for each line."
    }, {
      src: "../images/mbta/screenshot4.png",
      caption: "A breakdown of each station can be viewed when clicking on the station node."
    }],
    pretty: "MBTA Visualization"
  },
  bostonhacks: {
    title: "Bostonhacks Live Page",
    category: "project",
    tagline: "Live page created for bostonhacks hackathon at Boston University.",
    link: "http://boston-hacks.github.io",
    github: "https://github.com/boston-hacks/boston-hacks.github.io",
    iframe: "http://boston-hacks.github.io/map",
    // areas: "Design & development",
    description: "Led team to create day-of website created for the <a target=’_blank' href='https://bostonhacks.io/'>first national hackathon at Boston University</a> in October 2015. The site acted as the main form of communication with the <a target='_blank' href='http://www.bu.edu/today/2015/bu-hackathon-draws-500/'>500 hackers</a> who attended.",
    technologies: [
      { name: "Foundation", link: "http://foundation.zurb.com/" },
      { name: "Parse backend", link: "http://www.parse.com/" },
      { name: "CSS Keyframes" }
    ],
    // images: [{
    //   src: "../images/bostonhacks/screenshot1.png",
    // }, {
    //   src: "../images/bostonhacks/screenshot2.png",
    // }, ],
    // date: "November 2015",
    // timeline: "2 weeks",
    pretty: "Bostonhacks Live Site",
  },
  tabbo: {
    title: "Tabbo Chrome Extension",
    category: "project",
    collaborators: "Biggie Emmanuel, Andy Wang, Jun-Woo Shin",
    tagline: "Bringing much-needed keybinds to Google Chrome",
    link: "https://chrome.google.com/webstore/detail/tabbo/hedbkonckghacebehjebpfknhdbobiko",
    github: "https://github.com/hackny2016labs/tabbo",
    areas: "Development",
    description: "A project built to solve an everyday need of (some) chrome users. My original motivation to create this extension was that there is no keybind in google chrome that allows you to move tabs left and right, or pop tabs off. Tabbo became the niche utility tool that changes how you use chrome.<br><br>See the extension in the chrome store. <a target='_blank' href='https://chrome.google.com/webstore/detail/tabbo/hedbkonckghacebehjebpfknhdbobiko'>&#10149;</a>",
    technologies: [
      { name: "Google Chrome API" }
    ],
    banner: {
      src: "../images/tabbo/screenshot1.jpg",
      caption: "The console offers keybinds to move tabs between chrome windows."
    },
    images: [{
      src: "../images/tabbo/screenshot2.png",
      smaller: true,
      caption: "Additional features are available in the extension menu",
    }],
    videos: [{
      "src": "https://www.youtube.com/embed/lnltvwTZZpU?",
      caption: "Demo of the chrome extension"
    }],
    // timeline: "2 nights",
    date: "August 2016",
    pretty: "Google Chrome Keybinds"
  },
  cribbage: {
    title: "CNC Cribbage Board",
    category: "project",
    tagline: "Custom designed, CNC'd aluminum game board",
    areas: "Engineering & Design",
    description: "Realizing that I lacked a cribbage board, and that at the time I was a student worker in our machine shop I decided to create my own! I modeled the board off of my father's board which my family and I would play on together. The CAD design work was done in SolidWorks, and GibbsCam was used to program the CNC machines. The game board is aluminum, and the game pieces are 1/4\" steel pins.",
    technologies: [{ name: "GibbsCam" }, { name: "SolidWorks" }],
    date: "October 2014",
    banner: {
      src: "../images/cribbage/screenshot1.jpg",
      caption: "The gameboard is machined from a single piece of aluminum."
    },
    // timeline: "2 weeks",
    // budget: "$100",
    materials: "Aluminum, Steel",
    images: [{
      src: "../images/cribbage/screenshot2.jpg",
      caption: "Top view of the board"
    }, {
      src: "../images/cribbage/screenshot3.jpg",
      caption: "Inspiration for the board design"
    }],
    pretty: "CNC Cribbage Board"
  },
  timesmachine: {
    title: "NYTimes Machine",
    category: "professional",
    tagline: "Read news from “TODAY” many years back!",
    link: "http://danielgorelick.com/timesmachine/index.html",
    github: "https://github.com/dqgorelick/dqgorelick.github.io/timesmachine",
    areas: "Development",
    description: "Learning about the NYTimes API inspired me to create this small web application to explore the question: “What would the news look like from today, but many years ago?” I built this web application when I was new to javascript and had just learned the magic of REST APIs.",
    technologies: [
      { name: "NYTimes API", link: "https://developer.nytimes.com/" }
    ],
    // timeline: "24 hours",
    iframe: "http://danielgorelick.com/timesmachine/index.html",
    banner: {
      src: "../images/timesmachine/screenshot1.jpg",
      caption: "Allows users to view the news from any year with the same month and day as today."
    },
    date: "March 2015",
    pretty: "NYTimes Machine"
  },
  orator: {
    title: "Orator WebApp",
    category: "project",
    tagline: "This is just a test for now, to be filled in later",
    link: "./orator",
    github: "https://github.com/dqgorelick/orator",
    areas: "Development",
    description: "24-hour hackathon project project at Make BU 2014 to explore the uses of speech to text and text semantic analysis. Created a smart teleprompter that will follow the speakers progress during a speech, as well as a speech analyzing engine which will rate a speech on various metrics such as sentiment, posture, speed, and flag profanity.",
    technologies: [
      { name: "Google Voice chrome webkit" },
      { name: "Semantria API", link: "https://www.lexalytics.com/semantria" },
      { name: "HTML5 Canvas" },
      { name: "HTML video and microphone" }
    ],
    images: [{
      src: "../images/orator/screenshot1.png"
    }, {
      src: "../images/orator/screenshot2.png"
    }],
    // timeline: "24 hours",
    date: "April 2015",
    pretty: "Orator Project"
  },
  popallston: {
    title: "Tell Me Everything",
    category: "design",
    tagline: "Interactive installation created for a collaborative art show.",
    link: "https://player.vimeo.com/video/179276133?autoplay=1",
    github: "https://github.com/dqgorelick/processing/blob/master/pop_allston/pop_allston.pde",
    areas: "Design & development",
    description: "Installation created for the <a target='_blank' href='http://www.tellmeeverything.show/'>Tell Me Everything</a> art show. The artwork reacts to ambient music, continuously generating new designs. The show was co-curated by <a target='_blank' href='http://fritzhowser.com/'>Fritz Howser</a> and <a target='_blank' href='http://www.bryan-fountain.com/'>Bryan Fountain</a>.",
    banner: {
      src: "../images/popallston/screenshot1.jpeg",
      caption: "The installation welcomed visitors as they entered the space."
    },
    images: [{
      src: "../images/popallston/screenshot2.gif",
      caption: "The letters transition between various orientations."
    }],
    videos: [{
      src: "https://www.youtube.com/embed/WN6uD2r1it8?",
      caption: "Example of the artwork reacting to ambient music"
    }],
    // timeline: "3 days",
    technologies: [{ name: "Processing language", link: "http://processingjs.org/" }],
    date: "April 2016",
    pretty: "Tell Me Everything"
  },
  wikinauts: {
    title: "Wikinauts Android App",
    category: "project",
    collaborators: "Doug Roeper, Pablo Velarde, Brian Tan, & Nick Maresco",
    tagline: "A twist on the Wikipedia game, brought to android.",
    link: "http://wikinauts.github.io",
    areas: "Design & development",
    description: "The mobile take on the popular <a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game'>Wikipedia game</a>, where the goal is to find the shortest path between Wikipedia article pages by only clicking on the links. The application was completed as a final project in the EC327 course at Boston University. Available in the <a target='_blank' href='https://play.google.com/store/apps/details?id=com.beep_boop.Beep&hl=en'>Google Play store</a>.",
    banner_portrait: true,
    banner: {
      src: "../images/wikinauts/screenshot1.png",
      caption: "Start-up screen for the application where user selects different game modes."
    },
    images: [{
      src: "../images/wikinauts/screenshot0.png",
      caption: "Artwork for the character Cosmo created for the application",
    }, {
      src: "../images/wikinauts/screenshot2.png",
      caption: "Links from Wikipedia pages are parsed and displayed in a scrollable interface for users.",
      portrait: true
    }, {
      src: "../images/wikinauts/screenshot3.png",
      caption: "The objective of the game is to “travel” from one word to another using the links between the words.",
      portrait: true
    }, {
      src: "../images/wikinauts/screenshot4.png",
      caption: "Users select different levels in the game’s map view.",
      portrait: true
    }],
    videos: [{
      src: "https://player.vimeo.com/video/119089066",
      caption: "Promo video created for the game.",
      type: "vimeo"
    }],
    smaller: true,
    // timeline: "3 months",
    date: "December 2014",
    pretty: "Wikinauts App"
  },
  newyorktimes: {
    title: "Times Trailer",
    category: "professional",
    collaborators: "Intern team (see github)",
    tagline: "Edit and render videos all in the browser! Editing tool created at NYT.",
    description: "Video editing and rendering web application created for the <a target='_blank' href='http://nytimes.com'>New York Times</a>. Purpose of the project is to pragmatically generate video content for static articles, for the newsroom to be able to rapidly edit and publish. The web application is built using Angular.js and can render .mov, .webm, and .gif by capturing animation frames from the canvas object.",
    technologies: [
      { name: "HTML5 canvas w/ Fabric.js library", link: "http://fabricjs.com/" },
      { name: "Angular.js", link: "https://angularjs.org/" },
      { name: "Ffmpeg", link: "https://ffmpeg.org/" },
      { name: "Node and Express", link: "https://expressjs.com/" }
    ],
    areas: "Design & development",
    banner: {
      src: "../images/newyorktimes/screenshot2.png",
      caption: "Reporters are able to edit and render the video all within the browser window."
    },
    images: [{
      src: "../images/newyorktimes/example.gif",
      caption: "Final result of the .gif created by the web app."
    }, {
      src: "../images/newyorktimes/screenshot1.png",
      caption: "Users select any story using the URL from the NYTimes site."
    }, {
      src: "../images/newyorktimes/screenshot3.png",
      caption: "Meta data is parsed out and is available to the users."
    }],
    // timeline: "2 months",
    date: "August 2015",
    pretty: "New York Times Trailers",
  },
  map: {
    title: "Boston University Marauder’s Map",
    category: "design",
    collaborators: "Alison Staffin",
    tagline: "Making maps and raising money for clean water.",
    description: "Created for the Boston University chapter of <a target='_blank' href='https://www.globalbrigades.org/experience-water-brigades'>Global Water Brigades</a> Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Raised over $1,200 for the BU Global Water Brigades. Painted elements created by Alison Staffin (BU ‘17).",
    areas: "Art Direction & Design",
    banner: {
      src: "../images/map/screenshot1.jpg",
      caption: "Maps were sold as tickets to visitors for the events."
    },
    images: [{
      src: "../images/map/screenshot2.jpg",
      caption: "The Boston University insignia was added to the map along with the latin name “Universitas Bostoniensis”."
    }, {
      src: "../images/map/screenshot5.jpg",
      caption: "Visitors were also stamped with the deathly hallows mark as they arrived."
    }, {
      src: "../images/map/screenshot3.jpg",
      caption: "Each map acted as a ticket for all 7 nights of the event."
    }, {
      src: "../images/map/screenshot4.jpg",
      caption: "The map also incorporats iconic landmarks from the BU campus."
    }, ],
    date: "November 2015",
    pretty: "Marauders Map",
  },
  typespecimen: {
    title: "Type Specimens: Helvetica",
    category: "design",
    tagline: "Typeface poster created to feature Helvetica.",
    description: "A type specimen poster and digital material created for the font face Helvetica. The project was created during the Typography I course in the <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
    areas: "Design",
    banner: {
      src: "../images/typespecimen/banner.jpg"
    },
    images: [
    {
      src: "../images/typespecimen/screenshot1.png",
      caption: "Final version of the type specemin as a 24\" x 36\" poster.",
      smaller: true,
    }, {
      src: "../images/typespecimen/longform/helvetica_progress.gif",
      caption: "different iterations of the design along the way.",
      portrait: true
    }, {
      src: "../images/typespecimen/screenshot2.png",
      caption: "The original name for the font was “Neue Haas Grotesk” before being renamed for sale in America.",
      smaller: true,
    }, {
      src: "../images/typespecimen/screenshot3.png",
      caption: "Quotes from the movie “Helvetica” also made an appearance in the poster.",
      smaller: true,
    }],
    // timeline: "2 weeks",
    date: "November 2015",
    pretty: "Helvetica Type Specimin",
  },
  sharks_and_minnows: {
    title: "Sharks \u0026 Minnows",
    category: "project",
    tagline: "Play tag with friends online using web sockets. A winning hack.",
    github: "https://github.com/dqgorelick/digital-ocean",
    areas: "Development",
    description: "A winning hackathon project built at <a target='_blank' href='https://hackbeanpot.com/'>HackBeanpot 2016</a>. My first experience at using web sockets extensively as well as game development paradigms. We had a great team, and we all learned a bunch (and didn’t sleep much).",
    technologies: [
      { name: "Socket.io", link: "http://socket.io/" },
      { name: "Node and Express", link: "https://expressjs.com/" },
      { name: "HTML5 Canvas" }
    ],
    banner: {
      src: "../images/sharks/screenshot0.png",
      caption: ""
    },
    videos: [{
      src: "https://www.youtube.com/embed/0qiosG5gr-A?"
    }],
    // timeline: "36 hours",
    date: "Janurary 2016",
    pretty: "Sharks \u0026 Minnows Game"
  },
  breakerbot: {
    title: "Con Edison Robotics",
    category: "professional",
    tagline: "Collaborated with ConEd R&D to prototype robot automation.",
    github: "https://github.com/dqgorelick/breakerbot",
    areas: "Development & Project Management",
    collaborators: "Senior design team (see github)",
    description: "Senior Design project for Boston University <a target='_blank' href='http://www.bu.edu/eng/'>College of Engineering</a>. Created a semi-autonomous robot for <a target='_blank' href='http://www.conedison.com/'>Con Edison</a> which transports and aligns circuit breakers. Finalist in the <a target='_blank' href='http://www.systemseng.cornell.edu/intel/'>Intel Cornell Cup</a> Systems Engineering competition and won best overall project in the Computer and Electrical Engineering Department.",
    technologies: [
      { name: "Angular.js", link: "https://angularjs.org/" },
      { name: "UNIX sockets (C++/Node)" },
      { name: "Intel Edison", link: "http://www.intel.com/content/www/us/en/do-it-yourself/edison.html" }
    ],
    banner: {
      src: "../images/breakerbot/screenshot0.jpeg",
      caption: "Final version of the semi-autonomous robot."
    },
    images: [{
      src: "../images/breakerbot/screenshot1.jpeg",
      caption: "The robot is able to autonomously align with the mock circuit breaker cabinet"
    }, {
      src: "../images/breakerbot/screenshot2.jpeg",
      caption: "Users are able to control the robot remotely using a video game controller and web browser."
    }, {
      src: "../images/breakerbot/screenshot3.jpeg",
      caption: "The robot uses video processing and a state machine to autonomously align with the breaker cabinet."
    }, {
      src: "../images/breakerbot/software.png",
      caption: "Software architecture created for the interaction between the C++ program for the hardware, and interface with the web stack.",
    }, {
      src: "../images/breakerbot/software2.png",
      caption: "Final C++ control program layout using OOP with a different module for each hardware component.",
      smaller: true
    }, {
      src: "../images/breakerbot/screenshot4.jpeg",
      caption: "Our team consisted of four mechanical engineers, three computer engineers, and an electrical engineer."
    }],
    videos: [{
      src: "https://www.youtube.com/embed/yyhNmTSDY2Q?start=20&autoplay=1",
      caption: "Video demonstrating the different components and autonomous alignment of the robot."
    }],
    // timeline: "8 months",
    // budget: "$2000",
    date: "May 2016",
    link: "https://www.youtube.com/embed/yyhNmTSDY2Q?autoplay=1",
    pretty: "Con Edison Robotics",
  },
  pokemon: {
    title: "Twitch Plays Pokemon Go!",
    category: "project",
    tagline: "The best of Twitch Plays and Pokemon Go brought together.",
    link: "https://www.twitch.tv/twitchpokemongo",
    collaborators: "hackNY 2016 fellows",
    description: "Brought the phenomena of <a target='_blank' href='https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon'>Twitch plays</a> and <a target='_blank' href='http://www.pokemongo.com/'>Pokemon Go</a> together for a wonderful crowdsourced Pokemon experience. This is made possible by location spoofing and simulating touch events on the iPhone. Stream viewers are able to vote for the player's movement by typing the commands into the chat. Created at <a target='_blank' href='hackny.org'>hackNY</a>.<br><br>The brief 3-day run had over 180,000 participants, and over 2,800 followers on Twitch. Also, we garnered some <a target='_blank' href='http://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>internet fame </a>.",
    technologies: [
      { name: "Cycript", link: "http://www.cycript.org/" },
      { name: "Flask", link: "http://flask.pocoo.org/" }
    ],
    press: [{
      name: "The Verge article",
      src: "https://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream"
    }],
    areas: "Development & Design",
    banner: {
      src: "../images/pokemon/screenshot3.png",
      caption: "Viewers are able to enter commands into the Twitch chat to control the character."
    },
    images: [{
      src: "../images/pokemon/screenshot0.png",
      caption: "The commands that received the most votes is executed. Viewers are able to see the GPS location of the character on the mini-map.",
      smaller: true
    }, {
      src: "../images/pokemon/screenshot2.png",
      caption: "A grid overlay on the screen allows viewers to tap on different areas on the screen.",
      portrait: true
    }, {
      src: "../images/pokemon/screenshot1.png",
      caption: "The README.md for the commands displayed on the screen.",
      smaller: true
    }, {
      src: "../images/pokemon/screenshot5.jpg",
      caption: "Our means to control the location which the Twitch stream controls. Kidding, we used GPS spoofing.",
      portrait: true
    }],
    // timeline: "3 days",
    date: "June 2016",
    pretty: "Twitch Plays Pokemon Go",
  },
  neif: {
    title: "Nick Ebner Integrative Fitness",
    category: "professional",
    tagline: "Site created for Nick Ebner Integrative Fitness gym.",
    link: "http://nickebnerfitness.com/",
    collaborators: "Avenir Interactive, Calvin Chin",
    areas: "Development",
    description: "Worked alongside <a target='_blank' href='http://avenir-interactive.com/'>Avenir Interactive</a> and <a target='_blank' href='https://www.instagram.com/cvin519/'>Calvin Chin</a> to create the professional site for <a target='_blank' href='http://nickebnerfitness.com/'>Nick Ebner’s gym</a>.",
    technologies: [{ name: "Middleman", link: "https://middlemanapp.com/" }],
    iframe: "http://nickebnerfitness.com/",
    banner: {
      src: "../images/neif/screenshot1.png",
      caption: "Screenshot of the final site created for Nick Ebner."
    },
    // timeline: "2 months",
    date: "December 2015",
    pretty: "Nick Ebner Site",
  },
  processing: {
    title: "Processing",
    category: "design",
    tagline: "Various interactive design projects created with processing language.",
    areas: "Development & Design",
    github: "https://github.com/dqgorelick/processing",
    description: "Collection of projects created during the Boston University <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> course Interactive Design. All of the projects are created using the <a target='_blank' href='http://processingjs.org/'>Processing language</a>.",
    technologies: [{ name: "Processing language", link: "http://processingjs.org/" }],
    banner: {
      src: "../images/processing/screenshot3.jpg",
      caption: "The design responds to music and user’s mouse input"
    },
    images: [{
      src: "../images/processing/tesseract.gif",
      caption: "My initial motivation to learn processing was to create this rotating tesseract.",
      portrait: true
    }],
    videos: [{
      src: "https://www.youtube.com/embed/hCtMevYWCf0?",
      caption: "Uses additive colors and sound input to create a visualization of the music."
    }, {
      src: "https://www.youtube.com/embed/VOHYuH8qYiU?",
      caption: "The design responding to Jack Garratt’s - “The Love You’re Given”."
    }],
    // timeline: "4 months",
    date: "May 2016",
    pretty: "Processing",
  }
}
