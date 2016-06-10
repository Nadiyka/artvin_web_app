(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('TaskmasterAddController', TaskmasterAddController);

  /** @ngInject */
  function TaskmasterAddController($modalInstance) {
    var vm = this;
    vm.taskmaster = {
      name: "Николаев Егор Михайлович",
      email: "petr@mail.ru",
      password: "password",
      brigade: 1
    };
    vm.ok = function () {
      $modalInstance.close();
    };
  }
})();
