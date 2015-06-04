appP.controller('MainController',
['$scope', function ($scope) {
    $scope.title = 'Tarefas';
    
    $scope.shareViaTwitter = function(){
        window.plugins.socialsharing.shareViaTwitter('teste');
    }
}]);