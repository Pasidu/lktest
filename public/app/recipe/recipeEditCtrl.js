/**
 * Created by Pasidu on 4/30/2015.
 */
angular.module('app').controller('recipeEditCtrl', ['$scope', '$http', '$location', '$routeParams', '$modal', function ($scope, $http, $location, $routeParams, $modal) {
    $scope.recipeData = {};
    $scope.ingredientsUnits = ['oz','tbs', 'lbs'];
    $scope.timeChoices = ['min','hours', 'days'];
    $scope.myCroppedImage='';

    $scope.save = function (recipeData) {
        var param = {recipeData : $scope.recipeData, image : $scope.croppedImageURL}
        $http.post('/api/recipe', param).success(function (result) {
            $location.path('/myKitchen');
        }).error(function (errorData) {
            $scope.errorMessage = errorData;
        });
    };

    $scope.load = function(){
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.myImage=evt.target.result;
            });
        };
        reader.readAsDataURL($scope.selectedFile);
    };

    $scope.uploadPicture = function(){
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/partials/recipe/recipePictureUpload',
            controller: 'recipePictureUploadCtrl',
            windowClass: 'upload-modal-window'
        });

        modalInstance.result.then(function (croppedImageURL) {
            $scope.croppedImageURL = croppedImageURL;
        }, function () {

        });
    }

    $scope.openCategory = function(){
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/partials/recipe/recipeCategory',
            controller: 'recipeCategoryCtrl',
            windowClass: 'category-modal-window',
            resolve: {
                categories: function () {
                    return $scope.categories;
                }
            }
        });

        modalInstance.result.then(function (result) {
            $scope.categories = result;
        }, function () {

        });
    };
    var init = function(){
        if($routeParams.recipeId != undefined){
            $http.get('/api/recipe/'+ $routeParams.recipeId).success(function (result) {
                $scope.recipeData = result;
                $scope.croppedImageURL =  '/images/' + $scope.recipeData.imageName;
            }).error(function (errorData) {
                $scope.errorMessage = errorData;
            });
        }
    };


    init();
}]);