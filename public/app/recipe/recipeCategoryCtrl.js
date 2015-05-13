/**
 * Created by Pasidu on 5/11/2015.
 */
/**
 * Created by Pasidu on 5/8/2015.
 */
angular.module('app').controller('recipeCategoryCtrl', ['$scope', '$modalInstance', 'categories', function ($scope, $modalInstance, categories) {

    $scope.TimeBaseCategories = [
        {value : 'Breakfast', selected : false},
        {value : 'Lunch', selected : false},
        {value : 'Dinner', selected : false},
        {value : 'Festival specials', selected : false},
        {value : 'Tea/Coffee breaks', selected : false}
    ]

    $scope.NormalCategories = [
        { value : 'Rice', selected : false},
        { value : 'Meat', selected : false},
        { value : 'Fish', selected : false},
        { value : 'Dry ' +
            'Fish', selected : false},
        { value : 'Veggies', selected : false},
        { value : 'Pulses', selected : false},
        { value : 'Dessert', selected : false},
        { value : 'Sweets', selected : false},
        { value : 'Finger foods (short eats)', selected : false},
        { value : 'Drinks', selected : false},
        { value : 'Fusion', selected : false}
    ]



    $scope.done = function(){
        var selectedCategories = []
        angular.forEach($scope.TimeBaseCategories, function(item){
            if(item.selected == true){
                selectedCategories.push(item.value)
            }
        });
        angular.forEach($scope.NormalCategories, function(item){
            if(item.selected == true){
                selectedCategories.push(item.value)
            }
        });
        $modalInstance.close(selectedCategories.join(', '));
    }

    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }

    var init = function(){
        if(categories != undefined && categories != ''){
            var selectedCategories = categories.split(', ')
            angular.forEach($scope.TimeBaseCategories, function(item){
                if(selectedCategories.indexOf(item.value) >=0 ){
                    item.selected= true;
                }
            });
            angular.forEach($scope.NormalCategories, function(item){
                if(selectedCategories.indexOf(item.value) >= 0){
                    item.selected= true;
                }
            });
        }

    };

    init()
}]);