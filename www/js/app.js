var app = angular.module('caffeinehit', [
	'ionic',
	'ngCordova',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDarkContent();
		}
	});
});

// <TOKEN> Received from www.codecraftpro.com after signing up for newsletter
app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token <TOKEN_HERE>';
});
