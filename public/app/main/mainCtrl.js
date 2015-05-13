angular.module('app').controller('mainCtrl', ['$scope',function($scope) {
    $scope.menuUrl='/tabs/menu?Id' + Date.now();
    $scope.$on("userLoggedIn",function(event,args) {
        $scope.menuUrl=null;
        $scope.menuUrl='/tabs/menu?Id' + Date.now();
    });

}]);

