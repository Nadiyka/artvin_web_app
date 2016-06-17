(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadesController', BrigadesController);

  /** @ngInject */
  function BrigadesController($modal, $resource) {
    var vm = this;
    vm.brigades_api = $resource('http://localhost:8000/brigades');
    vm.brigades_list = vm.brigades_api.query();
    vm.add = function(brigade){
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/brigade_add/brigade_add.html',
        controller: 'BrigadeAddController',
        controllerAs: 'brigade_add',
        size: "lg",
        resolve: {
          brigade: function () {
            return brigade;
          }
        }
      });
      modalInstance.result.then(function(brigade_new){
        vm.brigades_api = $resource('http://localhost:8000/brigades');
        vm.brigades_list = vm.brigades_api.query();
      });
    };
    vm.delete = function(brigade){
      var brigades_api = $resource('http://localhost:8000/brigades/:id/ ',{id:'@id'});
      brigades_api.remove({ id: brigade.id });
      vm.brigades_api = $resource('http://localhost:8000/brigades');
      vm.brigades_list = vm.brigades_api.query();
    };
  }
})();
