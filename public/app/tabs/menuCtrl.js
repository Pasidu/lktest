/**
 * Created by Pasidu on 4/27/2015.
 */
angular.module('app').controller('menuCtrl', ['$scope', '$http', '$modal','$log', function ($scope, $http, $modal, $log) {

    $scope.tabs = [
        { title: 'Dynamic Title 1', content: '<div>test 1</div>'},
        { title: 'Dynamic Title 2', content: '<div>test 2</div>'}
    ];

    $scope.menu ={};
    var init = function(){
        $http.get('api/menus').success(function (result) {
            $scope.menu = result;
        }).error(function (errorData) {

        });
    }

    $scope.openLogin = function(){
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/partials/login/loginModal',
            controller: 'loginCtrl',
            windowClass: 'login-modal-window',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    };
    init();

}]);





angular.module('app').controller('loginCtrl', ['$scope', '$modalInstance', '$http', function($scope, $modalInstance, $http){
        $scope.signIn = true;

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.fbLogin = function(){}
        {
            $http.get('auth/facebook').success(function (result) {
                $scope.message = result;
            }).error(function (errorData) {
                $scope.message = errorData;
            });
        }
    }]

);