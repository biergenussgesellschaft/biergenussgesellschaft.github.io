'use strict';
angular.module('bier-gg-app.version.interpolate-filter', []).filter('interpolate',
    ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]
);