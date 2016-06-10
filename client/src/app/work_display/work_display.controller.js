(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('WorkDisplayController', WorkDisplayController);

  /** @ngInject */
  function WorkDisplayController($modalInstance, work, status) {
    var vm = this;
    vm.work = work;
    vm.status = status;
    vm.percentage = (status.done/status.total)*100;
    vm.ok = function () {
      $modalInstance.close();
    };
  }
})();
