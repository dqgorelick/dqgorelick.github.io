export const ACTIVE_PROJECTS = [
    "pokemon",
    "breakerbot",
    "mbta",
    "popallston",
    "sharks_and_minnows",
    "processing",
    "bostonhacks",
    "neif",
    "map",
    "typespecimen",
    "newyorktimes",
    "wikinauts",
];

export const PROCESSING_PROJECTS = {
    cube: {
        title: "Tesseract Project",
    },
    sophisticated: {
        title: "Interactive Design Project 1",
    },
    circles: {
        title: "Interactive Design Project 2",
    },
    music: {
        title: "Interactive Design Project 3",
    },
    waves: {
        title: "Interactive Design Project 4",
    },
    clock: {
        title: "Interactive Design Final Project",
    },
    popallston: {
        title: "Tell Me Everything",
    }
};

export const PROJECTS = {
    bostonhacks: {
        title: "Bostonhacks Live Page",
        tagline: "Webpage created for hackathon of with 500+ hackers @ BU.",
        link: "http://boston-hacks.github.io",
        github: "https://github.com/boston-hacks/boston-hacks.github.io",
        iframe: "http://boston-hacks.github.io/map",
        areas: "Design and development",
        description: "Led team to create day-of website created for the <a target='_blank' href='https://bostonhacks.io/'>first national hackathon at Boston University</a> in October 2015. The site acted as the main form of communication with the <a target='_blank' href='http://www.bu.edu/today/2015/bu-hackathon-draws-500/'>500 hackers</a> who attended.",
        technologies: [
            {name: "Foundation", link: "http://foundation.zurb.com/"},
            {name: "Parse backend", link: "http://www.parse.com/"},
            {name: "CSS Keyframes"}
        ],
        images: [
            "../images/bostonhacks/screenshot1.png",
            "../images/bostonhacks/screenshot2.png"
        ],
        date: "Sep\u2014Nov 2015",
        pretty: "Bostonhacks Live Site",
    },
    orator: {
        title: "Orator WebApp",
        tagline: "This is just a test for now, to be filled in later",
        link: "./orator",
        github: "https://github.com/dqgorelick/orator",
        areas: "Development",
        description: "24-hour hackathon project project at Make BU 2014 to explore the uses of speech to text and text semantic analysis. Created a smart teleprompter that will follow the speakers progress during a speech, as well as a speech analyzing engine which will rate a speech on various metrics such as sentiment, posture, speed, and flag profanity.",
        technologies: [
            {name: "Google Voice chrome webkit"},
            {name: "Semantria API", link: "https://www.lexalytics.com/semantria"},
            {name: "HTML5 Canvas"},
            {name: "HTML video and microphone"}
        ],
        images: [
            "../images/orator/screenshot1.png",
            "../images/orator/screenshot2.png"
        ],
        date: "Apr 2015",
        pretty: "Orator Project",
    },
    popallston: {
        title: "Tell Me Everything",
        tagline: "Interactive installation created for a collaborative art show.",
        link: "https://player.vimeo.com/video/179276133?autoplay=1",
        github: "https://github.com/dqgorelick/processing/blob/master/pop_allston/pop_allston.pde",
        areas: "Design and development",
        description: "Installation created for the <a target='_blank' href='http://www.tellmeeverything.show/'>Tell Me Everything</a> art show. The artwork reacts to ambient music, continuously generating new designs. The show was co-curated by <a target='_blank' href='http://fritzhowser.com/'>Fritz Howser</a> and <a target='_blank' href='http://www.bryan-fountain.com/'>Bryan Fountain</a>. <br><br>More photos of the event <a target='_blank' href='http://www.bryan-fountain.com/tell-me-everything/'>&#10149;</a>",
        images: [
            "../images/popallston/screenshot1.jpeg",
            "../images/popallston/screenshot2.gif",
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/WN6uD2r1it8?",
            }
        ],
        technologies: [{name: "Processing language", link: "http://processingjs.org/"}],
        date: "Apr 2016",
        pretty: "Interactive Installation"
    },
    wikinauts: {
        title: "Wikinauts Android App",
        tagline: "A twist on the Wikipedia game, brought to android.",
        link: "http://wikinauts.github.io",
        iframe: "http://wikinauts.github.io",
        areas: "Design and development",
        description: "The mobile take on the popular <a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game'>Wikipedia game</a>, where the goal is to find the shortest path between Wikipedia article pages by only clicking on the links. The application was completed as a final project in the EC327 course at Boston University. Available in the <a target='_blank' href='https://play.google.com/store/apps/details?id=com.beep_boop.Beep&hl=en'>Google Play store</a>.",
        images : [
            "../images/wikinauts/screenshot0.png",
            "../images/wikinauts/screenshot1.png",
            "../images/wikinauts/screenshot2.png",
            "../images/wikinauts/screenshot3.png",
            "../images/wikinauts/screenshot4.png"
        ],
        small_image: true,
        date: "Sep\u2014Dec 2014",
        pretty: "Wikinauts App"
    },
    newyorktimes: {
        title: "Times Trailer",
        tagline: "Render and edit videos all in the browser! Editing tool created for NYT.",
        description: "Video editing and rendering web application created for the <a target='_blank' href='nytimes.com'>New York Times</a>. Purpose of the project is to pragmatically generate video content for static articles, for the newsroom to be able to rapidly edit and publish. The web application is built using Angular.js and can render .mov, .webm, and .gif by capturing animation frames from the canvas object.",
        technologies: [
            {name: "HTML5 canvas w/ Fabric.js library", link: "http://fabricjs.com/"},
            {name: "Angular.js", link: "https://angularjs.org/"},
            {name: "Ffmpeg", link: "https://ffmpeg.org/"},
            {name: "Node and Express", link: "https://expressjs.com/"}
        ],
        areas: "Design and development",
        images: [
            "../images/newyorktimes/example.gif",
            "../images/newyorktimes/screenshot1.png",
            "../images/newyorktimes/screenshot2.png",
            "../images/newyorktimes/screenshot3.png"
        ],
        date: "Jun\u2014Aug 2015",
        pretty: "New York Times Webapp",
    },
    calvin: {
        title: "Design Portfolio Concept",
        tagline: "This is just a test for now, to be filled in later",
        link: "http://cvin519.github.io/",
        areas: "UX and development",
        description: "Created a visual and UX concept for a design portfolio. All pieces of work displayed are created by <a target='_blank' href='https://www.instagram.com/cvin519/'>Calvin Chin</a> (BU ‘16).",
        images: [
            "../images/calvin/screenshot1.png",
            "../images/calvin/screenshot2.png",
            "../images/calvin/screenshot3.png"
        ],
        date: "Feb 2015",
        pretty: "Design Portfolio",
    },
    map: {
        title: "Boston University Marauder's Map",
        tagline: "Making maps and raising money for clean water!",
        description: "Created for the Boston University chapter of <a target='_blank' href='https://www.globalbrigades.org/experience-water-brigades'>Global Water Brigades</a> Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Raised over $1.2k for the BU Global Water Brigades. Painted elements created by Alison Staffin (BU ‘17).",
        areas: "Design",
        images: [
            "../images/map/screenshot1.jpg",
            "../images/map/screenshot2.jpg",
            "../images/map/screenshot3.png",
            "../images/map/screenshot4.png"
        ],
        date: "Oct\u2014Nov 2015",
        pretty: "Marauders Map Project",
    },
    typespecimen: {
        title: "Type Specimens: Helvetica",
        tagline: "This is my helvetica poster. Created for a typography course at BU's CFA.",
        description: "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
        areas: "Design",
        images: [
            "../images/typespecimen/screenshot1.png",
            "../images/typespecimen/screenshot2.png",
            "../images/typespecimen/screenshot3.png"
        ],
        date: "Nov 2015",
        pretty: "Helvetica Type Specimin",
    },
    sharks_and_minnows: {
        title: "Sharks \u0026 Minnows",
        tagline: "Play tag with friends online using web sockets. A winning hack.",
        github: "https://github.com/dqgorelick/digital-ocean",
        areas: "Development",
        description: "A winning hackathon project built at <a target='_blank' href='https://hackbeanpot.com/'>HackBeanpot 2016</a>. My first experience at using web sockets extensively as well as game development paradigms. We had a great team, and we all learned a bunch (and didn't sleep much).",
        technologies: [
            {name: "Socket.io", link: "http://socket.io/"},
            {name: "Node and Express", link: "https://expressjs.com/"},
            {name: "HTML5 Canvas"}
        ],
        images: [
            "../images/sharks/screenshot0.png",
            "../images/sharks/screenshot2.png"
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/0qiosG5gr-A?"
            }
        ],
        date: "Jan 2016",
        pretty: "Sharks \u0026 Minnows Game"
    },
    breakerbot: {
        title: "Breakerbot",
        tagline: "Work with ConEd to bring robot automation to the utilities industry.",
        github: "https://github.com/dqgorelick/breakerbot",
        areas: "Development / Project Management",
        description: "Senior Design project for Boston University <a target='_blank' href='http://www.bu.edu/eng/'>College of Engineering</a>. Created a semi-autonomous robot for <a target='_blank' href='http://www.conedison.com/'>Con Edison</a> which transports and aligns circuit breakers. Finalist in the <a target='_blank' href='http://www.systemseng.cornell.edu/intel/'>Intel Cornell Cup</a> Systems Engineering competition and won best overall project in the Computer and Electrical Engineering Department.",
        technologies: [
            {name: "Angular.js", link: "https://angularjs.org/"},
            {name: "UNIX sockets (C++/Node)"},
            {name: "Intel Edison", link: "http://www.intel.com/content/www/us/en/do-it-yourself/edison.html"}
        ],
        images: [
            "../images/breakerbot/screenshot0.jpeg",
            "../images/breakerbot/screenshot1.jpeg",
            "../images/breakerbot/screenshot2.jpeg",
            "../images/breakerbot/screenshot3.jpeg",
            "../images/breakerbot/screenshot4.jpeg",
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/yyhNmTSDY2Q?start=66&autoplay=1",
            }
        ],
        date: "Sep 2015\u2014May 2016",
        link: "https://www.youtube.com/embed/yyhNmTSDY2Q?autoplay=1",
        pretty: "Breakerbot Project",
    },
    pokemon: {
        title: "Twitch Plays Pokemon Go!",
        tagline: "The best of Twitch Plays and Pokemon Go brought together.",
        link: "https://www.twitch.tv/twitchpokemongo",
        description: "Brought the phenomena of <a target='_blank' href='https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon'>Twitch plays</a> and <a target='_blank' href='http://www.pokemongo.com/'>Pokemon Go</a> together for a wonderful crowdsourced Pokemon experience. This is made possible by location spoofing and simulating touch events on the iPhone. Stream viewers are able to vote for the player's movement by typing the commands into the chat. Created @ <a target='_blank' href='hackny.org'>hackNY</a>.<br><br>Internet fame <a target='_blank' href='http://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>&#10149;</a>",
        technologies: [
            {name: "Cycript", link: "http://www.cycript.org/"},
            {name: "Flask", link: "http://flask.pocoo.org/"}
        ],
        areas: "Development / Design",
        images: [
            "../images/pokemon/screenshot0.png",
            "../images/pokemon/screenshot1.png",
            "../images/pokemon/screenshot2.png",
            "../images/pokemon/screenshot3.png",
        ],
        date: "June 2016",
        pretty: "Twitch Plays Pkmn Go",
    },
    neif: {
        title: "Nick Ebner Integrative Fitness",
        tagline: "Site created for Nick Ebner Integrative Fitness gym.",
        link: "http://nickebnerfitness.com/",
        areas: "Development",
        description: "Worked alongside <a target='_blank' href='http://avenir-interactive.com/'>Avenir Interactive</a> and <a target='_blank' href='https://www.instagram.com/cvin519/'>Calvin Chin</a> to create the professional site for <a target='_blank' href='http://nickebnerfitness.com/'>Nick Ebner's gym</a>.",
        technologies: [{name: "Middleman", link: "https://middlemanapp.com/"}],
        iframe: "http://nickebnerfitness.com/",
        images: [
            "../images/neif/screenshot1.png",
            "../images/neif/screenshot2.png",
        ],
        date: "Oct\u2014Dec 2015",
        pretty: "Nick Ebner Gym Site",
    },
    processing: {
        title: "Interactive Design",
        tagline: "Various interactive design projects created with processing language.",
        areas: "Development / Design",
        github: "https://github.com/dqgorelick/processing",
        description: "Collection of projects created during the Boston University <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> course Interactive Design. All of the projects are created using the <a target='_blank' href='http://processingjs.org/'>Processing language</a>.",
        technologies: [{name: "Processing language", link: "http://processingjs.org/"}],
        images: [
            "../images/processing/screenshot2.png",
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/MKrYlIsjqiI?autoplay=1",
            },
            {
                src: "https://www.youtube.com/embed/VOHYuH8qYiU?",
            },
            {
                src: "https://www.youtube.com/embed/hCtMevYWCf0?",
            }
        ],
        date: "Jan\u2014May 2016",
        pretty: "Processing Projects",
    },
    mbta: {
        title: "MBTA Alerts and Performance Analysis",
        tagline: "Teamed up with the MBTA to improve performance and delay alerts.",
        areas: "Development / Design",
        link: "http://ec2-52-34-3-119.us-west-2.compute.amazonaws.com/",
        github: "https://github.com/BU-NU-CLOUD-SP16/MBTA-Alerts-and-Performance-Anlaysis",
        description: "Worked with the <a target='_blank' href='http://www.mbta.com/'>Massachusetts Bay Transportation Authority</a> to better analyze and communicate the effectiveness of performance alerts. Developed full-stack web application to measure real-time performance against statistical models created from aggregated historical data.<br><br>Check out the current status of the MBTA <a target='_blank' href='http://ec2-52-34-3-119.us-west-2.compute.amazonaws.com/'>&#10149;</a>",
        technologies: [{name: "Python/Node"}, {name: "D3.js", link: "http://d3js.org"}, {name: "Sqlite3"}],
        date: "Feb\u2014May 2016",
        images: [
            "../images/mbta/screenshot1.png",
            "../images/mbta/screenshot2.png",
            "../images/mbta/screenshot3.png",
            "../images/mbta/screenshot4.png",
        ],
        pretty: "MBTA Visualization"
    }
}
