app.directive('lkIngredients', [ function () {
    return {
        restrict: 'E',
        scope: {
            rowsData: '=',
            choices: '='
        },
        replace: false,
        templateUrl: function (elem, attr) {
            return '/partials/directive/lkIngredients';
        },
        controller: function ($scope, $timeout) {
            $scope.newIngredient = { units: '', details : '', quantity:''};

            $scope.enter = function(data, Id){
                data.editMode = true;
                $timeout(function() {
                    var element = document.getElementById(Id);
                    if(element)
                        element.focus();
                });
            };

            $scope.leave = function(data){
                $timeout(function() {
                    data.editMode = false;
                }, 200);
            };
//
//            $scope.keyPress = function(event, data){
//                if(event.keyCode == 13){
//                    $scope.leave(data);
//                }
//            };

            $scope.delete = function(index){
                $scope.rowsData.splice(index, 1);
            };

            $scope.validate = function(data){
                if(data.details != '' && (data.units != '' && data.units != undefined) &&  (data.quantity != '' &&  data.quantity != undefined) ) { //&& ( (data.units != '' && data.quantity != '') || (data.units == '' && data.quantity == ''))
                    return true;
                }
                else{
                    return false;
                }
            }
            $scope.addNew = function(data){
                if($scope.validate(data)){
                    $scope.rowsData.push({units: data.units, details : data.details, quantity:data.quantity});
                    $scope.newIngredient = { units: '', details : '', quantity:''};
                }
            };
        }
    };

}]);
