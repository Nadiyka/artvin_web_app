(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('BrigadesController', BrigadesController);

  /** @ngInject */
  function BrigadesController($resource) {
    var vm = this;
    vm.brigades_api = $resource('http://localhost:8000/brigades');
    vm.brigades_list = vm.brigades_api.query();
    vm.brigades.add = function(brigade){
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/brigade_add/brigade_add.html',
        controller: 'BrigadeAddController',
        controllerAs: 'brigade_add',
        size: "lg",
        resolve: {
          taskmaster: function () {
            return user;
          }
        }
      });
      modalInstance.result.then(function(brigade_new){
        vm.brigades_list.push(brigade_new);
      });
    };
    vm.brigades.delete = function(brigade){
      var brigades_api = $resource('http://localhost:8000/brigades/:id/ ',{id:'@id'});
      brigades_api.remove({ id: brigade.id });
      var i = vm.brigades_list.indexOf(brigade);
      if(i != -1) {
        vm.brigades_list.splice(i, 1);
      }
    };
  }
})();
