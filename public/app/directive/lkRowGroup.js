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
        controller: function ($scope, $timeout) {
            $scope.newInstruction = '';

            $scope.enter = function(data, textAreaId){
                data.editMode = true;
                $timeout(function() {
                    var element = document.getElementById(textAreaId);
                    if(element)
                        element.focus();
                });
            };

            $scope.leave = function(data){
                $timeout(function() {
                    data.editMode = false;
                }, 200);
            };

            $scope.keyPress = function(event, data){
                if(event.keyCode == 13){
                    $scope.leave(data);
                }
            };

            $scope.delete = function(index){
                $scope.rowsData.splice(index, 1);
            };


            $scope.addNewInstruction = function(event){
                if((event == undefined || event.keyCode == 13)&& $scope.newInstruction != '' ){
                    if($scope.rowsData == undefined){
                        $scope.rowsData = [];
                    }
                    $scope.rowsData.push({value : $scope.newInstruction});
                    $scope.newInstruction = '';
                }
            }
        }
    };

}]);
