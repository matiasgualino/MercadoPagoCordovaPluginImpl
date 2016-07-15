// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.controller('StarterCtrl', function($scope) {
  $scope.startPaymentVault = function() {
    var success = function(message) {
      alert(JSON.parse(message).issuer);
    };

    var failure = function() {
      alert("Error calling MercadoPago Plugin");
    };
 
    MercadoPago.startPaymentVault("TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a", 200, success, failure); //f2
 };
});