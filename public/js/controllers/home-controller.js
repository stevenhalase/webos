(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('homeCtrl', homeController)

    function homeController(){
        var hCtrl = this;
        
        hCtrl.title = "Home Controller"

    }

}());