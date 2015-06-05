app.controller('MainController',
['$scope', function ($scope) {
    $scope.title = endAtual;
    
    $scope.ViaTwitter = function(){
        window.plugins.socialsharing.shareViaTwitter($scope.title);
    }
}]);