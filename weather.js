var app = angular.module('weatherApp', []);

app.controller('weatherCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.getWeather = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;

        $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' +
          $scope.latitude + '&lon=' + $scope.longitude + '&units=imperial'
        ).then(function(data) {
          $scope.currentTemp = Math.floor(data.data.main.temp);
          $scope.locationName = data.data.name;
          $scope.icon = data.data.weather[0].icon;
          $scope.fahrenheit = 'fahrenheit';
          $scope.city = $scope.locationName;
        });

        // $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' +
        //   $scope.latitude + '&lon=' + $scope.longitude + '&units=imperial'
        // ).then(function(data) {
        //   $scope.forecast = data.data.list;
        // });
    });

    $scope.getTemp = function(city) {
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' +
        city + '&units=imperial').then(function(data) {
          $scope.currentTemp = Math.floor(data.data.main.temp);
          $scope.locationName = data.data.name;
          $scope.icon = data.data.weather[0].icon;
          $scope.fahrenheit = 'fahrenheit';
      });
    };
  };

}]);


