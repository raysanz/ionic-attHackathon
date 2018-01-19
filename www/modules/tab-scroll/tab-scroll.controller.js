(function () {
    angular.module('starter.tab-scroll')
        .controller('scrollController', ScrollController);
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
        let $ctrl = this;
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
                $cordovaImagePicker.getPictures(options)
                    .then(function (imageChoice) {
                        $ctrl.registration.imgSrc = imageChoice[0];
                    },
                    function (err) {
                        console.log(err);
                    });
            };
        });
    }
})();