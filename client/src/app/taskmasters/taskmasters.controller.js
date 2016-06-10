(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('TaskmastersController', TaskmastersController);

  /** @ngInject */
  function TaskmastersController($modal) {
    var vm = this;
    vm.list_of_users = [
      {
        name: "Сидорова Елена Михайловна",
        email: "petr@mail.ru",
        password: "password",
        brigade: 2
      },
      {
        name: "Петрова Ольга Николавена",
        email: "nadiya@gmail.com",
        password: "password",
        brigade: 3
      },
      {
        name: "Николаев Егор Михайлович",
        email: "petr@mail.ru",
        password: "password",
        brigade: 1
      },
      {
        name: "Перепечко Виталий Леонидоваич",
        email: "pechka@gmail.com",
        password: "personspass",
        brigade: 5
      }
    ];
    vm.add = function() {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/taskmaster_add/taskmaster_add.html',
        controller: 'TaskmasterAddController',
        controllerAs: 'taskmaster_add',
        size: "lg"
      });
    };
    vm.delete = function() {
    };
  }

})();
