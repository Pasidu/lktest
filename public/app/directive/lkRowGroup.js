app.directive('lkRowGroups', [ function () {
    return {
        restrict: 'E',
        scope: {
            rowsData: '='
        },
        replace: false,
        templateUrl: function (elem, attr) {
            return '/partials/directive/lkRowGroup';
        },
        controller: function ($scope) {
            if ($scope.rowsData == undefined) {
                $scope.rowsData = [ {id : 1, value : ''}];
            }
            this.addRow = function (data) {
                var lastElement = $scope.rowsData[$scope.rowsData.length-1];
                if(lastElement.value != "")
                    $scope.rowsData.push({id: lastElement.id+1, value : ''});
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
