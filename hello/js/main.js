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
	var s = d.getSeconds();
	var time = h%12 + ":" + m;
	$(".wrapper h1").html(time);
	// switch(h){
	// 	case (5 <= h < 10){

	// 	}
	// }
}

function submit(){
	$("input").keypress(function (e){
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)){
			console.log("hello");
			return false;
		} else {
			return true;
			console.log("byebye");
		}

	})
}