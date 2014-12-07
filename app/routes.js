/**
 * Created by ahmed on 11/29/2014.
 */


'use strict';
var userApp = angular.module('userApp', ['ngRoute','angular-table','jmdobry.angular-cache','ngCookies','angular-loading-bar','darthwade.dwLoading','ngBusy']);

userApp.config(function($routeProvider,$angularCacheFactoryProvider){
   $routeProvider.when(
       '/Login',
       {
           templateUrl:'partials/Login/Login.html',
           controller:'LoginController'
       }
   );
    $routeProvider.when(
        '/UserList',
        {
            templateUrl:'partials/Login/UserList.html',
            controller:'UserListController'
        }
    );
    $routeProvider.otherwise(
        {

            redirectTo: '/Login'
        });
    $angularCacheFactoryProvider.setCacheDefaults({
        maxAge: 3600000,
        deleteOnExpire: 'aggressive'
    });
}).run(function ($angularCacheFactory,$rootScope,$location, $cookieStore, $http) {
    var info = $angularCacheFactory.info();
    $rootScope.runCounter = 0; //global variable
    var cachedData = $angularCacheFactory('cachedData',{ storageMode: 'localStorage', maxAge: 60000});

    console.log(info.cacheDefaults); // output below

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        var area = $location.url().split('/')[1];

        $rootScope.globals = $cookieStore.get('globals') || {};

        if ($location.path() !== '/Login' && !$rootScope.globals.currentUser) {
            $location.path('/Login');
        }

    });

        // {
    //    capacity: Number.MAX_VALUE,
    //    maxAge: 3600000,
    //    deleteOnExpire: 'aggressive',
    //    onExpire: null,
    //    cacheFlushInterval: null,
    //    storageMode: 'none',
    //    storageImpl: null,
    //    recycleFreq: 1000,
    //    disabled: false,
    //    verifyIntegrity: false
    // }
   // var cachedData = $angularCacheFactory('cachedData');

   // cachedData.put('C1','SCHOOL')
    //cachedData.info().maxAge; // 3600000
    //cachedData.info().deleteOnExpire; // "aggressive"
}).constant("Constants", {
    "URL": "http://localhost:42848"
});

//userApp.value('globals', {
//       runCounter : 0
//   });
//userApp.value('runCounter', '0');

userApp.config(['$httpProvider','cfpLoadingBarProvider', function($httpProvider,cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

//
//userApp.run(['$rootScope', '$location', '$cookieStore', '$http',
//    function ($rootScope, $location, $cookieStore, $http) {
//
//    }]);

