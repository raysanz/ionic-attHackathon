(function () {
    'use strict';
    angular
        .module('starter.tab-dash')
        .controller('dashController', DashController);

    DashController.$inject = [];
    function DashController() {
        var $ctrl = this;
        $ctrl.text = "hello how are you doing today?";

    };
})()
