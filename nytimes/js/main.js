$(document).ready(function(){
	var date = new Date(),
	    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var display = months[date.getMonth()]+' '+date.getDate();
	console.log(display);
	//year to watch
	year = date.getFullYear();
	//display date
	var dateHTML = '<h3>' + display + ", " + "<span class='current'>" + year + '<span><h3>';
	$(".date").html(dateHTML);

	//call one year back function
	var oneyear = $('button[name=oneyear]');
	oneyear.click(function(){
		console.log('clicked oneyear');
		$('.article').html('<h2>Loading content...</h2>');
		year -= 1;
		console.log(year);
		flash(year);
	})

	//go back to current year
	var thisyear = $('button[name=thisyear]');
	thisyear.click(function(){
		console.log('clicked oneyear');
		$('.article').html('<h2>Loading content...</h2>');
		year = date.getFullYear();
		console.log(year);
		flash(year);
	})

	//random mode
	var lucky = $('button[name=lucky]');
	lucky.click(function(){
		console.log('clicked lucky');
		$('.article').html('<h2>Loading content...</h2>');
		var random = Math.floor(Math.random()*164);
		year = (date.getFullYear() - random);
		flash(year);
	})
});//end of ready

function flash(back){	
	var date = new Date;
	var month = date.getMonth()+1;
	if (month < 10){
		month = "0"+month;
	}
	var day = date.getDate();
	if (day < 10){
		day = "0"+day;
	}
	beginDate = (back)+month+(day);
	endDate = (back)+month+(day);

	urlDate = back + month + day;
	console.log(urlDate);
	//api call
	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&sort=newest&api-key=18db54dfa62f1e62a054c842b2f3da90:6:66888243";
	url += '&end_date='+endDate;
	$.getJSON(url,function(data){
		console.log(data);
		var HTMLresponse = '';
		for(var i = 0; i < data.response.docs.length; i++){
			HTMLloop = '';
			HTMLloop += '<h2>' + data.response.docs[i].headline.main + '</h2>';
			if (data.response.docs[i].multimedia.length != 0){
				HTMLloop += '<img class="images" src="' + "http://static01.nyt.com/" + data.response.docs[i].multimedia[0].url +'"/>';
			}
			HTMLloop += '<h4>Published: ' + data.response.docs[i].pub_date + '<br>';
			HTMLloop += '<a href="' + data.response.docs[i].web_url + '">read more</a></h4>';
			HTMLloop += '<h3>' + data.response.docs[i].snippet + '</h3>';
			if (i != 9){
				HTMLloop += "<hr>";
			}
			HTMLloop += '<br>';
			if(data.response.docs[i].snippet === null){
				console.log(data.response.docs[i].headline.main + "deleted")
				HTMLloop = '';
			}
			HTMLresponse += HTMLloop;
		};
		$('.article').html(HTMLresponse);
		$('.current').html(back);
	})
}