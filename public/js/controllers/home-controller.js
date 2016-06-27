(function(){
    'use strict';

    angular
        .module('webOSApp')
        .controller('homeCtrl', homeController)

    homeController.$inject = ['$interval']

    function homeController($interval){
        var hCtrl = this;
        
        hCtrl.title = "Home Controller"

        hCtrl.currentTime = getCurrentTime();
        hCtrl.is12hr = true;

        hCtrl.files = [
            {
                name: 'Documents',
                dateCreated : new Date()
            }
        ]
        

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
                console.log(hour);
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

    }

}());