angular.module('Editor', ['ConfigService']).controller('EditorCtrl', function($scope, Config) {

    $scope.initialize = function() {
        $scope.$parent.canvas.on('mouse:down', $scope.dragStart);
        $scope.$parent.canvas.on('mouse:up', $scope.dragEnd);
        $scope.$parent.canvas.on('mouse:up', function(){
            $scope.$parent.qUndo();
        });

        $scope.$on('metadata', function(event, text) {
            $scope.text.content = text;
        })
    }

    $scope.dragStart = function(event) {
        //this = canvas
        if (event.target) {
            return;
        }

        $scope.manualPosition[0] = this.getPointer(event.e).x;
        $scope.manualPosition[1] = this.getPointer(event.e).y;
        $scope.$digest();
    }

    $scope.dragEnd = function(event) {
        //this = canvas
        if (event.target) {
            return;
        }

        endX = this.getPointer(event.e).x;
        endY = this.getPointer(event.e).y;

        var tmp;
        if (Math.max($scope.manualPosition[0], endX) === $scope.manualPosition[0]) {
            tmp = $scope.manualPosition[0];
            $scope.manualPosition[0] = endX;
            endX = tmp;
        }

        if (Math.max($scope.manualPosition[1], endY) === $scope.manualPosition[1]) {
            tmp = $scope.manualPosition[1];
            $scope.manualPosition[1] = endY;
            endY = tmp;
        }

        $scope.manualPosition[2] = endX - $scope.manualPosition[0];
        $scope.manualPosition[3] = endY - $scope.manualPosition[1];
        $scope.$digest();
    }

    $scope.autoPositions = [
        'banner',
        'default',
        'none'
    ];

    $scope.autoPosition = $scope.autoPositions[1];
    $scope.manualPosition = [0, 0, 0, 0];

    $scope.overlay = {
        enabled : true,
        opacity: 0.5,
        overlayColor: '#000000',
    };

    $scope.fonts = ['NYTCheltenhamBdCon-Regular', 'NYTCheltenhamBdXCon-Regular', 'NYTCheltenhamBold-Italic', 'NYTCheltenhamBold-Regular', 'NYTCheltenhamBook-Italic', 'NYTCheltenhamBook-Regular', 'NYTCheltenhamExtBd-Italic', 'NYTCheltenhamExtBd-Regular', 'NYTCheltenhamExtLt-Italic', 'NYTCheltenhamExtLt-Regular', 'NYTCheltenhamLt-Italic', 'NYTCheltenhamLt-Regular', 'NYTCheltenhamLtCon-Regular', 'NYTCheltenhamLtSC-Regular', 'NYTCheltenhamMedCon-Regular', 'NYTCheltenhamMedium-Italic', 'NYTCheltenhamMedium-Regular', 'NYTCheltenhamWide-Italic', 'NYTCheltenhamWide-Regular', 'NYTFranklinBold-Italic', 'NYTFranklinBold-Regular', 'NYTFranklinExtraBd-Italic', 'NYTFranklinExtraBd-Regular', 'NYTFranklinHeadline-Italic', 'NYTFranklinHeadline-Regular', 'NYTFranklinLight-Italic', 'NYTFranklinLight-Regular', 'NYTFranklinMedium-Italic', 'NYTFranklinMedium-Regular', 'NYTFranklinSemiBold-Regular', 'NYTImperial-Bold', 'NYTImperial-BoldItalic', 'NYTImperial-Italic', 'NYTImperial-Regular', 'NYTImperialSemiBold-Italic', 'NYTImperialSemiBold-Regular', 'NYTKarnakDisplay-Regular', 'NYTKarnakText-Regular', 'NYTStymieLight-Regular', 'NYTStymieMedium-Regular'];

    $scope.text = {
        content: '',
        color: '#ffffff',
        size: 30,
        font: $scope.fonts[0],
        justify: 'center',
        compensateHeightOnWrap: false
    };

    $scope.drawText = function() {
        var text = new fabric.IText($scope.text.content, {
            size: $scope.text.size,
            fontFamily: $scope.text.font,
            fill: '#ffffff',
        });
        $scope.$parent.canvas.add(text);
        text.center();
        text.setCoords();

        var overlayOptions = _.extend($scope.overlay, text.getBoundingRect());
        console.log($scope.autoPosition);
        switch ($scope.autoPosition) {
            case 'banner':
                overlayOptions.left = 0;
                overlayOptions.width = $scope.$parent.canvas_width;
            case 'default':
                var rect = $scope.$parent.createOverlay(null, overlayOptions);
                $scope.$parent.canvas.add(rect);
                $scope.$parent.canvas.sendBackwards(rect);
                $scope.$parent.canvas.renderAll();
                break;
            case 'none':
                break;
        }

        $scope.qUndo();
    }

    $scope.saveConfigs = function(draw) {
        var position;
        if ($scope.autoPosition.value) {
            position = getRectangle($scope.autoPosition.value, $scope.$parent.canvas_width, $scope.$parent.canvas_height);
        } else {
            position = $scope.manualPosition;
        }

        if (!_.some(position)) {
            alert('must specify position');
            return;
        }

        Config.set({overlay: $scope.overlay, text : $scope.text, position: position});

        if (draw) {
            $scope.$parent.drawAll();
            $scope.qUndo();
        }
    }
});

function getRectangle(type, width, height) {
    var inset_margin_width = width / 20;
    var inset_margin_height = height / 10;
    var inset_width = width * .6

    var banner_height = height * .3
    var banner_inset = 0.25 * width;

    var dimensions;
    switch (type) {
        case "tb":
            dimensions = [0, 0, width, banner_height];
            break;
        case "tli":
            dimensions = [inset_margin_width, inset_margin_height, inset_width, inset_margin_height];
            break;
        case "tri":
            dimensions = [inset_margin_width * 19 - (inset_width), inset_margin_height, inset_width, inset_margin_height];
            break;
        case "cb":
            dimensions = [0, height * .4, width, banner_height];
            break;
        case "bli":
            dimensions = [inset_margin_width, height - (inset_margin_height * 2), inset_width, inset_margin_height];
            break;
        case "bri":
            dimensions = [width - inset_margin_width - inset_width, height - (inset_margin_height * 2), inset_width, inset_margin_height];
            break;
        case "bb":
            dimensions = [0, height - banner_height, width, banner_height];
            break;
    }

    return dimensions;
}
