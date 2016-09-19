/**
 * Data factory.
 * @version 0.1
 * @author Ruslan Kardanov.
 */
dataFactory = function($rootScope, $http) {
    // Factory.
    var factory = {};

    // Method to do Bier from the JSON file.
    factory.getBier = function() {
        var deferred = $rootScope.loadingTracker.createPromise();
        $http({
            method: 'GET',
            url: 'src/data/bier.json'
        }).then(function success(response) {
            deferred.resolve(response.data);
        }, function fail() {
            deferred.resolve([]);
        });
        return deferred.promise;
    }

    // Returns factory.
    return factory;
}