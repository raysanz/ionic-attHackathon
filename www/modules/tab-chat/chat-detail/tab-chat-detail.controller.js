(function () {
    angular.module('starter.tab-chat')
        .controller('chatDetailController', ChatDetailController);

    ChatDetailController.$inject = ['chatService', '$stateParams'];

    function ChatDetailController(chatService, $stateParams) {
        'use strict';
        let $ctrl = this;
        $ctrl.chat = chatService.get($stateParams.chatId);

    }
})();