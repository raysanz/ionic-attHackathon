(function () {
    angular.module('starter.tab-chat')
        .controller('chatController', ChatController);
    ChatController.$inject = ['Chats'];
    function ChatController(Chats) {

        'use strict';
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        let $ctrl = this;
        $ctrl.chats = Chats.all();
        $ctrl.remove = function (chat) {
            Chats.remove(chat);
        };
    }
})();