/**
 * Created by vinairachakonda on 12/29/16.
 */

angular.module('myApp.view1')
        .service('yearChangeService', ['$rootScope', function ($rootScope) {

            //service stuff
            var service = {};
            service.year = '2014';
            service.setYear = function (yr) {
                service.year = yr;
                $rootScope.$broadcast('year:updated',service.year);
            };

            service.getYear = function () {
                return service.year;
            };

            return service;
        }]);