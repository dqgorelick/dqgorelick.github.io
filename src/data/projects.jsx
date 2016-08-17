export const ACTIVE_PROJECTS = [
    "pokemon",
    "breakerbot",
    "mbta",
    "sharks_and_minnows",
    "processing",
    "bostonhacks",
    "neif",
    "map",
    "typespecimen",
    "newyorktimes",
    "wikinauts",
    "calvin"
];

export const PROJECTS = {
    bostonhacks: {
        title: "Bostonhacks Live Page",
        link: "http://live.bostonhacks.io",
        github: "https://github.com/boston-hacks/boston-hacks.github.io",
        iframe: "http://live.bostonhacks.io/map",
        areas: "Design and development",
        description: "Led team to create day-of website created for the <a target='_blank' href='https://bostonhacks.io/'>first national hackathon at Boston University</a> in October 2015. The site acted as the main form of communication with the <a target='_blank' href='http://www.bu.edu/today/2015/bu-hackathon-draws-500/'>500 hackers</a> who attended.",
        technologies: [
            {name: "Foundation", link: "http://foundation.zurb.com/"},
            {name: "Parse backend", link: "http://www.parse.com/"},
            {name: "CSS Keyframes"}
        ],
        images :[
            "../images/bostonhacks/screenshot1.png",
            "../images/bostonhacks/screenshot2.png"
        ],
        date: "Sep\u2014Nov 2015",
        classes: "fixed-margin",
        pretty: "Bostonhacks",
    },
    orator: {
        title: "Orator WebApp",
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
        images  :[
            "../images/orator/screenshot1.png",
            "../images/orator/screenshot2.png"
        ],
        date: "Apr 2015",
        pretty: "Orator Project",
    },
    wikinauts: {
        title: "Wikinauts Android App",
        link: "http://wikinauts.github.io",
        iframe: "http://wikinauts.github.io",
        areas: "Design and development",
        description: "The mobile take on the popular <a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game'>Wikipedia game</a>, where the goal is to find the shortest path between Wikipedia article pages by only clicking on the links. The application was completed as a final project in the EC327 course at Boston University. Available in the <a target='_blank' href='https://play.google.com/store/apps/details?id=com.beep_boop.Beep&hl=en'>Google Play store</a>.",
        images  :[
            "../images/wikinauts/screenshot0.png",
            "../images/wikinauts/screenshot1.png",
            "../images/wikinauts/screenshot2.png",
            "../images/wikinauts/screenshot3.png",
            "../images/wikinauts/screenshot4.png"
        ],
        small_image: true,
        date: "Sep\u2014Dec 2014",
        classes: "fixed-margin",
        pretty: "Wikinauts App"
    },
    newyorktimes: {
        title: "Times Trailer",
        description: "Video editing and rendering web application created for the <a target='_blank' href='nytimes.com'>New York Times</a>. Purpose of the project is to pragmatically generate video content for static articles, for the newsroom to be able to rapidly edit and publish. The web application is built using Angular.js and can render .mov, .webm, and .gif by capturing animation frames from the canvas object.",
        technologies: [
            {name: "HTML5 canvas w/ Fabric.js library", link: "http://fabricjs.com/"},
            {name: "Angular.js", link: "https://angularjs.org/"},
            {name: "Ffmpeg", link: "https://ffmpeg.org/"},
            {name: "Node and Express", link: "https://expressjs.com/"}
        ],
        areas: "Design and development",
        images :[
            "../images/newyorktimes/example.gif",
            "../images/newyorktimes/screenshot1.png",
            "../images/newyorktimes/screenshot2.png",
            "../images/newyorktimes/screenshot3.png"
        ],
        date: "Jun\u2014Aug 2015",
        classes: "break-word",
        pretty: "New York Times",
    },
    calvin: {
        title: "Design Portfolio Concept",
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
        description: "Created for the Boston University chapter of <a target='_blank' href='https://www.globalbrigades.org/experience-water-brigades'>Global Water Brigades</a> Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Raised over $1.2k for the BU Global Water Brigades. Painted elements created by Alison Staffin (BU ‘17).",
        areas: "Design",
        images: [
            "../images/map/screenshot1.jpg",
            "../images/map/screenshot2.jpg",
            "../images/map/screenshot3.png",
            "../images/map/screenshot4.png"
        ],
        date: "Oct\u2014Nov 2015",
        pretty: "Marauders Map",
        classes: "fixed-margin-2",
    },
    typespecimen: {
        title: "Type Specimens: Helvetica",
        description: "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
        areas: "Design",
        images: [
            "../images/typespecimen/screenshot1.png",
            "../images/typespecimen/screenshot2.png",
            "../images/typespecimen/screenshot3.png"
        ],
        date: "Nov 2015",
        pretty: "Type Specimin",
        classes: "fixed-margin",
    },
    sharks_and_minnows: {
        title: "Sharks \u0026 Minnows",
        github: "https://github.com/dqgorelick/digital-ocean",
        areas: "Development",
        description: "Hackathon project built at <a target='_blank' href='https://hackbeanpot.com/'>HackBeanpot 2016</a>. My first experience at using web sockets extensively as well as game development paradigms. We had a great team, and we all learned a bunch (and didn't sleep much).",
        technologies: [
            {name: "Socket.io", link: "http://socket.io/"},
            {name: "Node and Express", link: "https://expressjs.com/"},
            {name: "HTML5 Canvas"}
        ],
        images :[
            "../images/sharks/screenshot0.png",
            "../images/sharks/screenshot1.png",
            "../images/sharks/screenshot2.png"
        ],
        date: "Jan 2016",
        pretty: "Sharks \u0026 Minnows"
    },
    breakerbot: {
        title: "Breakerbot",
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
        date: "Sep 2015\u2014May 2016",
        link: "https://www.youtube.com/embed/yyhNmTSDY2Q?autoplay=1",
        pretty: "Breakerbot",
        classes: "fixed-margin",
    },
    pokemon: {
        title: "Twitch Plays Pokemon Go!",
        link: "https://www.twitch.tv/twitchpokemongo",
        description: "Brought the phenomena of <a target='_blank' href='https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon'>Twitch plays</a> and <a target='_blank' href='http://www.pokemongo.com/'>Pokemon Go</a> together for a wonderful crowdsourced Pokemon experience. This is made possible by location spoofing and simulating touch events on the iPhone. Stream viewers are able to vote for the player's movement by typing the commands into the chat. Though the stream only ran for about a week, our <a target='_blank' href='hackny.org'>hackNY</a> team became <a target='_blank' href='http://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>semi-internet famous</a> for a short stint.",
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
        pretty: "Pokemon Go",
        classes: "fixed-margin",
    },
    neif: {
        title: "Nick Ebner Integrative Fitness",
        link: "http://nickebnerfitness.com/",
        areas: "Development",
        description: "Worked alongside <a target='_blank' href='http://avenir-interactive.com/'>Avenir Interactive</a> to create the professional site for <a target='_blank' href='http://nickebnerfitness.com/'>Nick Ebner's gym</a>.",
        technologies: [{name: "Middleman", link: "https://middlemanapp.com/"}],
        iframe: "http://nickebnerfitness.com/",
        images: [
            "../images/neif/screenshot1.png",
            "../images/neif/screenshot2.png",
        ],
        date: "Oct\u2014Dec 2015",
        pretty: "Nick Ebner Gym",
        classes: "break-word",
    },
    processing: {
        title: "Interactive Design",
        areas: "Development / Design",
        github: "https://github.com/dqgorelick/processing",
        description: "Collection of projects created during the Boston University <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> course Interactive Design. All of the projects are created using the <a target='_blank' href='http://processingjs.org/'>Processing language</a>.",
        technologies: [{name: "Processing language", link: "http://processingjs.org/"}],
        images :[
            "../images/processing/screenshot1.png",
            "../images/processing/screenshot2.png",
            "../images/processing/screenshot3.jpg",
            "../images/processing/screenshot4.png",
        ],
        date: "Jan\u2014May 2016",
        pretty: "Interactive Design",
    },
    mbta: {
        title: "MBTA Alerts and Performance Analysis",
        areas: "Development / Design",
        link: "http://ec2-52-34-3-119.us-west-2.compute.amazonaws.com/",
        github: "https://github.com/BU-NU-CLOUD-SP16/MBTA-Alerts-and-Performance-Anlaysis",
        description: "Worked with the <a target='_blank' href='http://www.mbta.com/'>Massachusetts Bay Transportation Authority</a> to better analyze and communicate the effectiveness of performance alerts. Developed full-stack web application to measure real-time performance against statistical models created from aggregated historical data.",
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
