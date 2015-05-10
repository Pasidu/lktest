var app = angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ngImgCrop']);

angular.module('app').config(function($routeProvider, $locationProvider) {
   /* var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function(mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute()
        }}
    }*/

    $locationProvider.html5Mode(true);
     $routeProvider
         .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
         .when('/Recipe', { templateUrl: '/partials/recipe/recipe'})
        .when('/Blog', { templateUrl: '/partials/blog/blog'})
         .when('/Tips', { templateUrl: '/partials/tips/tips'})
         .when('/recipeEdit', { templateUrl: '/partials/recipe/recipeEdit', controller: 'recipeEditCtrl'})
         .when('/recipeDetail', { templateUrl: '/partials/recipe/recipeDetail'})
         .when('/myKitchen', { templateUrl: '/account'})

});

/*angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})*/



angular.module('app').controller('mainCtrl', ['$scope', '$http', '$location',function ($scope, $http, $location) {

    $scope.go = function(path){
        $location.path( path );
    };

}]);