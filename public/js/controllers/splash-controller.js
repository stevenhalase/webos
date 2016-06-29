(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('splashCtrl', splashController)

    function splashController(){
        var sCtrl = this;
        
        sCtrl.title = "Splash Controller";

        $('#typeit').typeIt({
            strings: ["This is a great string.", "But here is a better one."],
            speed: 100,
            breakLines: false,
            loop: true,
            autoStart: false
        });

    }

}());