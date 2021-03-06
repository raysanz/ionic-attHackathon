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
  'ionic', 'ngCordova',
  // services
  'starter.services',
  // module routes and controllers
  'starter.tab-nav', 'starter.tab-account', 'starter.tab-chat', 'starter.tab-dash', 'starter.tab-scroll']).run(function ($ionicPlatform) {
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
                    templateUrl: 'modules/tab-account/tab-account.html',
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
                    templateUrl: 'modules/tab-chat/tab-chats.html',
                    controller: 'chatsController as chatsCtrl'
                }
            }
        }).state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'modules/tab-chat/chat-detail/chat-detail.html',
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
            templateUrl: 'modules/tab-nav/tabs.html'
        });
    };
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-dash', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
        // Each tab has its own nav history stack:

        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'modules/tab-dash/tab-dash.html',
                    controller: 'dashController as dashCtrl'
                }
            }
        });
    };
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('starter.tab-scroll', []).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

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
        });
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
'use strict';

(function () {
    'use strict';

    angular.module('starter.services').factory('chatService', ChatServiceFactory);

    ChatServiceFactory.$inject = ['$http', '$q'];

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
        };
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

        var $ctrl = this;
        $ctrl.text = "say something";
        $ctrl.chats = chatService.all();
        $ctrl.remove = function (chat) {
            chatService.remove(chat);
        };
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('starter.tab-dash').controller('dashController', DashController);

    DashController.$inject = [];
    function DashController() {
        var $ctrl = this;
        $ctrl.text = "hello how are you doing today?";
    };
})();
'use strict';

(function () {
    angular.module('starter.tab-scroll').controller('scrollController', ScrollController);
    ScrollController.$inject = ['chatService', '$ionicPlatform', '$cordovaCamera', '$cordovaImagePicker'];
    function ScrollController(chatService, $ionicPlatform, $cordovaCamera, $cordovaImagePicker) {

        'use strict';
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        var $ctrl = this;
        // Triggered in the registration modal to close it
        $ctrl.closeRegister = function () {
            $ctrl.registerform.hide();
        };

        // Open the registration modal
        $ctrl.register = function () {
            $ctrl.registerform.show();
        };

        // Perform the registration action when the user submits the registration form
        $ctrl.doRegister = function () {
            // Simulate a registration delay. Remove this and replace with your registration
            // code if using a registration system
            $timeout(function () {
                $ctrl.closeRegister();
            }, 1000);
        };

        //Code for calling the device camera
        $ionicPlatform.ready(function () {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };
            $ctrl.takePicture = function () {
                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $ctrl.registration.imgSrc = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    console.log(err);
                });

                $ctrl.registerform.show();
            };
        });

        //Code for calling image gallery
        $ionicPlatform.ready(function () {
            var options = {
                maximumImagesCount: 1,
                width: 100,
                height: 100,
                quality: 50
            };

            $ctrl.chooseImage = function () {
                $cordovaImagePicker.getPictures(options).then(function (imageChoice) {
                    $ctrl.registration.imgSrc = imageChoice[0];
                }, function (err) {
                    console.log(err);
                });
            };
        });
    }
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