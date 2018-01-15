'use strict';

// Ionic Starter App
(function () {
  'use strict';

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.services' is found in services.js
  // 'starter.controllers' is found in controllers.js

  angular.module('starter', [
  // ionic
  'ionic',
  // services
  'starter.services',
  // module routes and controllers
  'starter.tab-nav', 'starter.tab-account', 'starter.tab-chat', 'starter.tab-dash']).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }).config(RouteConfig);

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouteConfig($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');
  };
})();
'use strict';

(function () {
    'use strict';

    angular.module('starter.services', []);
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-account', []).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

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
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-chat', []).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
        // Each tab has its own nav history stack:
        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: '/www/modules/tab-chat/tab-chats.html',
                    controller: 'chatsController as chatsCtrl'
                }
            }
        }).state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: '/www/modules/tab-chat/chat-detail/chat-detail.html',
                    controller: 'chatDetailController as chatDetailCtrl'
                }
            }
        });
    };
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-nav', []).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: '/www/modules/tab-nav/tabs.html'
        });
    };
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-dash', []).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

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
        });
    };
})();
'use strict';

(function () {
    'use strict';

    angular.module('starter.services').factory('chatService', ChatServiceFactory);

    ChatServiceFactory.$inject = ['$http', '$q'];

    //ideally this would hit a rest api
    function ChatServiceFactory($http, $q) {
        return {
            all: all,
            get: get,
            remove: remove
            // Might use a resource here that returns a JSON array
            // Some fake testing data
        };var chats = [{
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
    };
})();
'use strict';

(function () {
    'use strict';

    angular.module('starter.tab-account').controller('accountController', AccountCtrl);
    AccountCtrl.$inject = [];

    function AccountCtrl() {
        var $ctrl = this;
        $ctrl.settings = {
            enableFriends: true
        };
    };
})();
'use strict';

(function () {
    angular.module('starter.tab-chat').controller('chatsController', ChatController);
    ChatController.$inject = ['chatService'];
    function ChatController(chatService) {

        'use strict';
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        var $ctrl = this;
        $ctrl.chats = chatService.all();
        $ctrl.remove = function (chat) {
            chatService.remove(chat);
        };
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('starter.tab-dash').controller('dashController', DashCtrl);
    DashCtrl.$inject = [];
})();
'use strict';

(function () {
    angular.module('starter.tab-chat').controller('chatDetailController', ChatDetailController);

    ChatDetailController.$inject = ['chatService', '$stateParams'];

    function ChatDetailController(chatService, $stateParams) {
        'use strict';

        var $ctrl = this;
        $ctrl.chat = chatService.get($stateParams.chatId);
    }
})();