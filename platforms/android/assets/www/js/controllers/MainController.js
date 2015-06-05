appP.controller('MainController',
['$scope', function ($scope) {
    $scope.title = 'Tarefas';
    
    $scope.ViaTwitter = function(){
        window.plugins.socialsharing.shareViaTwitter($scope.title);
    }
}]);