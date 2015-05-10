angular.module('app').controller('tabBarCtrl', ['$scope',function ($scope) {

$scope.tabs = [
{ title: 'Dynamic Title 1', content: '<div>test 1</div>'},
{ title: 'Dynamic Title 2', content: '<div>test 2</div>'}
];
}]);

