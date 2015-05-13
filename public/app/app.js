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
         .when('/', { templateUrl: '/partials/home/home?Id' + Date.now()})
         .when('/Recipe', { templateUrl: '/partials/recipe/recipe?Id' + Date.now()})
         .when('/Blog', { templateUrl: '/partials/blog/blog?Id' + Date.now()})
         .when('/Tips', { templateUrl: '/partials/tips/tips?Id' + Date.now()})
         .when('/recipeEdit', { templateUrl: '/partials/recipe/recipeEdit?Id' + Date.now(), controller: 'recipeEditCtrl'})
         .when('/recipeDetail', { templateUrl: '/partials/recipe/recipeDetail?Id' + Date.now()})
         .when('/myKitchen', { templateUrl: '/account?Id' + Date.now()})

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