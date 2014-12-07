/**
 * Created by ahmed on 12/2/2014.
 */

userApp.controller("HeaderController", function($scope,$rootScope, $http,$location,$angularCacheFactory,MenuService,Constants, $cookieStore) {
    //var $httpDefaultCache =$cacheFactory.get('$http');
    //$httpDefaultCache.removeAll();
    console.log('list angular-tables');


    $scope.content = "headerLogin";

    $scope.showContent = function( ) {
        //console.log('showContent');
       // console.log('mToken:: '+$angularCacheFactory.get('cachedData').get('menuToken'))
        $rootScope.globals = $cookieStore.get('globals') || {};

        if ($angularCacheFactory.get('cachedData').get('menuToken') == 'Y'){
            console.log('menuToken Y');
            if (!$rootScope.globals.currentUser){
                console.log('menuToken currentUser');
                return "headerLogin";
            }
            return "headerUser";
        }else{
            console.log('Else');
            return "headerLogin";
        }




        if ($location.path() !== '/Login' && !$rootScope.globals.currentUser) {
            $location.path('/Login');
        }


    };

    $scope.issue = {
        status: $scope.showContent()
    };
//headerUser
//    $scope.logout = function () {
//        console.log('logoutFire.......');
//      //  $angularCacheFactory.removeAll();
//        $angularCacheFactory.clearAll();
//        $location.path('/Login');
//
//    }
});