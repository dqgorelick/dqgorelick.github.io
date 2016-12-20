export const ACTIVE_PROJECTS = [
    "mbta",
    "popallston",
    "breakerbot",
    "newyorktimes",
    "typespecimen",
    "map",
    "tabbo",
    "processing",
    "pokemon",
    "wikinauts",
    "cribbage"
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
        category: "project",
        tagline: "Webpage created for hackathon of with 500+ hackers @ BU.",
        link: "http://boston-hacks.github.io",
        github: "https://github.com/boston-hacks/boston-hacks.github.io",
        iframe: "http://boston-hacks.github.io/map",
        areas: "Design and development",
        description: "Led team to create day-of website created for the <a target=’_blank' href='https://bostonhacks.io/'>first national hackathon at Boston University</a> in October 2015. The site acted as the main form of communication with the <a target='_blank' href='http://www.bu.edu/today/2015/bu-hackathon-draws-500/'>500 hackers</a> who attended.",
        technologies: [
            {name: "Foundation", link: "http://foundation.zurb.com/"},
            {name: "Parse backend", link: "http://www.parse.com/"},
            {name: "CSS Keyframes"}
        ],
        images: [
            {
                src: "../images/bostonhacks/screenshot1.png",
            },
            {
                src: "../images/bostonhacks/screenshot2.png",
            },
        ],
        date: "November 2015",
        timeline: "2 weeks",
        pretty: "Bostonhacks Live Site",
    },
    tabbo: {
        title: "Tabbo Chrome Extension",
        category: "project",
        collaborators: "Biggie Emmanuel, Andy Wang",
        tagline: "Bringing much-needed features to google chrome",
        link: "https://chrome.google.com/webstore/detail/tabbo/hedbkonckghacebehjebpfknhdbobiko",
        github: "https://github.com/hackny2016labs/tabbo",
        areas: "Development",
        description: "A project built to solve an everyday need of (some) chrome users. My original motivation to create this extension was that there is no keybind in google chrome that allows you to move tabs left and right, or pop tabs off. Tabbo became the niche utility tool that changes how you use chrome.<br><br>See the extension in the chrome store. <a target='_blank' href='https://chrome.google.com/webstore/detail/tabbo/hedbkonckghacebehjebpfknhdbobiko'>&#10149;</a>",
        technologies: [
            {name: "Google Chrome API"}
        ],
        banner: {
            src: "../images/tabbo/screenshot1.png",
            caption: "The console offers keybinds to move tabs between chrome windows."
        },
        images: [
            {
                src: "../images/tabbo/screenshot2.png",
                caption: "Additional features are available in the extension menu"
            }
        ],
        videos: [
            {
                "src": "https://www.youtube.com/embed/lnltvwTZZpU?",
                caption: "Demo of the chrome extension"
            }
        ],
        timeline: "2 nights",
        date: "August 2016",
        pretty: "Chrome Tab Management"
    },
    cribbage: {
        title: "CNC Cribbage Board",
        category: "project",
        tagline: "Custom designed, CNC'd aluminum game board",
        areas: "Engineering / Design",
        description: "Realizing that I lacked a cribbage board, and that at the time I was a student worker in our machine shop I decided to create my own! I modeled the board off of my father's board my brothers and I would play on. The CAD design work was done in SolidWorks, and GibbsCam was used to program the CNC machines. The game board is aluminum, and the game pieces are 1/4\" steel pins.",
        technologies: [{name: "GibbsCam"}, {name: "SolidWorks"}],
        date: "October 2014",
        banner: {
            src: "../images/cribbage/screenshot1.jpg",
            caption: "The gameboard is machined from a single piece of aluminum."
        },
        timeline: "2 weeks",
        budget: "$100",
        materials: "Aluminum, Steel",
        images: [
            {
                src: "../images/cribbage/screenshot2.jpg",
                caption: "Top view of the board"
            },
            {
                src: "../images/cribbage/screenshot3.jpg",
                caption: "Inspiration for the design came from board used by my family and this example"
            }
        ],
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
            {name: "NYTimes API", link: "https://developer.nytimes.com/"}
        ],
        timeline: "24 hours",
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
            {name: "Google Voice chrome webkit"},
            {name: "Semantria API", link: "https://www.lexalytics.com/semantria"},
            {name: "HTML5 Canvas"},
            {name: "HTML video and microphone"}
        ],
        images: [
            {
                src: "../images/orator/screenshot1.png"
            },
            {
                src: "../images/orator/screenshot2.png"
            }
        ],
        timeline: "24 hours",
        date: "April 2015",
        pretty: "Orator Project"
    },
    popallston: {
        title: "Tell Me Everything",
        category: "design",
        tagline: "Interactive installation created for a collaborative art show.",
        link: "https://player.vimeo.com/video/179276133?autoplay=1",
        github: "https://github.com/dqgorelick/processing/blob/master/pop_allston/pop_allston.pde",
        areas: "Design and development",
        description: "Installation created for the <a target='_blank' href='http://www.tellmeeverything.show/'>Tell Me Everything</a> art show. The artwork reacts to ambient music, continuously generating new designs. The show was co-curated by <a target='_blank' href='http://fritzhowser.com/'>Fritz Howser</a> and <a target='_blank' href='http://www.bryan-fountain.com/'>Bryan Fountain</a>. <br><br>More photos of the event <a target='_blank' href='http://www.bryan-fountain.com/tell-me-everything/'>&#10149;</a>",
        banner: {
            src: "../images/popallston/screenshot1.jpeg",
            caption: "The installation welcomed visitors as they entered the space."
        },
        images: [
            {
                src: "../images/popallston/screenshot2.gif",
                caption: "The letters transition between various orientations."
            }
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/WN6uD2r1it8?",
                caption: "Example of the artwork reacting to ambient music"
            }
        ],
        timeline: "3 days",
        technologies: [{name: "Processing language", link: "http://processingjs.org/"}],
        date: "April 2016",
        pretty: "Interactive Installation"
    },
    wikinauts: {
        title: "Wikinauts Android App",
        category: "project",
        collaborators: "Doug Roeper, Pablo Velarde, Brian Tan, & Nick Maresco",
        tagline: "A twist on the Wikipedia game, brought to android.",
        link: "http://wikinauts.github.io",
        iframe: "http://wikinauts.github.io",
        areas: "Design and development",
        description: "The mobile take on the popular <a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game'>Wikipedia game</a>, where the goal is to find the shortest path between Wikipedia article pages by only clicking on the links. The application was completed as a final project in the EC327 course at Boston University. Available in the <a target='_blank' href='https://play.google.com/store/apps/details?id=com.beep_boop.Beep&hl=en'>Google Play store</a>.",
        banner_portrait: true,
        banner: {
            src: "../images/wikinauts/screenshot1.png",
            caption: "Start-up screen for the application where user selects different game modes."
        },
        images : [
            {
                src: "../images/wikinauts/screenshot0.png",
                caption: "Artwork for the character Cosmo created for the application",
                portrait: true
            },
            {
                src: "../images/wikinauts/screenshot2.png",
                caption: "Links from Wikipedia pages are parsed and displayed in a scrollable interface for users.",
                portrait: true
            },
            {
                src: "../images/wikinauts/screenshot3.png",
                caption: "The objective of the game is to “travel” from one word to another using the links between the words.",
                portrait: true
            },
            {
                src: "../images/wikinauts/screenshot4.png",
                caption: "Users select different levels in the game’s map view.",
                portrait: true
            }
        ],
        small_image: true,
        timeline: "3 months",
        date: "December 2014",
        pretty: "Wikinauts App"
    },
    newyorktimes: {
        title: "Times Trailer",
        category: "professional",
        collaborators: "Intern team (see github)",
        tagline: "Render and edit videos all in the browser! Editing tool created for NYT.",
        description: "Video editing and rendering web application created for the <a target='_blank' href='http://nytimes.com'>New York Times</a>. Purpose of the project is to pragmatically generate video content for static articles, for the newsroom to be able to rapidly edit and publish. The web application is built using Angular.js and can render .mov, .webm, and .gif by capturing animation frames from the canvas object.",
        technologies: [
            {name: "HTML5 canvas w/ Fabric.js library", link: "http://fabricjs.com/"},
            {name: "Angular.js", link: "https://angularjs.org/"},
            {name: "Ffmpeg", link: "https://ffmpeg.org/"},
            {name: "Node and Express", link: "https://expressjs.com/"}
        ],
        areas: "Design and development",
        banner: {
            src: "../images/newyorktimes/screenshot2.png",
            caption: "Reporters are able to edit and render the video all within the browser window."
        },
        images: [
            {
                src: "../images/newyorktimes/example.gif",
                caption: "Final result of the .gif created by the web app."
            },
            {
                src: "../images/newyorktimes/screenshot1.png",
                caption: "Users select any story using the URL from the NYTimes site."
            },
            {
                src: "../images/newyorktimes/screenshot3.png",
                caption: "Meta data is parsed out and is available to the users."
            }
        ],
        timeline: "2 months",
        date: "August 2015",
        pretty: "New York Times Webapp",
    },
    calvin: {
        title: "Design Portfolio Concept",
        category: "project",
        tagline: "This is just a test for now, to be filled in later",
        link: "http://cvin519.github.io/",
        areas: "UX and development",
        description: "Created a visual and UX concept for a design portfolio. All pieces of work displayed are created by <a target='_blank' href='https://www.instagram.com/cvin519/'>Calvin Chin</a> (BU ‘16).",
        images: [
            {
                src: "../images/calvin/screenshot1.png",
            },
            {
                src: "../images/calvin/screenshot2.png",
            },
            {
                src: "../images/calvin/screenshot3.png"
            },
        ],
        timeline: "1 week",
        date: "February 2015",
        pretty: "Design Portfolio",
    },
    map: {
        title: "Boston University Marauder’s Map",
        category: "design",
        collaborators: "Alison Staffin",
        tagline: "Making maps and raising money for clean water!",
        description: "Created for the Boston University chapter of <a target='_blank' href='https://www.globalbrigades.org/experience-water-brigades'>Global Water Brigades</a> Harry Potter Movie Marathon event. The maps are printed on tabloid size parchment paper in color. Raised over $1.2k for the BU Global Water Brigades. Painted elements created by Alison Staffin (BU ‘17).",
        areas: "Design",
        banner: {
            src: "../images/map/screenshot1.jpg",
            caption: "Maps were sold as tickets to visitors for the events."
        },
        images: [
            {
                src: "../images/map/screenshot2.jpg",
                caption: "The Boston University insignia was added to the map along with the latin name “Universitas Bostoniensis”."
            },
            {
                src: "../images/map/screenshot5.jpg",
                caption: "Visitors were also stamped with the deathly hallows mark as they arrived."
            },
            {
                src: "../images/map/screenshot3.jpg",
                caption: "Each map acted as a ticket for all 7 nights of the event."
            },
            {
                src: "../images/map/screenshot4.jpg",
                caption: "The map also incorporats iconic landmarks from the BU campus."
            },
        ],
        budget: "$50",
        date: "November 2015",
        pretty: "Marauders Map Project",
    },
    typespecimen: {
        title: "Type Specimens: Helvetica",
        category: "design",
        tagline: "Typeface poster created to feature Helvetica.",
        description: "A type specimen poster and digital material created for the font face Helvetica. The project was created during a Typography course in the <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> at Boston University. The poster is 24&#34 x 36&#34 printed black and white.",
        areas: "Design",
        banner_portrait: true,
        banner: {
            src: "../images/typespecimen/screenshot1.png",
            caption: "Final version of the type specemin as a 24\" x 36\" poster."
        },
        images: [
            {
                src: "../images/typespecimen/longform/helvetica_progress.gif",
                caption: "different iterations of the design along the way.",
                portrait: true
            },
            {
                src: "../images/typespecimen/screenshot2.png",
                caption: "The original name for the font was “Neue Haas Grotesk” before being renamed for sale in America."
            },
            {
                src: "../images/typespecimen/screenshot3.png",
                caption: "Quotes from the movie “Helvetica” also made an appearance in the poster."
            }
        ],
        timeline: "2 weeks",
        date: "November 2015",
        pretty: "Helvetica Type Specimin",
        longform: {
            summary: "A type specimen for the world’s most popular font. 24\" x 36\" poster printed in black and white.",
            motivation: "As a computer engineering student I had spent lots of time learning about topics such as logic design, computer architecture, and algorithms. Ever since I was I young as I can remember, however, I would love to play with graphic design. What started with Microsoft Paint, led to Paint.net, then to the Adobe Suite, and in a roundabout way– web development. I wanted to enrich my graphic design experience and take advantage of being part of Boston University. I decided to enroll in BU’s College of Fine Arts course: Typography I. What started as an inkling of an idea turned into one of my most fulfilling courses during my college career.",
            process: "We started with exercises to pay attention to the form of the letters, and the moments created by the negative and positive space in each work of art. Each new assignment seemed very constrained, and almost elementary, but the fundamental skills I learned from this process I now find invaluable. As one of the final projects we were tasked with creating a type specimen for a font chosen out of a hat. I ended up with the font Helvetica. In my research of the font, I found out that the typeface comes with an unexpected rich history.",
            result: "After many iterations, my final poster design features 3 color tones, examples of the Helvetica typeface being used in display and paragraphs, many different sizes of the font, and the main phrase noting that Helvetica is the “The typeface that is fucking every where.” Arriving at such a seemingly simple design took many more hours and iterations than I had expected. While the typeface is perhaps one of the most widely used, the letterforms create a powerful matrix between the positive and negative space which the design needs to cater towards. In the designs, a lot of attention had to be given to this as well as following a strict grid system. I am very pleased with the end result, and have a newfound respect for the font.",
            timeline: "3 weeks",
            images: [
                {
                    type: "medium",
                    path: "../images/typespecimen/longform/final.png",
                },
                {
                    type: "small",
                    path: "../images/typespecimen/longform/sophisticated.png",
                    caption: "Produced on Microsoft Paint XP by Me cerca 6 y.o."
                },
                {
                    type: "grid",
                    path: [
                        "../images/typespecimen/longform/elastic1.png",
                        "../images/typespecimen/longform/explode1.png",
                        "../images/typespecimen/longform/minimize.png",
                        "../images/typespecimen/longform/initials1.png",
                        "../images/typespecimen/longform/initials2.png",
                        "../images/typespecimen/longform/initials3.png",
                    ],
                    caption: "Selections of work from typography course."
                },
                {
                    type: "medium",
                    path: "../images/typespecimen/longform/helvetica_progress.gif",
                    caption: "Progress towards the final version of the poster."
                }
            ],
            order: [
                "summary",
                "images",
                "timeline",
                "areas",
                "motivation",
                "images",
                "process",
                "images",
                "result",
                "images"
            ]
        }
    },
    sharks_and_minnows: {
        title: "Sharks \u0026 Minnows",
        category: "project",
        tagline: "Play tag with friends online using web sockets. A winning hack.",
        github: "https://github.com/dqgorelick/digital-ocean",
        areas: "Development",
        description: "A winning hackathon project built at <a target='_blank' href='https://hackbeanpot.com/'>HackBeanpot 2016</a>. My first experience at using web sockets extensively as well as game development paradigms. We had a great team, and we all learned a bunch (and didn’t sleep much).",
        technologies: [
            {name: "Socket.io", link: "http://socket.io/"},
            {name: "Node and Express", link: "https://expressjs.com/"},
            {name: "HTML5 Canvas"}
        ],
        banner: {
            src: "../images/sharks/screenshot0.png",
            caption: ""
        },
        videos: [
            {
                src: "https://www.youtube.com/embed/0qiosG5gr-A?"
            }
        ],
        timeline: "36 hours",
        date: "Janurary 2016",
        pretty: "Sharks \u0026 Minnows Game"
    },
    breakerbot: {
        title: "Breakerbot",
        category: "professional",
        tagline: "Worked with ConEd to bring robot automation to the utilities industry.",
        github: "https://github.com/dqgorelick/breakerbot",
        areas: "Development / Project Management",
        collaborators: "Senior design team (see github)",
        description: "Senior Design project for Boston University <a target='_blank' href='http://www.bu.edu/eng/'>College of Engineering</a>. Created a semi-autonomous robot for <a target='_blank' href='http://www.conedison.com/'>Con Edison</a> which transports and aligns circuit breakers. Finalist in the <a target='_blank' href='http://www.systemseng.cornell.edu/intel/'>Intel Cornell Cup</a> Systems Engineering competition and won best overall project in the Computer and Electrical Engineering Department.",
        technologies: [
            {name: "Angular.js", link: "https://angularjs.org/"},
            {name: "UNIX sockets (C++/Node)"},
            {name: "Intel Edison", link: "http://www.intel.com/content/www/us/en/do-it-yourself/edison.html"}
        ],
        banner: {
            src: "../images/breakerbot/screenshot0.jpeg",
            caption: "Final version of the semi-autonomous robot."
        },
        images: [
            {
                src: "../images/breakerbot/screenshot1.jpeg",
                caption: "The robot is able to autonomously align with the mock circuit breaker cabinet"
            },
            {
                src: "../images/breakerbot/screenshot2.jpeg",
                caption: "Users are able to control the robot remotely using a video game controller and web browser."
            },
            {
                src: "../images/breakerbot/screenshot3.jpeg",
                caption: "The robot uses video processing and a state machine to autonomously align with the breaker cabinet."
            },
            {
                src: "../images/breakerbot/software.png",
                caption: "Software architecture created for the interaction between the C++ program for the hardware, and interface with the web stack."
            },
            {
                src: "../images/breakerbot/software2.png",
                caption: "Final C++ control program layout using OOP with a different module for each hardware component."
            },
            {
                src: "../images/breakerbot/screenshot4.jpeg",
                caption: "Our team consisted of four mechanical engineers, two computer engineers, and one electrical engineer."
            }
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/yyhNmTSDY2Q?start=20&autoplay=1",
                caption: "Video demonstrating the different components and autonomous alignment of the robot."
            }
        ],
        timeline: "8 months",
        budget: "$2000",
        date: "May 2016",
        link: "https://www.youtube.com/embed/yyhNmTSDY2Q?autoplay=1",
        pretty: "Breakerbot Project",
    },
    pokemon: {
        title: "Twitch Plays Pokemon Go!",
        category: "project",
        tagline: "The best of Twitch Plays and Pokemon Go brought together.",
        link: "https://www.twitch.tv/twitchpokemongo",
        collaborators: "hackNY 2016 fellows",
        description: "Brought the phenomena of <a target='_blank' href='https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon'>Twitch plays</a> and <a target='_blank' href='http://www.pokemongo.com/'>Pokemon Go</a> together for a wonderful crowdsourced Pokemon experience. This is made possible by location spoofing and simulating touch events on the iPhone. Stream viewers are able to vote for the player's movement by typing the commands into the chat. Created at <a target='_blank' href='hackny.org'>hackNY</a>.<br><br>The brief 3-day run had over 180,000 participants, and over 2,800 followers on Twitch. Also, we garnered some <a target='_blank' href='http://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>internet fame </a>.",
        technologies: [
            {name: "Cycript", link: "http://www.cycript.org/"},
            {name: "Flask", link: "http://flask.pocoo.org/"}
        ],
        areas: "Development / Design",
        banner: {
            src: "../images/pokemon/screenshot3.png",
            caption: "Viewers are able to enter commands into the Twitch chat to control the character."
        },
        images: [
            {
                src: "../images/pokemon/screenshot0.png",
                caption: "The commands that received the most votes is executed. Viewers are able to see the GPS location of the character on the mini-map."
            },
            {
                src: "../images/pokemon/screenshot1.png",
                caption: "The README.md for the commands displayed on the screen."
            },
            {
                src: "../images/pokemon/screenshot2.png",
                caption: "A grid overlay on the screen allows viewers to tap on different areas on the screen."
            },
        ],
        timeline: "3 days",
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
        technologies: [{name: "Middleman", link: "https://middlemanapp.com/"}],
        iframe: "http://nickebnerfitness.com/",
        banner: {
            src: "../images/neif/screenshot1.png",
            caption: "Screenshot of the final site created for Nick Ebner."
        },
        timeline: "2 months",
        date: "December 2015",
        pretty: "Nick Ebner Site",
    },
    processing: {
        title: "Interactive Design",
        category: "design",
        tagline: "Various interactive design projects created with processing language.",
        areas: "Development / Design",
        github: "https://github.com/dqgorelick/processing",
        description: "Collection of projects created during the Boston University <a target='_blank' href='https://www.bu.edu/cfa/'>College of Fine Arts</a> course Interactive Design. All of the projects are created using the <a target='_blank' href='http://processingjs.org/'>Processing language</a>.",
        technologies: [{name: "Processing language", link: "http://processingjs.org/"}],
        banner: {
            src: "../images/processing/screenshot3.jpg",
            caption: "The design responds to music and user’s mouse input"
        },
        images: [
            {
                src: "../images/processing/tesseract.gif",
                caption: "My first project with processing was to create the revolving tesseract.",
                portrait: true
            },
            {
                src: "../images/processing/screenshot5.png",
                caption: "Initial sketches planning the behavior of the tesseract."
            },
        ],
        videos: [
            {
                src: "https://www.youtube.com/embed/MKrYlIsjqiI?autoplay=1",
                caption: "“Circles” uses sinusoids to generate patterns which respond to mouse gestures."
            },
            {
                src: "https://www.youtube.com/embed/VOHYuH8qYiU?",
                caption: "The design responding to Jack Garratt’s - “The Love You’re Given”."

            },
            {
                src: "https://www.youtube.com/embed/hCtMevYWCf0?",
                caption: "Uses additive colors and sound input to create a visualization of the music."
            }
        ],
        timeline: "4 months",
        date: "May 2016",
        pretty: "Processing Projects",
    },
    mbta: {
        title: "MBTA Performance Analysis",
        category: "project",
        tagline: "Teamed up with the MBTA to improve performance and delay alerts.",
        areas: "Development / Design",
        collaborators: "MBTA, Ben Snyder, EJ Fitzpatrick, and Eddy Luo",
        link: "http://ec2-52-34-3-119.us-west-2.compute.amazonaws.com/",
        github: "https://github.com/BU-NU-CLOUD-SP16/MBTA-Alerts-and-Performance-Anlaysis",
        description: "Worked with the <a target='_blank' href='http://www.mbta.com/'>Massachusetts Bay Transportation Authority</a> to better analyze and communicate the effectiveness of performance alerts. Developed full-stack web application to measure real-time performance against statistical models created from aggregated historical data.<br><br>Check out the current status of the MBTA <a target='_blank' href='http://ec2-52-34-3-119.us-west-2.compute.amazonaws.com/'>&#10149;</a>",
        technologies: [{name: "Python/Node"}, {name: "D3.js", link: "http://d3js.org"}, {name: "Sqlite3"}, {name: "R (for data analysis)"}],
        timeline: "3 months",
        date: "May 2016",
        banner: {
            src: "../images/mbta/screenshot1.png",
            caption: "Web application offers real-time analysis and predictions for the MBTA subway lines."
        },
        images: [
            {
                src:"../images/mbta/dwells.png",
                caption: "From analysing two months of historical data, we found that the ma wait time is most influenced by the variation in dwell times (time the train stays in the station)."
            },
            {
                src:"../images/mbta/dwells2.png",
                caption: "Dwell times at each station are shown during peak rush hour. The size is relative to the amount of time."
            },
            {
                src:"../images/mbta/screenshot2.png",
                caption: "A live view of each train is available for each line."
            },
            {
                src:"../images/mbta/screenshot3.png",
                caption: "D3.js is used to show the status of key stations for the control center for each line."
            },
            {
                src:"../images/mbta/screenshot4.png",
                caption: "A breakdown of each station can be viewed when clicking on the station node."
            }
        ],
        pretty: "MBTA Visualization"
    }
}
