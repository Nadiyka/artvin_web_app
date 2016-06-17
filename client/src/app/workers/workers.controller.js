(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('WorkersController', WorkersController);

  /** @ngInject */
  function WorkersController($modal, $resource) {
    var vm = this;
    vm.workers_api = $resource('http://localhost:8000/workers');
    vm.workers_list = vm.workers_api.query();

    vm.add = function(worker){
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/worker_add/worker_add.html',
        controller: 'WorkerAddController',
        controllerAs: 'worker_add',
        size: "lg",
        resolve: {
          worker: function () {
            return worker;
          }
        }
      });
      modalInstance.result.then(function(){
        vm.workers_api = $resource('http://localhost:8000/workers');
        vm.workers_list = vm.workers_api.query();
      });
    };
    vm.delete = function(worker){
      var workers_api = $resource('http://localhost:8000/workers/:id/ ',{id:'@id'});
      workers_api.remove({ id: worker.id });
      vm.workers_list = workers_api.query();
    };
  }
})();
