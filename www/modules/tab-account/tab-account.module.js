/* global angular */
(function () {
    'use strict'

    angular.module('starter.tab-account', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            // Each tab has its own nav history stack:
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: '/www/modules/tab-account/tab-account.html',
                        controller: 'accountController as accountCtrl'
                    }
                }
            });
    };
})();