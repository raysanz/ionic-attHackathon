(function () {
  'use strict';
  angular
    .module('starter.tab-account')
    .controller('accountController', AccountCtrl);
  AccountCtrl.$inject = [];

  function AccountCtrl() {
    let $ctrl = this;
    $ctrl.settings = {
      enableFriends: true
    };
  };
})()
