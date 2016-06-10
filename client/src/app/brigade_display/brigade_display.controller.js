(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadeDisplayController', BrigadeDisplayController);

  /** @ngInject */
  function BrigadeDisplayController($modalInstance, brigade, workers){
    var vm = this;
    vm.brigade = brigade;
    vm.workers = workers;
    vm.ok = function () {
      $modalInstance.close();
    };
  }
})();
