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
        controller: function ($scope) {
            if ($scope.rowsData == undefined) {
                $scope.rowsData = [ {id : 1, unit: '', details : '', quantity:''}];
            }
            this.addRow = function (data) {
                var lastElement = $scope.rowsData[$scope.rowsData.length-1];
                if(lastElement.value != "")
                    $scope.rowsData.push({id: lastElement.id+1, unit: '', details : '', quantity:''});
            };
            this.deleteRow = function(data){
                var index = -1;
                var i=0;
                for(; i< $scope.rowsData.length; i++){
                    if($scope.rowsData[i].id == data.id){
                        index = i;
                    }
                }
                if (index > -1) {
                    $scope.rowsData.splice(index, 1);
                }
            }
        }
    };

}]);
