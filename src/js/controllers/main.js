/**
 * Main controller.
 * @version 0.1
 * @author Ruslan Kardanov
 */
main = function($scope, $rootScope, $location, $window, promiseTracker) {

    // Creating new loading tracker.
    $rootScope.loadingTracker = promiseTracker('loadingTracker');

    // Handling app width/height.
    $rootScope.width = $window.innerWidth;
    $rootScope.height = $window.innerHeight;
    angular.element($window).bind('resize', function () {
        $rootScope.width = $window.innerWidth;
        $rootScope.height = $window.innerHeight;
        if (!$scope.$$phase) { $scope.$apply(); }
    });

    // App navigation. >>
    // Going to the location with path specified.
    $rootScope.goTo = function(path) {
        if (!$rootScope.ifHere(path)) {
            $location.path(path);
        }
    }
    // Checking if user is in the location with path specified.
    $rootScope.ifHere = function(path) {
        return $location.path() === path;
    }
    // <<
}