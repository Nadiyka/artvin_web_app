(function() {
  'use strict';

  angular
    .module('ArtVinWebApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
