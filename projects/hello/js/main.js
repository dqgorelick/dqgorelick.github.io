$(document).ready(function(){
	setTime();
	setInterval(setTime,1000);
	//change time for the main div 
	//change the text in the other div
});

function setTime(){
	var d = new Date;
	var h = d.getHours();
	var m = d.getMinutes();
	if (m < 10){
		m = "0" + m;
	}
	var s = d.getSeconds();
	var time = h%12 + ":" + m;

	$(".wrapper h1").html(time);

	if (h > 4 && h < 12) {
		$(".greeting").html("morning")
	} else if (h >= 12 && h < 18) {
		$(".greeting").html("afternoon")
	} else {
		$(".greeting").html("evening")
	}
}

function submit(){
	$("input").keypress(function (e){

	})
}