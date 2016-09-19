'use strict';

// Configuring app.
var bierGGApp = angular.module('bier-gg-app', [
    'ngRoute',
    'bier-gg-app.version',
    'ngMaterial',
    'pascalprecht.translate',
    'leaflet-directive',
    'ajoslin.promise-tracker',
    'cgBusy'
]);

// Setting controllers.
bierGGApp.controller('MainCtrl', main);

// Configuring routing.
bierGGApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home' , {templateUrl: 'src/views/home.html',  controller: home})
        .when('/map' , {templateUrl: 'src/views/map.html',  controller: map})
            .otherwise({redirectTo: '/map'});
}]);

// Setting color theme.
bierGGApp.config(function($mdThemingProvider) {
    // Defining white palette.
    $mdThemingProvider.definePalette('white', {
        '50': 'ffffff', '100': 'ffffff', '200': 'ffffff', '300': 'ffffff', '400': 'ffffff', '500': 'ffffff',
        '600': 'ffffff', '700': 'ffffff', '800': 'ffffff', '900': 'ffffff', 'A100': 'ffffff', 'A200': 'ffffff',
        'A400': 'ffffff', 'A700': 'ffffff', 'contrastDefaultColor': 'dark'
    });
    // Setting default theme.
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {'default':'900'})
        .accentPalette('blue-grey', {'default':'300'})
        .warnPalette('white', {'default':'50'});
});

// Disabling debug logging.
bierGGApp.config(function($logProvider) {
    $logProvider.debugEnabled(false);
});
// Disabling click hijacking.
bierGGApp.config(function($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
});
// Data factory.
bierGGApp.factory('dataFactory', dataFactory);

// Setting translation provider.
bierGGApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations(translations_en_US.LOCALE, translations_en_US);
    $translateProvider.preferredLanguage(translations_en_US.LOCALE);
    $translateProvider.useSanitizeValueStrategy(null);
}]);