/**
 * Created by Pasidu on 5/7/2015.
 */
angular.module('app').controller('myKitchenCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.recipeData = {};
    $scope.ingredientsUnits = ['oz','tbs', 'lbs'];
    $scope.timeChoices = ['min','hours', 'days'];

    $scope.save = function (recipeData) {
        var param = {recipeData : $scope.recipeData, image : $scope.selectedFile}
        $http.post('api/recipe', param).success(function (result) {
            $location.path('/myKitchen');
        }).error(function (errorData) {
            $scope.errorMessage = errorData;
        });
    };

    $scope.getImagePath = function(imageName){
        return "/images/" + imageName;
    };

    $scope.edit = function(recipe){
        $location.path('/recipeEdit').search({recipeId : recipe._id});
    };

    $scope.delete = function(recipe){
        alert("Are you sure?");
    };
    var init = function(){
        $http.get('/api/recipes/byUser').success(function (result) {
            $scope.myRecipes = result;
        }).error(function (errorData) {
            $scope.errorMessage = errorData;
        });
    };
    init();
}]);