'use strict';
angular.module('bier-gg-app.version.version-directive', []).directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
        elm.text(version);
    };
}]);