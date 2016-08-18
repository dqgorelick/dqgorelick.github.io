angular.module('Timeline', ['SlidesService', 'ConfigService', 'cfp.hotkeys']).controller('TimelineCtrl', function($scope, SlidesService, hotkeys, Config) {

    $scope.SlidesService = SlidesService;
    $scope.expandTimeline = true;
    $scope.effectIndex = -1;

    hotkeys.add({
        combo: 't',
        description: 'Show or hide the timeline.',
        callback: function() {
            $scope.expandTimeline = !$scope.expandTimeline;
        }
    });

    $scope.durations = [
        {value: 500 / 1000 * 60, label: '0.5 secs'},
        {value: 1000 / 1000 * 60, label: '1 sec'},
        {value: 1500 / 1000 * 60, label: '1.5 secs'},
        {value: 2000 / 1000 * 60, label: '2 secs'},
        {value: 2500 / 1000 * 60, label: '2.5 secs'},
        {value: 3000 / 1000 * 60, label: '3 secs'}
    ];

    $scope.effects = [
        {value: 0, label: 'NO PANNING'},
        {value:  1, label: 'ZOOM & SLIDE'},
        {value:  2, label: 'PAN LEFT & UP'},
        {value:  3, label: 'ZOOM CENTER'},
        {value:  4, label: 'PANNING RIGHT'},
        {value:  5, label: 'PANNING LEFT'}
    ];

    $scope.sortableOptions = {
        axis: 'x',
    };

    $scope.effectShow = function(index){
        $scope.effectIndex = (index == $scope.effectIndex) ? -1 : index;
    };
});
