(function () {
  'use strict';
  angular
    .module('starter.tab-test')
    .controller('testController', TestController);
  TestController.$inject = ['$http'];

  function TestController($http) {
    let $ctrl = this;
    $ctrl.testMessage = 'hola mundo'

    $ctrl.checkBox = []
    $ctrl.sliderrange = 25


    $ctrl.selected = function selected(item) {
      debugger
      var idx = $ctrl.checkBox.indexOf(item);
      if (idx > -1) {
        $ctrl.checkBox.splice(idx, 1);
      } else {
        $ctrl.checkBox.push(item);
      }

      //   $ctrl.checkBox.push(item)
    }


    function init() {
      ////fetches the city data
      getCityData()

    }

    function getCityData() {
      //   debugger
      ///https://data.lacity.org/A-Livable-and-Sustainable-City/Department-of-Recreation-and-Parks-Facility-and-Pa/ax8j-dhzm
      $http
        .get(`https://data.lacity.org/resource/xyvg-dst2.json`)
        .then(function (res) {
          $ctrl.cityResult = res.data
          ///console.log(vm.cityResult)
        })

    }
    init()
  };
})()
