(function(){
    'use strict';

    angular.module('webOSApp', ['ui.router'])
    .config(webOSRouter)

    webOSRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function webOSRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url         : '/',
                templateUrl : 'partials/home.html',
                controller  : 'homeCtrl as hCtrl'
            })
    }

}());