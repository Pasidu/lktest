/**
 * Created by Pasidu on 5/1/2015.
 */
angular.module('app').directive('lkRow', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        require: '^lkRowGroups',
        scope: {
            data: '='
        },
        templateUrl: function (elem, attr) {
            return '/partials/directive/lkRow'
        },
        replace: true,
        link: function(scope, ele, attrs, lkRowGroupCtrl){

            scope.add = function(data){
                if(data.value != "") {
                    var e = $(ele).find('textarea');
                    e.attr('readonly', '');
                    scope.readonly = true;
                    lkRowGroupCtrl.addRow(data);
                }
            }
            scope.edit = function(){
                var e = $(ele).find('textarea');
                e.removeAttr('readonly');
                scope.readonly = false;
            }
            scope.delete = function(data){
                lkRowGroupCtrl.deleteRow(data);
            }
        }
    };

}]);