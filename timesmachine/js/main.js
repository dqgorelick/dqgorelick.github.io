var currentPage = 1;
var date = new Date();
var year = date.getFullYear();
var pageFlag = false;
var scrollFlag = false;

$(document).ready(function(){
	//load next page
	$(document).on("scroll",scrolling);
	changeDate();

	//call one year back function
	var oneyear = $('button[name=oneyear]');
	oneyear.click(function(){
		$('.loading').css("display",'block');
		year -= 1;
		flash(year, 1);
		pageFlag = true;
	})

	//go back to current year
	var thisyear = $('button[name=thisyear]');
	thisyear.click(function(){
		$('.loading').css("display",'block');
		year = date.getFullYear();
		flash(year, 1);
		pageFlag = true;
	})

	//random mode
	var lucky = $('button[name=lucky]');
	lucky.click(function(){
		$('.loading').css("display",'block');
		var random = Math.floor(Math.random()*164);
		year = (date.getFullYear() - random);
		flash(year, 1);
		pageFlag = true;
	})

});//end of ready

function changeDate(){
	var date = new Date();
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var display = DayOfWeek(year) + ", " + months[date.getMonth()] +' '+date.getDate();
	var dateHTML = '<h3>' + display.toUpperCase() + ", " + "<span class='current'>" + year + '<span><h3>';
	$(".date").html(dateHTML);
}

function scrolling(event){
	var scroll = $(document).scrollTop();
	var bodyHeight = $(window).height();
	var docHeight = $(document).height();
	var bottom = ((scroll + bodyHeight) - docHeight);
	if(bottom != 0){
		scrollFlag = true;
	}
	if(bottom === 0 && pageFlag && scrollFlag){
		scrollFlag = false;
		$('.loading').css("display",'block');
		currentPage++;
		flash(year, currentPage);
	}
}

function flash(back, page){
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
	//api call
	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&sort=newest&api-key=18db54dfa62f1e62a054c842b2f3da90:6:66888243";
	url += '&end_date='+endDate;

	if(page > 1){
		url += '&page=' + page;
	}

	$.getJSON(url,function(data){
		var HTMLresponse = '';
		for(var i = 0; i < data.response.docs.length; i++){
			HTMLloop = '';
			if(!(page === 1 && i === 0)){
				HTMLloop += "<hr>";
			}
			HTMLloop += '<h2>' + data.response.docs[i].headline.main + '</h2>';
			if (data.response.docs[i].multimedia.length != 0){
				HTMLloop += '<img class="images" src="' + "http://static01.nyt.com/" + data.response.docs[i].multimedia[0].url +'"/>';
			}
			HTMLloop += '<h4>Published: ' + data.response.docs[i].pub_date + '<br>';
			HTMLloop += '<a href="' + data.response.docs[i].web_url + '">read more</a></h4>';
			HTMLloop += '<h3>' + data.response.docs[i].snippet + '</h3>';
			HTMLloop += '<br>';
			if(data.response.docs[i].snippet === null){
				HTMLloop = '';
			}
			HTMLresponse += HTMLloop;
		};

		if(page === 1){
			$('.article').html(HTMLresponse);
		} else {
			$('.article').append(HTMLresponse);
			currentPage++;
		}
		changeDate();
		$('.current').html(back);
		$('.loading').css("display",'none');
	})
}

function DayOfWeek(){
	var d = new Date;
	var Month = d.getMonth()+1;
	var Day = d.getDate();
	var Year = year;
	var DOW;

	var MDS= (Year-1)*365  + parseInt((Year-1)/4) + (Month-1)*30 + (Day - 11)
	var COR = parseInt((Year-1)/100) - 16
	if (COR>0) {MDS = MDS-COR}
	var CO = parseInt((Year-1)/400) - 4
	if (CO>0) {MDS = MDS+CO}

	var X=0;
	for (var i = 1; i<=(Month - 1); i++){
		X=X+1
		if (X==1) {MDS= MDS+1}
		if (X==3) {MDS= MDS+1}
		if (X==5) {MDS= MDS+1}
		if (X==7) {MDS= MDS+1}
		if (X==8) {MDS= MDS+1}
		if (X==10) {MDS= MDS+1}
		if (X==12) {MDS= MDS+1}
		if (X==2){
			if (Year % 4  == 0){
				if(Year>1752){
					if (Year % 100 == 0){
					MDS=MDS-2
					if (Year%400==0) {MDS=MDS+1}
					}
					else{MDS=MDS-1}
				}
				else{MDS=MDS-1}
			}
			else{MDS=MDS-2}
		}
	}
	if (MDS % 7 == 0) {DOW = "Saturday"}
	if (MDS % 7 == 1) {DOW = "Sunday"}
	if (MDS % 7 == 2) {DOW = "Monday"}
	if (MDS % 7 == 3) {DOW = "Tuesday"}
	if (MDS % 7 == 4) {DOW = "Wednesday"}
	if (MDS % 7 == 5) {DOW = "Thursday"}
	if (MDS % 7 == 6) {DOW = "Friday"}
	return DOW;
}
