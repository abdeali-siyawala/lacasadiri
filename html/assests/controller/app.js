// app.js
var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('ricerca', {
        url: '/ricerca',
        templateUrl: 'ricerca.html'
    })

    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })

});