/* global angular */
(function () {
    'use strict'

    angular.module('starter.tab-nav', [])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
              // setup an abstract state for the tabs directive
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: '/www/modules/tab-nav/tabs.html'
              })
    };
})();