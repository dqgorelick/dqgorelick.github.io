angular.module('AssetService', []).factory("assets", ['$http', '$q', function($http, $q){
	var settings = {
		article: 2,
		duration: 1000,
		fadeTime: 250,
		fadeOut: true,
		fadeIn: true
	};

	var cache = {};
	var lastUrl = '';

  	function getMetadata(article) {
   		return [
			{ "name": "Headline",
			"text": article.result.headline},
			{ "name": "Summary",
			"text": article.result.summary},
			{ "name": "Section",
			"text": article.result.section.display_name},
			{ "name": "Author",
			"text": article.result.authors[0].title_case_name},
			{ "name": "Byline",
			"text": article.result.byline},
			{ "name": "Date",
			"text": cleanDate(article.result.publication_iso_date)},
			{ "name": "Kicker",
			"text": article.result.kicker},
			{ "name": "Link",
			"text": article.result.short_url ? article.result.short_url : article.result.url}
    	];
  	}

  	function cleanDate(ugly){
  		var monthsLower = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  		var monthsUpper = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  		//	ugly = "2015-07-01T00:00:00.000.EDT"
  		ugly = ugly.split("-");
  		//	ugly = ["2015", "07", "01T00:00:00.000.EDT"]
  		var clean = monthsLower[parseInt(ugly[1]) - 1] + " " + parseInt(ugly[2]) + ", " + ugly[0];
  		// 	PAPI date is 1 day ahead of date on "A Most Dangerous Game" story
  		// 	clean = JULY 01, 2015
  		return clean;
  	}

  	function getImages(section) {
	    var images = [];
	    _.each(section, function(asset, id) {
			if (asset.image && asset.display_size !== "SMALL"){
				images.push({
					type: 'single',
					url: asset.image.image_crops.videoSixteenByNine600.url || asset.image.image_crops.articleLarge.url,
					credit: asset.image.credit,
					caption: asset.image.caption.full
				});
			}

			if (asset.imageslideshow) {
				asset.imageslideshow.slides.forEach(function(slide){
					  images.push({
						    type: 'slide',
						    url: slide.image_crops.videoSixteenByNine600.url || slide.image_crops.articleLarge.url,
						    credit: slide.credit,
						    caption: removePTags(decodeHtml(slide.caption.full))
					  });
				});
			}
		});
    	return images;
 	}
	function decodeHtml(html) {
	    var txt = document.createElement("textarea");
	    txt.innerHTML = html;
	    return txt.value;
	}

	function removePTags(html) {
	    return html.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
	}

	function getQuotes(body) {
	    var parsedNoP = removePTags(body);
	    var sentences = parsedNoP.split(". ");

	    var linesStartingWithQuotes = [];
	    for (var i = 0; i < sentences.length; i++) {
	        var line = sentences[i];

	        if (line.charAt(0) == '“') {
	            var substring = line.substring(1, line.indexOf("”"));
	            if (substring.length != 1) {
	                if (substring.charAt(substring.length - 1) != ',') {
	                    linesStartingWithQuotes.push(substring);
	                }
	            }
	        }
	    }
	    return linesStartingWithQuotes;
	}

	var stubbed = true;
	var lastNumber;
	var getData = function(article, number) {
		if (number !== undefined) {
			lastNumber = number;
		}
		// if (number === undefined) return;
		number = lastNumber;
	    var url = "./assets/articles/article" + number + ".json";
	    return $http({
	        method: 'GET',
	        url: url
	    }).then(function(response) {
	        var quotes = getQuotes(response.data.result.article.body);
	        var topImages = response.data.result.regions.Top.modules[0].modules;
	        var embeddedImages = response.data.result.regions.Embedded.modules[0].modules;
	        var images = getImages(topImages);
	        images = images.concat(getImages(embeddedImages));

	        var metadata = getMetadata(response.data);
	        var result = {
	            quotes: quotes,
	            images: images,
	            metadata: metadata
	        };
	        if (article) {
	            localStorage.setItem(response.data.result.headline, url)
	        }
	        return result;
	    });
	}
	return {
	    getData: getData
	};

}]);
