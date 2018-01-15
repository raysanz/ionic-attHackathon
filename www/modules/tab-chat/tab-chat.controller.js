(function () {
    angular.module('starter.tab-chat')
        .controller('chatsController', ChatController);
    ChatController.$inject = ['$scope', 'chatService'];
    function ChatController($scope, chatService) {

        'use strict';
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        let $ctrl = this;
        $ctrl.text = "say something";
        $ctrl.chats = chatService.all();
        $ctrl.remove = (chat) => {
            chatService.remove(chat);
        };
    }
})();