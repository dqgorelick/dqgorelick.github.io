// from article: << http://www.nytimes.com/2015/06/22/us/california-golf-trip-lands-obama-in-a-water-use-debate.html?ref=us&_r=0 >>
var headline = "California Golf Trip Lands \nObama in a Water-Use Debate";
var photo = "http://static01.nyt.com/images/2015/06/22/us/21OBAMA/21OBAMA-master675-v3.jpg";
var photo_tagline = "President Obama at the airport in Palm Springs, Calif., on Saturday, before going to the Sunnylands estate in Rancho Mirage. Credit Zach Gibson/The New York Times"
var date = "JUNE 21, 2015"
var author = "By GARDINER HARRIS"
var section = "POLITICS" 
var kicker = "WHITE HOUSE MEMO"

// create black background
var rect = new Rectangle({
	point: [0,0],
	size: view.size
});

var path = new Path.Rectangle(rect)
path.fillColor = "#000000";

//	winky face
var teaser = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 50,
	fillColor: '#FFFFFF',
	content: "Click here ;)",
	fontFamily: "Comic Sans"
})

//	obama image
var image = new Raster("photo");
var ratio = (view.size._width)/image.width;
image.position = new Point(image.width*ratio/2, image.height*ratio/2)
image.scale(ratio);

//	headline
var text1 = new PointText({
	point: new Point(10, image.height*ratio + 50),
	justification: 'left',
	fontSize: 35,
	fillColor: '#FFFFFF',
	content: headline,
	fontFamily: "Times New Roman"
});

//	author and date
var text2 = new PointText({
	point: new Point(10,460),
	justification: 'left',
	fontSize: 20,
	fillColor: '#FFFFFF',
	content: author + "\n" + date,
	fontFamily: "Times New Roman"
});

//	clicking interface
var mouse = false;
var count = 0;
function onMouseDown(event){
	mouse = true;
}

function onMouseUp(event){
	mouse = false;
	count = 0;
}

//	onFrame refreshes 60 times a second
//	You can use the event "event.count" as a counter, 
//	or manually make a counter
function onFrame(event){
	if(mouse){
		count += 1
		image.opacity = (count/90)
		text1.opacity = (count/120)
		text2.opacity = (count/150)
		teaser.opacity = 1 - (count/90)
	} else {
		teaser.opacity = 1;
		image.opacity = 0;
		text1.opacity = 0;
		text2.opacity = 0;
	}
}

