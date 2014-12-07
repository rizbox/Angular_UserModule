/**
 * Created by ahmed on 11/29/2014.
 */

//(function(){
//    "use strict";
//    userApp.controller("MainController",MainController);
//
//    function MainController() {
//        console.log('MainController');
//        var vm = this;
//        vm.menus = function () {
//            $http.get("http://localhost:42848/api/menu/get/5").success(function (resp) {
//                console.log('resp:: ' + JSON.parse(resp));
//                console.log('resp2:: ' + eval(JSON.parse(resp)));
//                vm.menu = eval(JSON.parse(resp));
//            });
//        };
//        vm.menus();
//    }
//});


userApp.controller("MainController", function($scope, $http,$location,$angularCacheFactory,MenuService,Constants) {
    //var $httpDefaultCache =$cacheFactory.get('$http');
    //$httpDefaultCache.removeAll();
    console.log('list angular-tables');

    $scope.logout = function () {

        console.log('logout296......')
        //$angularCacheFactory.removeAll();
        $angularCacheFactory.clearAll();
        $location.path('/Login');

    }

    $scope.userid = 'ahmed';
    // function to evaluate if a number is even
    $scope.IsAuth = function(authMode) {

        if (authMode == 'login') {

        if ($angularCacheFactory.get('cachedData').get('menu') == null || $angularCacheFactory.get('cachedData').get('menu') == 'undefined')
            return true;
        else
            return false;
        }
        if(authMode=='logout') {
           // console.log('logout......')
            if ($angularCacheFactory.get('cachedData').get('menu') == null || $angularCacheFactory.get('cachedData').get('menu') == 'undefined')
                return false;
            else
                return true;
        }

    };

    //$scope.menus=MenuService.getData();

    //console.log('cachedDATA:: '+cachedData.length);
//    if(cachedData.length>0){
//
//        console.log('Cached');
//
//    }

//    var newCache = $angularCacheFactory('newCache5', {
//        maxAge: 10000 // Items expire after 1 second, but we don't know it until the item is requested
//    });
   // var someCache = $angularCacheFactory.get('someCache');


   // if( $angularCacheFactory.get('cachedData')!='undefined') {
   //     console.log('CachedDATA 1::' + $angularCacheFactory.get('cachedData').get('menu'));
   // }


    //console.log('CachedDATA 2::'+   $angularCacheFactory.get('cachedData').get('C1'));
   // var cachedData = $angularCacheFactory.get('cachedData');
//    console.log('CacheFacInfo:: '+cachedData.info());
//    console.log('GetMenu:: '+cachedData.get('menu'));
//    console.log('menu b4::: '+cachedData.get('menu'));
//   // var cachedData = $angularCacheFactory('cachedData');
//    cachedData.put('denver', 'broncos5');
//    console.log('denver ::: '+cachedData.get('denver'));
//    console.log('menu ::: '+cachedData.get('menu'));

    if($angularCacheFactory.get('cachedData').get('menuToken')=='Y') {
        if ($angularCacheFactory.get('cachedData').get('menu') == null || $angularCacheFactory.get('cachedData').get('menu') == 'undefined') {
            console.log('undefined/NULL ::: ');

         //   $activityIndicator.startAnimating();

            $scope.menus = MenuService.getMenu(Constants)
                .success(function (data) {
                    //console.log('ResultDATA :: '+JSON.stringify(data));
                    //cachedData.put('menu', eval(JSON.parse(data)));
                    //$angularCacheFactory.get('cachedData').put('menu',data);
                    $angularCacheFactory.get('cachedData').put('menu', data);
                    //console.log('menu ::: '+cachedData.get('menu'));
                    //console.log('menu ::: '+ $angularCacheFactory.get('cachedData').get('menu'));
                    //angular.copy(data,cachedData)
                    $scope.menus = eval(JSON.parse(data));
                    //$timeout(function () {
         //               $activityIndicator.stopAnimating();
                    //}, 3000)

                })
                .error(function (data) {
//                        $scope.error = data.Message;
//                        $scope.dataLoading = false;
                });

        } else {
            // $scope.menus="";
            $scope.menus = eval(JSON.parse($angularCacheFactory.get('cachedData').get('menu')));
        }


    }
    console.log('list angular-tables AFTER');

//    $scope.menus = function (){
//        console.log('list angular-tables');
//        //     UserService2.getData($defer,params,$scope.filter)
//
//     var item= $cacheFactory.get('http://localhost:42848/api/menu/get/5');
//        console.log('item::: '+item);
//
//        $http.get("http://localhost:42848/api/menu/get/5", { cache: true }).success(function(resp)
//        {
//           // console.log('resp:: '+JSON.parse(resp));
//           // console.log('resp2:: '+eval(JSON.parse(resp)));
////alert(resp);
//            // var menuData=JSON.parse(resp);
//            $scope.menus=eval(JSON.parse(resp));
//
//            // $scope.menus=[{title:'Menu1',action:'#',menus:[{title:'M1',action:'#'},{title:'M2',action:'#'},{title:'M3',action:'#'}]},{title:'Menu2',action:'#',menus:[{title:'T1',action:'#'},{title:'T2',action:'#'}]}];
//            //$scope.list=JSON.stringify(resp);
//        });
//    };
//
//    $scope.menus();

});
//$(document).ready(function() {});
