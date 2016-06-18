(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadeDisplayController', BrigadeDisplayController);

  /** @ngInject */
  function BrigadeDisplayController($modalInstance, area, brigades, workers){
    var vm = this;
    vm.brigade = brigades.filter(function(value){
      return value.number == area.brigade;
    })[0];
    vm.workers = workers.filter(function(value){
      return value.brigade_number == area.brigade;
    });
    vm.ok = function () {
      $modalInstance.close();
    };
  }
})();
