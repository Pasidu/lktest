/**
 * Created by Pasidu on 5/1/2015.
 */
angular.module('app').directive('lkIngredientRow', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        require: '^lkIngredients',
        scope: {
            data: '=',
            choices: '='
        },
        templateUrl: function (elem, attr) {
            return '/partials/directive/lkIngredientRow'
        },
        replace: true,
        link: function(scope, ele, attrs, lkIngredientsCtrl){

            scope.add = function(data){
                if(data.details != "" && data.quantity != "") {
                    $(ele).find('input').attr('readonly', '');
                    $(ele).find('select').attr('readonly', '');
                    scope.readonly = true;
                    lkIngredientsCtrl.addRow(data);
                }
            }
            scope.edit = function(){
                $(ele).find('input').removeAttr('readonly');
                $(ele).find('select').removeAttr('readonly');
                scope.readonly = false;
            }
            scope.delete = function(data){
                lkIngredientsCtrl.deleteRow(data);
            }
        }
    };

}]);