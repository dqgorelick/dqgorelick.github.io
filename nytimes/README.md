![](./assets/photos/final.gif)

## New York Times - Times Trailer
A tool developed for NYT which allows users to create videos from NYTimes articles.

## Startup

- install node
- navigate to main directory
- run `npm install` to install dependencies
- run `node server.js` to start up web server
- navigate to localhost:8080 in the browser

## Technologies

- HTML5 `canvas` for video creation using the [fabric.js](https://github.com/kangax/fabric.js/) library
- [whammy.js](https://github.com/antimatter15/whammy) for rendering video into `.webm` on the front-end
- [ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for converting `.webm` into `.mov` & `.gif` using data streams

## Options

Change default slide settings in `ConfigService.js`
```
var settings = {
    duration: 2500, 	// slide duration
    fadeOut: 0,			// fade out duration (0 = no fade)
    fadeIn: 0,			// fade in duration (0 = no fade)
    kenBurns: 0,		// panning/Ken Burns effect
};
```
Other settings can be changed via the UI

## Contributors

Developers:
- [Sam Kortchmar](https://github.com/skortchmark9)
- [Dan Gorelick](https://github.com/dqgorelick)
- [Jordan Falcon](https://github.com/j-falcon122)
- [Sudhanshu Nath Mishra](https://github.com/sudhanshunathmishra)

Marketing Extraordinaires
- Alex Sternlicht
- Anisha Khanna
- Ashley Leung

![](./assets/photos/team.JPG)
