app.controller('MainController',
['$scope', function ($scope) {
    $scope.title = 'Lugar bacana';
    
    $scope.ViaTwitter = function(){
        window.plugins.socialsharing.shareViaTwitter($scope.title);
    }
}]);