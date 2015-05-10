/**
 * Created by Pasidu on 5/8/2015.
 */
angular.module('app').controller('recipePictureUploadCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.croppedImage = '';

    $scope.done = function(){
        $modalInstance.close($scope.croppedImage);
    }

    $scope.cancel = function(){
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
}]);