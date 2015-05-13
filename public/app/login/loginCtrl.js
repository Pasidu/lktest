/**
 * Created by Pasidu on 5/12/2015.
 */
angular.module('app').controller('loginCtrl', ['$scope', '$modalInstance', '$http', '$location', '$rootScope',
            function($scope, $modalInstance, $http, $location, $rootScope){
        $scope.signIn = true;

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };


        $scope.signUp = function(){
            $http.post('/signup', $scope.signUpData).success(function (result) {
                if(result.errorCode == 0){
                    $rootScope.$broadcast('userLoggedIn');
                    $location.path('/myKitchen');
                    $modalInstance.close();
                }else{
                    $scope.message = result.message;
                }
            }).error(function (errorData) {
                $scope.message = errorData;
            });
        }

        $scope.login = function(){
            $http.post('/login', $scope.signInData).success(function (result) {
                if(result.errorCode == 0){
                    $rootScope.$broadcast('userLoggedIn');
                    $location.path('/myKitchen');
                    $modalInstance.close();
                }else{
                    $scope.message = result.message;
                }
            }).error(function (errorData) {
                $scope.message = errorData;
            });
        }


    }]

);