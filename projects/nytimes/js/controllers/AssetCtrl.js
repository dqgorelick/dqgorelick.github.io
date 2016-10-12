angular.module('Assets', ['AssetService', 'ConfigService', 'ui.bootstrap']).controller("AssetCtrl", function ($scope, $sce, assets, Config) {

	$scope.showPhoto = false;
	$scope.showText = false;
	$scope.showQuotes = false;
	$scope.assets = null;
    $scope.loadedImages = 0;
    $scope.tabs = [
        {active: true},
        {active: false},
        {active: false},
        {active: false},
    ];

	$scope.$on('article:load', function(event, args) {
		assets.getData(args.url, args.number).then(function(data) {
			$scope.assets = data;
		});
	});

    $scope.metadataClick = function(text) {
        $scope.tabs[3].active = true;
        $scope.$broadcast('metadata', text);
    };

    $scope.imageLoaded = function() {
        $scope.loadedImages++;
        if ($scope.assets.images.length == $scope.loadedImages) {
            $scope.$emit('assets:ready');
        }
    }
});
