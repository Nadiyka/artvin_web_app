(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(yaMapSettings, $modal, $resource, areas) {
    var vm = this;
    vm.areas_api = $resource('http://localhost:8000/areas');
    vm.areas_list = areas;
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
    vm.worktypes_api = $resource('http://localhost:8000/worktypes');
    vm.worktypes_list = vm.worktypes_api.query();
    vm.displayed_work = vm.worktypes_list[0];
    vm.reports_api = $resource('http://localhost:8000/reports');
    vm.reports_list = vm.reports_api.query();


    vm.dates = [2016, 2015, 2014];
    vm.dt = vm.dates[0];

    vm.areaChanged = function(selectedarea) {
      vm.area = {
        id: selectedarea.id,
        name: selectedarea.name,
        brigade: selectedarea.brigade,
        geometry: {
          type: 'Rectangle',
          coordinates: [
            [Number(selectedarea.coordLat1), Number(selectedarea.coordLat2)],
            [Number(selectedarea.coordLon1), Number(selectedarea.coordLon2)]
          ]
        }
      };
    };
    vm.openWork = function (area, displayed_work, year) {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/work_display/work_display.html',
        controller: 'WorkDisplayController',
        controllerAs: 'work_display',
        size: "lg",
        resolve: {
          work: displayed_work,
          reports: function () {
            var reports_api = $resource('http://localhost:8000/reports/ ');
            return reports_api.query().$promise;
          },
          year: year,
          rows: function() {
            var rows_api = $resource('http://localhost:8000/rows/ ');
            return rows_api.query().$promise;
          }
        }
      });
    };
    vm.openBrigade = function (area) {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/brigade_display/brigade_display.html',
        controller: 'BrigadeDisplayController',
        controllerAs: 'brigade_display',
        size: "lg",
        resolve: {
          area: area,
          brigades: function () {
            var brigades_api = $resource('http://localhost:8000/brigades');
            return brigades_api.query().$promise;
          },
          workers: function () {
            vm.workers_api = $resource('http://localhost:8000/workers');
            return vm.workers_api.query().$promise;
          }
        }
      });
    }
  }
})();
