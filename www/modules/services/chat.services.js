(function () {
    'use strict';

    angular.module('starter.services')
        .factory('chatService', ChatServiceFactory)

    ChatServiceFactory.$inject = ['$http', '$q']

    //ideally this would hit a rest api
    function ChatServiceFactory($http, $q) {

        // Might use a resource here that returns a JSON array
        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        function all() {
            return chats;
        };
        function remove(chat) {
            chats.splice(chats.indexOf(chat), 1);
        };
        function get(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
        return {
            all: all,
            get: get,
            remove: remove
        }
    };

})();