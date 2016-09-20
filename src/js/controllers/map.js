/**
 * Map controller.
 * @version 0.1
 * @author Ruslan Kardanov
 */
map = function($scope, $window, $timeout, dataFactory) {

    // Setting up custom map marker icon.
    var icon = {
        iconUrl: 'src/images/map-marker.png',
        iconSize: [24, 24]
    };

    // Configuring basic map data.
    angular.extend($scope, {
        maxBounds: {
            southWest: {
                lat: 46.0,
                lng: 5.0
            },
            northEast: {
                lat: 57.0,
                lng: 15.0
            }
        },
        center: {
            lat: 48.401082,
            lng: 9.987608,
            zoom: 9
        },
        defaults: {
            zoomControl: false,
            minZoom: 5,
            maxZoom: 17
        },
        layers: {
            baselayers: {
                toner: {
                    name: 'toner',
                    type: 'xyz',
                    url: 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
                    layerOptions: {
                        attribution: '<a href="http://stamen.com">Stamen Design</a>, ' + '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | ' + '<a href="http://www.openstreetmap.org/copyright">OpenStreetMaps</a>',
                        showOnSelector: false
                    }
                }
            },
            overlays: {
                bier: {
                    name: 'bier',
                    type: 'markercluster',
                    visible: true,
                    layerOptions: {
                        showCoverageOnHover: false,
                        maxClusterRadius: 65
                    },
                    layerParams: {
                        showOnSelector: false
                    }
                }
            }
        }
    });

    $timeout(function () {
        dataFactory.getBier().then(function (__markers) {
            if (typeof __markers !== 'undefined' && __markers.length > 0) {
                __markers.forEach(function (__marker) {
                    __marker.icon = icon;
                });
                angular.extend($scope, {
                    markers: __markers
                });
            }
        });
    }, 100);

    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Repositioning center of the map.
        $scope.center.lat = args.model.lat;
        $scope.center.lng = args.model.lng;
        // Changing zoom (if required).
        if ($scope.center.zoom < 10) {
            $scope.center.zoom = 10;
        }
        if (!$scope.$$phase) { $scope.$apply(); }
    });
}