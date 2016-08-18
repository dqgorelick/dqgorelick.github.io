angular.module('Article', ['AssetService', 'ui.bootstrap']).controller("ArticleCtrl", function ($rootScope, $scope, $modal, assets) {

    $scope.url = '';

    $scope.getArticle = function(number) {
        $scope.modalInstance.close();
        $rootScope.$broadcast('article:load', {url: $scope.url, number: number});
    }

    $scope.open = function() {
        $scope.modalInstance = $modal.open({
            animation: true,
            templateUrl: 'modal.html',
            controller: 'ArticleCtrl',
            scope: $scope, //the parent of the modal scope.
        });
    };

    $scope.recentArticles = [];
    $scope.revealedArticles = false;
    $scope.recents = function(){
        $("#recents").css("display","block");

        if ($scope.revealedArticles) return;
        for (var i = 0; i < localStorage.length; i++){
            $scope.revealedArticles = true;
            $scope.recentArticles.push({
                headline: localStorage.key(i),
                url: localStorage.getItem(localStorage.key(i)).slice(5)
            });
        }
    }
});
