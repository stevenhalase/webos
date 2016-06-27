(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('desktopCtrl', desktopController)

    function desktopController(){
        var dCtrl = this;
        
        dCtrl.title = "Desktop Controller";

        dCtrl.files = [
            {
                name: 'Documents',
                id: 1,
                dateCreated : new Date()
            }
        ];

        dCtrl.startFocusEvent = function(el) {
            console.log(el.srcElement.parentElement.parentElement);
            $(el.srcElement.parentElement.parentElement).addClass('focused')
            // console.log($(el.srcElement))
            document.addEventListener('click', function(event) {
                console.log(event.srcElement.parentElement.parentElement)
                let eventID = event.srcElement.id;
                // console.log(eventID, elID)
                if(event.srcElement.parentElement.parentElement !== el.srcElement.parentElement.parentElement)
                $(el.srcElement.parentElement.parentElement).removeClass('focused');

            })
        }

    }

}());