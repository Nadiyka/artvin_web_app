(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('TaskmasterAddController', TaskmasterAddController);

  /** @ngInject */
  function TaskmasterAddController($modalInstance, taskmaster, $resource) {
    var vm = this;
    vm.add = true;
    if (taskmaster) {
      vm.add = false;
    }
    vm.taskmaster = taskmaster || {
        "name": "",
        "email": "",
        "password": "",
        "brigade": 0
      };
    vm.ok = function (taskmaster) {
      if (vm.add) {
        var taskmasters_api = $resource('http://localhost:8000/taskmasters/ ');
        taskmasters_api.save(taskmaster);
        $modalInstance.close();
      }
      else {
        var taskmasters_api = $resource('http://localhost:8000/taskmasters/:id/ ',{id:'@id'}, {
          'update': { method:'PUT' }
        });
        taskmasters_api.update({ id: taskmaster.id }, taskmaster);
        $modalInstance.close();
      }
    };
  }
})();
