/**
 * Created by Pasidu on 5/6/2015.
 */
angular.module('app').controller('recipeDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.recipeData = {};


    var init = function(){
        //$scope.recipeData = $routeParams.param;
        $http.get('/api/recipe/'+ $routeParams.recipeId).success(function (result) {
            $scope.recipeData = result;
        }).error(function (errorData) {
            $scope.errorMessage = errorData;
        });
    };

    init();

    $scope.emptyOrNull = function(item){
        return !(item.details == undefined || item.details == "")
    }

    $scope.getImagePath = function(imageName){
        return "/images/" + imageName;
    }
}]);