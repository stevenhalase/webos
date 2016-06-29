(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('loginCtrl', loginController)

    loginController.$inject = ['GoogleFactory'];

    function loginController(GoogleFactory){
        var lCtrl = this;
        
        lCtrl.title = "Login Controller";

        lCtrl.handleAuthClick = function (event) {
            console.log('Loading Drive API');
            GoogleFactory.handleAuthClick(event);
        }

    }

}());