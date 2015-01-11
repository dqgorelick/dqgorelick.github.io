//clickable menu items
$(document).ready(function() {
	// $(document).on("scroll", onScroll); 

	$(document).ready(function(){
	  $('.img-zoom').hover(function() {
	      $(this).addClass('transition');
	
	  }, function() {
	      $(this).removeClass('transition');
	  });
	});
	$(document).on("scroll",rotateClock);
	$(document).on("scroll", fillBar); 
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");        
		$('a').each(function () {
            $(this).removeClass('active');
            })
   		$(this).addClass('active');
		      
        var target = this.hash,	menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		        }, 500, function () {
		        window.location.hash = target;
		            $(document).on("scroll", fillBar);
		            $(document).on("scroll",rotateClock);
	        });
	    });
});

// Google Analytics 
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-50073047-1', 'globalappathon.org');
	  ga('send', 'pageview');

	function rotateClock(event){
		var scrollPos = $(document).scrollTop();
		var hourAngle = (scrollPos/6)%360;
		var minuteAngle = (scrollPos)%360;
		$(".hour").css({  
            '-webkit-transform': 'rotate(' + hourAngle + 'deg)',  //Safari 3.1+, Chrome  
            '-moz-transform': 'rotate(' + hourAngle + 'deg)',     //Firefox 3.5-15  
            '-ms-transform': 'rotate(' + hourAngle + 'deg)',      //IE9+  
            '-o-transform': 'rotate(' + hourAngle + 'deg)',       //Opera 10.5-12.00  
            'transform': 'rotate(' + hourAngle + 'deg)',          //Firefox 16+, Opera 12.50+   
        })  
		$(".minute").css({  
            '-webkit-transform': 'rotate(' + minuteAngle + 'deg)',  //Safari 3.1+, Chrome  
            '-moz-transform': 'rotate(' + minuteAngle + 'deg)',     //Firefox 3.5-15  
            '-ms-transform': 'rotate(' + minuteAngle + 'deg)',      //IE9+  
            '-o-transform': 'rotate(' + minuteAngle + 'deg)',       //Opera 10.5-12.00  
            'transform': 'rotate(' + minuteAngle + 'deg)',          //Firefox 16+, Opera 12.50+   
        })  
	}
	function fillBar(event){
	  	var body = document.body, html = document.documentElement;
	  	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	  	var scrollPos = $(document).scrollTop();
	  	var windowHeight = $( window ).height();
	  	var newHeight = 175+(((scrollPos)/(height - windowHeight))*300)
	  	$("#fillbar").css("height",newHeight);
	  	$("#GAI-logo").css("top", windowHeight-newHeight*3);
	  	$('#nav a').each(function () {
	  		var currLink = $(this);
	  		var refElement = $(currLink.attr("href"));
	  		if(refElement.position().top - $(header).height() <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
	  			$('#nav li a').removeClass("active");
	  			currLink.addClass("active");
	  		}
	  		else{
	  			currLink.removeClass("active");
	  		}
	  	});
	}










