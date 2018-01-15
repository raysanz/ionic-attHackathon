/* global angular */
(function () {
    'use strict'

    angular.module('starter.tab-chat', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            // Each tab has its own nav history stack:
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: '/www/modules/tab-chat/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: '/www/modules/tab-chat/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })
    };
})();