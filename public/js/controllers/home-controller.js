(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('homeCtrl', homeController)

    homeController.$inject = ['$interval','$timeout','GoogleFactory']

    function homeController($interval,$timeout){
        var hCtrl = this;
        
        hCtrl.title = "Home Controller"

        hCtrl.checkAuth = function() {
            GoogleFactory.checkAuth();
        }

        hCtrl.currentTime = getCurrentTime();
        hCtrl.is12hr = true;
        
        function getCurrentTime() {
            $interval(function() {
                // console.log('getting time');
                let time = new Date();
                let day = time.getDay();
                let dayOfWeek = '';
                let hour = time.getHours();
                let amPM = '';
                amPM = (hour < 12) ? amPM = 'AM' : amPM = 'PM';
                hour = (hCtrl.is12hr) ? (hour > 12) ? hour = hour - 12 : hour : hour;
                // console.log(hour)
                hour = (hCtrl.is12hr) ? (hour === 0) ? hour = 12 : hour : hour;
                hour = (!hCtrl.is12hr) ? (hour < 10) ? hour = '0' + hour : hour : hour;
                // console.log(hour);
                let minutes = time.getMinutes();
                minutes = (minutes < 10) ? minutes = '0' + minutes : minutes;
                let seconds = time.getSeconds();

                switch(day) {
                    case 0 : 
                        dayOfWeek = 'Sun';
                        break;
                    case 1 : 
                        dayOfWeek = 'Mon';
                        break;
                    case 2 : 
                        dayOfWeek = 'Tue';
                        break;
                    case 3 : 
                        dayOfWeek = 'Web';
                        break;
                    case 4 : 
                        dayOfWeek = 'Thu';
                        break;
                    case 5 : 
                        dayOfWeek = 'Fri';
                        break;
                    case 6 : 
                        dayOfWeek = 'Sat';
                }

                const timeString = (hCtrl.is12hr) ? (dayOfWeek + ' ' + hour.toString() + ':' + minutes.toString() + ' ' + amPM) : (dayOfWeek + ' ' + hour.toString() + ':' + minutes.toString());
                // console.log(time, day, hour, minutes, timeString);
                hCtrl.currentTime = timeString;
                // console.log(hCtrl.currentTime);
            }, 1000)
            
        }

        hCtrl.changeTimeFrame = function(timeframe) {
            console.log('in timeframe: ', timeframe)
            // if (timeframe = '24hr') {
            //     hCtrl.currentTime
            // }
        }

        hCtrl.wrapperDimensions = [];

        hCtrl.openSearchModal = function() {
            let modalInst = $('[data-remodal-id=search-modal]').remodal()
            modalInst.open();
        }

        hCtrl.resize = function(event) {
            let modalID = $(event.srcElement.parentElement.parentElement.parentElement.parentElement).attr('data-remodal-id');
            let modalInst = $('[data-remodal-id=' + modalID + ']').remodal()
            // console.log(modalInst)
            // console.log(event.srcElement.parentElement.parentElement.parentElement.parentElement)
            let action = event.srcElement.id;
            let wrapper = event.srcElement.parentElement.parentElement.parentElement.parentElement;
            let $wrapper = $(wrapper)
            switch(action) {
                case 'resize-max':
                    console.log($wrapper.width(), hCtrl.wrapperDimensions[0])
                    if($wrapper.width() > hCtrl.wrapperDimensions[0]) {
                        $wrapper.width(700);
                        $wrapper.height(hCtrl.wrapperDimensions[1]);
                    } else {
                        hCtrl.wrapperDimensions = [$wrapper.width(),$wrapper.height()];
                        $wrapper.addClass('maximized')
                    }
                    break;
                case 'resize-min':
                    $wrapper.addClass('minimized')
                    break;
                case 'resize-close':
                    modalInst.close();
                    break;
            }
        }

    }

}());