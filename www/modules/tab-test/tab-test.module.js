/* global angular */
(function () {
  'use strict'

  angular.module('starter.tab-test', ['ui.router'])
    .config(RouteConfig)

  RouteConfig.$inject = ['$stateProvider']

  function RouteConfig($stateProvider) {
    $stateProvider
      // Each tab has its own nav history stack:

      .state('tab.test', {
        url: '/test',
        views: {
          'tab-test': {
            templateUrl: 'modules/tab-test/tab-test.html',
            controller: 'testController as testCtrl'
          }
        }
      })
  };
})();
