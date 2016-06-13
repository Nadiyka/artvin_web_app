(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('TaskmastersController', TaskmastersController);

  /** @ngInject */
  function TaskmastersController($modal, $resource) {
    var vm = this;
    vm.taskmasters_api = $resource('http://localhost:8000/taskmasters');
    vm.taskmasters_list = vm.taskmasters_api.query();
      vm.add = function(user) {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/taskmaster_add/taskmaster_add.html',
        controller: 'TaskmasterAddController',
        controllerAs: 'taskmaster_add',
        size: "lg",
        resolve: {
          taskmaster: function () {
            return user;
          }
        }
      });
    };
    vm.delete = function() {
    };
  }

})();
