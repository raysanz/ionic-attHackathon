/* global angular */
(function () {
    'use strict'

    angular.module('starter.tab-scroll', [])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            // Each tab has its own nav history stack:
            .state('tab.scroll', {
                url: '/scroll',
                views: {
                    'tab-scroll': {
                        templateUrl: 'modules/tab-scroll/tab-scroll.html',
                        controller: 'scrollController as scrollCtrl'
                    }
                }
            })
            // .state('tab.chat-detail', {
            //     url: '/chats/:chatId',
            //     views: {
            //         'tab-chats': {
            //             templateUrl: 'modules/tab-chat/chat-detail/chat-detail.html',
            //             controller: 'chatDetailController as chatDetailCtrl'
            //         }
            //     }
            // })
    };
})();