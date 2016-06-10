(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(yaMapSettings, $modal) {
    var vm = this;
    vm.work = [
      {
        number: 1,
        name: "Обрезка"
      },
      {
        number: 2,
        name: "Обломка"
      },
      {
        number: 3,
        name: "Сбор"
      },
      {
        number: 4,
        name: "Подвязка"
      }
    ];
    vm.areas = [
      {
        name: "Алиготе 6",
        brigade: "2",
        geometry: {
          type: 'Rectangle',
          coordinates: [
            [33.719, 44.689],
            [33.71956, 44.6898]
          ]
        }
      },
      {
        name: "Алиготе 7",
        brigade: "3",
        geometry: {
          type: 'Rectangle',
          coordinates: [
            [33.7161, 44.6897],
            [33.7193, 44.6874]
          ]
        }
      },
      {name: "Алиготе 8"},
      {name: "Алиготе 9"}
    ];
    vm.area = vm.areas[1];
    vm.displayed_work = vm.work[3];
    vm.dates = [2016, 2015, 2014];
    vm.dt = vm.dates[1];
    vm.selected_work = {

    };
    vm.openWork = function () {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/work_display/work_display.html',
        controller: 'WorkDisplayController',
        controllerAs: 'work_display',
        size: "lg",
        resolve: {
          work: function () {
            return vm.displayed_work
          },
          status: function () {
            return {
              done: 2500,
              total: 2500,
              date: "23.04.2016"
            }
          }
        }
      });
    };
    vm.openBrigade = function () {
      var modalInstance = $modal.open({
        animation: "true",
        templateUrl: 'app/brigade_display/brigade_display.html',
        controller: 'BrigadeDisplayController',
        controllerAs: 'brigade_display',
        size: "lg",
        resolve: {
          brigade: function () {
            return {
              number: "3",
              taskmaster: "Петрова Ольга Николавена"
            }
          },
          workers: function () {
            return [
              {
                brigade_number: "3",
                name: "Бондарь Ольга Павловна"
              },
              {
                brigade_number: "3",
                name: "Павлов Андрей Леонидович"
              }
            ]
          }
        }
      });
    }
  }
})();
