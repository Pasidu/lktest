/**
 * Created by Pasidu on 4/30/2015.
 */
angular.module('app').controller('recipeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    var init = function(){
        $http.get('api/recipe').success(function (result) {
            organizeData(result);
        }).error(function (errorData) {
            $scope.errorMessage = errorData;
        });
    };

    var organizeData = function(data){
        $scope.recipeMatrix = [];
        var count = 0;
        var row = [];
        if(data != undefined){
            angular.forEach(data, function(item){
                row.push(item);
                ++count;
                if(count > 2){
                    $scope.recipeMatrix.push(angular.copy(row));
                    row = [];
                    count=0;
                }
            });
            $scope.recipeMatrix.push(angular.copy(row));
        }
    }
    init();

    $scope.getImagePath = function(imageName){
        return "/images/" + imageName;
    }

    $scope.openRecipe = function(recipe){
        $location.path('/recipeDetail').search({recipeId : recipe._id});
    };
}]);