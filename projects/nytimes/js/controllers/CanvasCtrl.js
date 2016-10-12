angular.module('Canvas', ['AssetService', 'ConfigService', 'SlidesService', 'cfp.hotkeys', 'UploadService']).controller('CanvasCtrl', function($scope, Config, assets, SlidesService, hotkeys, uploader) {

    $scope.canvas = null;
    $scope.canvas_width = 600;
    $scope.canvas_height = 338;
    $scope.video = null;
    $scope.showCanvas = true;
    $scope.playing = false;
    $scope.renderedVideo = null;
    $scope.selected = SlidesService.selected;
    $scope.isRecording = false;

    $scope.resetVideo = function() {
        $scope.video = new Whammy.Video(15);
    }

    $scope.initialize = function() {
        $scope.canvas = new fabric.Canvas('canvas', {
            backgroundColor: '#000000'
        });
        $scope.resetVideo();
        $scope.undo = [$scope.getJSON()];
        $scope.$on('assets:ready', _.once($scope.createSlides));
    };

    $scope.qUndo = function(){
        var saved = $scope.getJSON();
        if (saved !== $scope.undo[$scope.undo.length - 1]) {
            $scope.undo.push(saved);
        }
    };

    $scope.popUndo = function(){
        $scope.undo.pop();
        $scope.canvas.loadFromJSON($scope.undo[$scope.undo.length-1], $scope.canvas.renderAll.bind($scope.canvas));
        if ($scope.undo.length === 0) {
            $scope.canvas.clear();
            $scope.qUndo();
        }
    };

    hotkeys.add({
        combo: 'command+z',
        description: 'Undo the last action.',
        callback: $scope.popUndo
    });

    hotkeys.add({
        combo: 'space',
        description: 'Play / Pause',
        callback: function(event) {
            if ($scope.playing) {
                $scope.stop();
            } else {
                $scope.playSlides();
            }
            event.preventDefault();
        }
    });

    hotkeys.add({
        combo: 'backspace',
        description: 'Delete the selected object',
        callback: function(event) {
            event.preventDefault();
            $scope.deleteSelected();
        }
    });

    hotkeys.add({
        combo: 'shift+backspace',
        description: 'Clear the canvas',
        callback: function(event) {
            event.preventDefault();
            $scope.clearCanvas();
        }
    });

    $scope.deleteSelected = function() {
        var obj = $scope.canvas.getActiveObject();
        if (obj) {
            obj.remove();
            $scope.qUndo();
        }
    }

    $scope.chooseImage = function(id, ignoreUndo) {
        $scope.clearCanvas();
        var img = new fabric.Image(id);
        var ratioX = $scope.canvas.width / img.width;
        var ratioY = $scope.canvas.height / img.height;
        if (ratioX > ratioY){
            img.width = $scope.canvas.width;
            img.height = img.height * ratioX;
        } else {
            img.width = img.width * ratioY;
            img.height = $scope.canvas.height;
        }
        $scope.canvas.add(img);
        if(!ignoreUndo) $scope.qUndo();
        return img;
    };

    $scope.chooseText = function(string, options, rect, ignoreUndo) {
        options = _.defaults(options || {}, {
            content: string,
            color: '#ffffff',
            font: 'NYTCheltenhamExtBd-Regular',
            fontStyle: 'italic',
            size: 40,
            justify: 'center',
            textAlign: 'center',
            compensateHeightOnWrap: true
        });
        rect = rect || [0, $scope.canvas_height * 2 / 5, $scope.canvas_width, $scope.canvas_height * 3 / 5];
        // x y w h
        var text = $scope.createText(rect, options);
        $scope.canvas.add(text);

        if (!ignoreUndo) $scope.qUndo();
        return text;
    }

    $scope.clearCanvas = function(destroyOnly) {
        if (destroyOnly) {
            $scope.canvas._objects.length = 0;
        } else {
            $scope.canvas.clear(destroyOnly);
        }
    };

    $scope.createOverlay = function(rect, options) {
        var rectangle = new fabric.Rect({
            left: rect ? rect[0] : options.left,
            top: rect ? rect[1]: options.top ,
            width: rect ? rect[2] : options.width,
            height: rect ? rect[3] : options.height,
            fill: options.overlayColor,
            opacity: options.opacity || 1
        });
        return rectangle;
    };

    $scope.createText = function(rect, options) {
        var text = new fabric.Text(options.content, {
            left: rect[0],
            top: rect[1],
            opacity: 1,
            fontFamily: options.font,
            fontSize: options.size,
            fontStyle: options.fontStyle,
            textAlign: options.textAlign,
            originY:'top',
            originX:'left',
            fill: options.color
        });

        if (rect[2] && rect[3]) {
            var wrapOptions = {
                maxW: rect[2],
                maxH: rect[3],
                justify: options.justify,
                compensateHeightOnWrap: options.compensateHeightOnWrap
            };
            return wrapCanvasText(text, $scope.canvas, wrapOptions);
        }
        return text;
    };

    $scope.moveToBottom = function(text) {
        var rect = text.getBoundingRect();
        var pos = Math.round($scope.canvas_height - rect.height) - 10;
        text.top = pos;
        $scope.canvas.renderAll();
    }


    /***************************
    **        Video           **
    ***************************/

    $scope.finalizeVideo = function() {
        var output = $scope.video.compile();
        $scope.renderedVideo = output;
        var link = (window.URL || window.webkitURL).createObjectURL(output);
        if ($scope.player) {
            $scope.player.destroy();
            $('#video-container').append("<div id='nyt-player'></div>");
        }
        $scope.player = VHS.player({
            container: 'nyt-player',
            analytics: false,
            id: 123567890,
            ads: false,
            name: 'nyt-trailer',
            src: link,
            api: false,
            autoplay: true,
            mode: "html5"
        });

        $scope.resetVideo();
        $scope.showCanvas = false;
        $scope.$apply();
    };

    /***************************
    **   Loading Slides       **
    ***************************/

    $scope.getJSON = function(){
        var saved = $scope.canvas.toJSON();
        saved = JSON.stringify(saved);
        return saved;
    };

    $scope.restoreSlide = function(){
        $scope.canvas.clear();
        if ($scope.selected.slide) {
            //CLEANUP - this addbutton thing is not really angular
            $scope.addButton = "Override";
            $scope.loadSlide($scope.selected.slide, function() {
                $scope.canvas.renderAll();
                $scope.qUndo();
            });
        } else {
            $scope.addButton = "Add Slide";
        }
    };

    $scope.loadSlide = function(slide, callback) {
        if (!slide) {
            return;
        }

        if (_.isNumber(slide)) {
            slide = SlidesService.slides[slide];
        }
        $scope.canvas.loadFromJSONWithoutClearing(slide.json, function() {
            callback ? callback() : $scope.canvas.renderAll();
        });
    };

    //CLEANUP: This is an ugly patch - save/load JSON somehow decenters text that
    //should be centered - maybe a fabric bug / something to do with the wrapText function.
    $scope.centerText = function() {
        objects = $scope.canvas.getObjects();
        texts = _.each(objects, function(obj) {
            if (obj.type === 'text' && obj.textAlign === 'center') {
                obj.centerH();
            }
        });
    }

    /***************************                                ****
    **  Creating Slides       ******************************************
    * TODO: put these into a new controller for  slide defaults.   *******
    *                         ******************************************
    ****************************                                ****/

    $scope.createStarterSlide = function() {
        $scope.chooseImage("starter", true);
        var starter = Config.defaultSlide($scope.getJSON());
        starter.duration = 1000 / 1000 * 60;
        starter.fadeOut = 0;
        starter.kenBurns = 0;
        $scope.canvas.clear();
        return starter;
    }

    $scope.createHeadlineSlide = function(headline, byline) {
        var headlineStyle = {
            fontStyle: 'italic',
            size: 40
        };
        var headlinePosition = [0, $scope.canvas_height * 2 / 5, $scope.canvas_width, $scope.canvas_height * 3 / 5];

        var bylineStyle = {
            fontStyle: 'normal',
            size: 12,
            justify: 'left',
            textAlign: 'left',
        };
        var bylinePosition = [20, $scope.canvas_height * 9 / 10, $scope.canvas_width, $scope.canvas_height * 1 / 10];

        $scope.chooseText(headline, headlineStyle, headlinePosition, true);
        $scope.chooseText(byline, bylineStyle, bylinePosition, true);
        var headliner = Config.defaultSlide($scope.getJSON());
        headliner.fadeIn = 1000 / 1000 * 60;
        headliner.kenBurns = 0;
        $scope.clearCanvas();
        return headliner;
    }

    $scope.generateImageSlide = function(image, caption, effects) {
        $scope.chooseImage(image, true);

        if (caption) {
            var summaryStyle = {
                fontStyle: 'normal',
                size: 21
            };
            var summaryPosition = [0, $scope.canvas_height * .75, $scope.canvas_width, $scope.canvas_height * .25];
            var summaryOverlay = new fabric.Rect({
                left: 0,
                top: $scope.canvas_height * 7 / 10,
                fill: "#000000",
                opacity: 0.5,
                width: $scope.canvas_width,
                height: $scope.canvas_height * 3 / 10
            });

            $scope.canvas.add(summaryOverlay);
            var text = $scope.chooseText(caption, summaryStyle, summaryPosition, true);
            $scope.moveToBottom(text);
        }

        var imageSlide = Config.defaultSlide($scope.getJSON());
        imageSlide.kenBurns = effects.kenBurns;
        $scope.clearCanvas();
        return imageSlide;
    }

    $scope.generateEndingSlide = function() {
        $scope.chooseImage("ender", true);
        var ender = Config.defaultSlide($scope.getJSON());
        ender.kenBurns = 0;
        ender.duration = 1500  / 1000 * 60;
        $scope.clearCanvas();
        return ender;
    }

    $scope.createSlides = function() {
        assets.getData().then(function(loaded) {

            SlidesService.addSlide($scope.createStarterSlide());
            var headline = _.findWhere(loaded.metadata, {name: 'Headline'}).text;
            var byline = _.findWhere(loaded.metadata, {name: 'Byline'}).text;
            SlidesService.addSlide($scope.createHeadlineSlide(headline, byline));


            var summary = _.findWhere(loaded.metadata, {name: 'Summary'}).text;

            var MAX_NUMBER_OF_IMAGES = 5;
            var numImages = Math.min(loaded.images.length, MAX_NUMBER_OF_IMAGES);

            for (var it = 0; it < numImages; it++) {
                var effects = {kenBurns: it % 6+1}
                var caption = (it == 0) ? summary : null;
                var slide = $scope.generateImageSlide('image' + it, caption, effects);
                SlidesService.addSlide(slide);
            }

            SlidesService.addSlide($scope.generateEndingSlide());
        });
    };

    $scope.addToTimeline = function() {
        var slide = Config.defaultSlide($scope.getJSON());
        if (SlidesService.selected.slide) {
            SlidesService.overwriteSelected(slide);
        } else {
            SlidesService.addSlide(slide);
        }
    };

    /***************************
    **    Animate Slide       **
    ***************************/

    $scope.stop = function() {
        $scope.playing = false;
        $scope.resetVideo();
        _.defer(function(){$scope.$apply();});
    };

    $scope.playSlides = function(recording) {
        $scope.playing = true;
        $scope.isRecording = recording;
        $scope.changeSlide(0);
    };

    /*New animation stuff*/
    $scope.changeSlide = function(index) {
        if (index >= SlidesService.slides.length) {
            if ($scope.isRecording) {
                $scope.finalizeVideo();
                $scope.isRecording = false;
            }
            $scope.stop(); //We're done!
            return;
        }

        var slide = SlidesService.slides[index];
        $scope.clearCanvas(true);
        $scope.loadSlide(slide, function() {
            var ticksRemaining = slide.duration;

            $scope.initSlideObjects(slide);
            $scope.animateSlide(index, ticksRemaining);
        });
    };

    $scope.initSlideObjects = function(slide) {
        if (slide.fadeIn) {
            $scope.hideAll();
        }


        $scope.resizeForKen(slide.kenBurns);
        $scope.centerText();
        $scope.canvas.renderAll();
    }

    $scope.animateSlide = function(index, ticksRemaining) {
        if (!$scope.playing) {
            return;
        }

        var slide = SlidesService.slides[index];

        //TODO: add more
        var animations = {};

        if (slide.kenBurns) {
            animations = $scope.createAnimation(slide);
        }

        if (slide.fadeIn && (slide.duration - slide.fadeIn) < ticksRemaining) {
            animations['opacity'] = 1 / slide.fadeIn;
        }

        if (slide.fadeOut && (ticksRemaining - slide.fadeOut) <= 0) {
            animations['opacity'] = - 1 / slide.fadeOut;
        }

        $scope.tickCanvas(animations);
        ticksRemaining--;

        if ($scope.isRecording) {
            $scope.video.add($scope.canvas.getContext("2d"), 16.77777);
        }

        if (ticksRemaining > 0) {
            fabric.util.requestAnimFrame(_.partial($scope.animateSlide, index, ticksRemaining));
        } else {
            $scope.changeSlide(index + 1);
        }
    }

    $scope.tickCanvas = function(animations) {
        _.each($scope.canvas._objects, function(obj) {
            _.each(animations, function(val, key) {
                //This is an easy way to set up multiple animation.
                if (key == 'opacity') {
                    obj[key] += val;
                    if (obj.opacity < 0) {
                        obj.opacity = 0;
                    } else if (obj.opacity > 1) {
                        obj.opacity = 1;
                    }
                } else if (obj.type == 'image') {
                    obj[key] += val;
                }
            });
        });
        $scope.canvas.renderAll();
    }

    $scope.hideAll = function() {
        _.each($scope.canvas._objects, function(obj) {
            obj.opacity = 0;
        });
    }

    $scope.resizeForKen = function(kenBurns) {
        var SCALE = .1;
        _.each($scope.canvas._objects, function(obj) {
            if (obj.type != 'text') {
                switch (kenBurns) {
                    case 2:
                        scaleObject(obj, SCALE * 2);
                        break;
                    case 4:
                        scaleObject(obj, SCALE);
                        obj.left -= 50;
                        break;
                    case 5:
                        scaleObject(obj, SCALE);
                        break;
                    default:
                        break;
                }
            }
        });
    }

    $scope.createAnimation = function(slide) {
        var animation = {};
        var PAN_SPEED = 50;
        var SCALE = 0.3;

        switch (slide.kenBurns) {
            case 1:
                animation['left'] = -PAN_SPEED / 2;
                animation['top'] = -PAN_SPEED;
                animation['scaleX'] = SCALE;
                animation['scaleY'] = SCALE;
                break;
            case 2:
                animation['left'] = -PAN_SPEED;
                animation['top'] = -PAN_SPEED;
                break;
            case 3:
                animation['scaleX'] = SCALE;
                animation['scaleY'] = SCALE;
                animation['left'] = -PAN_SPEED * 1.75;
                animation['top'] = -PAN_SPEED * 1.25;
                break;
            case 4:
                animation['left'] = PAN_SPEED;
                break;
            case 5:
                animation['left'] = -PAN_SPEED;
                break;
            default:
                break;
        }

        _.each(animation, function(val, key) {
            animation[key] = val / slide.duration;
        });

        return animation;
    };



    /***************************
    **Download And Convert    **
    ***************************/
    $scope.downloadMov = function() {
        uploader.uploadFileToUrl($scope.renderedVideo, '/api/convert/2mov')
        .then(function(response) {
          downloadFile(response.data, 'Times Trailer.mov');
        });
    };

    $scope.downloadWebM = function() {
        downloadFile($scope.renderedVideo, 'Times Trailer.webm');
    };

    $scope.downloadGIF = function() {
        uploader.uploadFileToUrl($scope.renderedVideo, '/api/convert/2gif')
        .then(function(response) {
            downloadFile(response.data, 'Times Trailer.gif');
        });
    };

});
