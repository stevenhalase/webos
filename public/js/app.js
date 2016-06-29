(function(){
    'use strict';

    angular.module('webOSApp', ['ui.router'])
    .config(webOSRouter)

    webOSRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function webOSRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('splash', {
                url         : '/',
                templateUrl : '../html/partials/splash.html',
                controller  : 'splashCtrl as sCtrl'
            })
            .state('login', {
                url         : '/login',
                templateUrl : '../html/partials/login.html',
                controller  : 'loginCtrl as lCtrl'
            })
            .state('desktop', {
                url         : '/desktop',
                templateUrl : '../html/partials/desktop.html',
                controller  : 'desktopCtrl as dCtrl'
            })
            $urlRouterProvider.otherwise('/')
    }

}());