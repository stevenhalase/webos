(function(){
    'use strict';

    angular.module('webOSApp', ['ui.router'])
    .config(webOSRouter)

    webOSRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function webOSRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('desktop', {
                url         : '/',
                templateUrl : '../html/partials/desktop.html',
                controller  : 'desktopCtrl as dCtrl'
            })
            $urlRouterProvider.otherwise('/')
    }

}());