var raster = new Raster('stars');
raster.position = view.center;

raster.visible = false;
var gridSize = 10;
var spacing = 1.1;

raster.on('load', function(){
	raster.size = new Size(40, 25);

	for (var y = 0; y < raster.height; y++) { 
		for (var x = 0; x < raster.width; x++) {
			var color = raster.getPixel(x,y);
			var path = new Path.Circle({
				center: new Point(x, y) * gridSize,
				radius: gridSize / 2 / spacing,
				fillColor: 'black'
			})
			path.fillColor = color;
			// path.scale(1 - color.gray);
		}
	}
	project.activeLayer.position = view.center;
})

var text = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 30,
	fillColor:'red'
});

var destination = Point.random() * view.size;

function onFrame(event) {
	// if (event.count%60 === 0) {
	// 	console.log("time = " + event.time);
	// 	console.log("count = " + event.count);
	// 	console.log("delta = " + event.delta);
	// }
	var vector = destination - text.position;
	text.position += vector/30;
	
	if(event.count % 2 === 0 ){
		text.content = Math.round(vector.length);
	}

	if (vector.length < 1) {
		destination = Point.random() * view.size;
	}

}

