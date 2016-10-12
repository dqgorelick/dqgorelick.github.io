angular.module('SlidesService', []).factory('SlidesService', [function() {

    var slides = [];
    var time = {millis: 10, display: '0 seconds'};
    var selected = {slide: null};

    var getTime = function() {
        var millis = _.reduce(slides, function(memo, slide) {
            return memo + slide.duration * 1000 / 60;
        }, 0);

        var display = millis / 1000 + ' seconds';
        time.millis = millis;
        time.display = display;
        return time;
    };

    var removeSlide = function(index) {
        if (slides[index] == selected.slide) {
            selected.slide = null;
        }

        slides.splice(index, 1);
        getTime();
    };

    var addSlide = function(slide) {
        slides.push(slide);
        getTime();
    }

    var overwriteSelected = function(slide) {
        selected.slide.thumb = slide.thumb;
        selected.slide.json = slide.json;
    };

    var toggleSelected = function(slide) {
        selected.slide = (selected.slide == slide) ? null : slide;
    };

    return {
        slides: slides,
        removeSlide: removeSlide,
        addSlide : addSlide,
        getTime: getTime,
        time: time,
        addSlide: addSlide,
        overwriteSelected: overwriteSelected,
        selected: selected,
        toggleSelected: toggleSelected,
    };

}]);
