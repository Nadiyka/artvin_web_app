(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('AreasController', AreasController);

  /** @ngInject */
  function AreasController($resource, areas, $modal) {
    var vm = this;
    vm.currentPage = 1;
    vm.areas_api = $resource('http://localhost:8000/areas');
    vm.areas_list=areas;
    vm.totalItems = vm.areas_list.length;
    vm.area = {
      id: vm.areas_list[0].id,
      name: vm.areas_list[0].name,
      brigade: vm.areas_list[0].brigade,
      geometry: {
        type: 'Rectangle',
        coordinates: [
          [Number(vm.areas_list[0].coordLat1), Number(vm.areas_list[0].coordLat2)],
          [Number(vm.areas_list[0].coordLon1), Number(vm.areas_list[0].coordLon2)]
        ]
      }
    };

    vm.pageChanged = function() {
      vm.area = {
        id: vm.areas_list[currentPage-1].id,
        name: vm.areas_list[currentPage-1].name,
        brigade: vm.areas_list[currentPage-1].brigade,
        geometry: {
          type: 'Rectangle',
          coordinates: [
            [Number(vm.areas_list[currentPage-1].coordLat1), Number(vm.areas_list[currentPage-1].coordLat2)],
            [Number(vm.areas_list[currentPage-1].coordLon1), Number(vm.areas_list[currentPage-1].coordLon2)]
          ]
        }
      };
    };

    vm.add = function(area){
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/area_add/area_add.html',
        controller: 'AreaAddController',
        controllerAs: 'area_add',
        size: "lg",
        resolve: {
          area: function () {
            return area;
          }
        }
      });
      modalInstance.result.then(function(brigade_new){
        vm.areas_api = $resource('http://localhost:8000/areas');
        vm.areas_list = vm.areas_api.query();
        vm.pageChanged();
      });
    };
    vm.delete = function(area){
      var areas_api = $resource('http://localhost:8000/areas/:id/ ',{id:'@id'});
      areas_api.remove({ id: area.id });
      vm.areas_api = $resource('http://localhost:8000/areas');
      vm.areas_list = vm.areas_api.query();
      vm.pageChanged();
    };
  }
})();
