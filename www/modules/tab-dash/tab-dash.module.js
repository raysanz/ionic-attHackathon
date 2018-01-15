/* global angular */
(function () {
    'use strict'

    angular.module('starter.tab-dash', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            // Each tab has its own nav history stack:
  
            .state('tab.dash', {
                url: '/dash',
                views: {
                  'tab-dash': {
                    templateUrl: '/www/modules/tab-dash/tab-dash.html',
                    controller: 'dashController as dashCtrl'
                  }
                }
              })
    };
})();