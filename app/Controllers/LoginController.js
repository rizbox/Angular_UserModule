/**
 * Created by ahmed on 11/30/2014.
 */

userApp.controller('LoginController',
   // ['$scope', '$http' ,'$angularCacheFactory','$rootScope', '$location', 'AuthenticationService','MenuService',
        function ($scope, $http,$angularCacheFactory,$rootScope, $location, AuthenticationService,MenuService,Constants,$window) {
            // reset login status
//            console.log('before Authentication Ctrl');
//            AuthenticationService.ClearCredentials();
//            console.log('after Authentication Ctrl');

//            $scope.logout = function () {
//                $angularCacheFactory.removeAll();
//
//            }

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
                    if ($angularCacheFactory.get('cachedData').get('menu') == null || $angularCacheFactory.get('cachedData').get('menu') == 'undefined')
                        return false;
                    else
                        return true;
                }

            };


            $scope.menus =function(){
                MenuService.getMenu(Constants)
                .success(function (data) {
                    //console.log('ResultDATA :: '+JSON.stringify(data));
                    //cachedData.put('menu', eval(JSON.parse(data)));
                    //$angularCacheFactory.get('cachedData').put('menu',data);
                    $angularCacheFactory.get('cachedData').put('menu', data);
                    //console.log('menu ::: '+cachedData.get('menu'));
                    //console.log('menu ::: '+ $angularCacheFactory.get('cachedData').get('menu'));
                    //angular.copy(data,cachedData)
                    $scope.menus = eval(JSON.parse(data));

                })
                .error(function (data) {
//                        $scope.error = data.Message;
//                        $scope.dataLoading = false;
                });
            }


            console.log('before Authentication Ctrl');
            AuthenticationService.ClearCredentials();
            console.log('after Authentication Ctrl');

            $scope.login = function () {
                console.log('login Ctrl');



                AuthenticationService.Login($scope.username, $scope.password,Constants)
                    .success(function (data) {
                        console.log('ResultDATA :: '+JSON.stringify(data));
                        AuthenticationService.SetCredentials($scope.username, $scope.password);
                        $angularCacheFactory.get('cachedData').put('menuToken','Y');
                        $location.path('/UserList');
                    })
                    .error(function (data) {
//                        $scope.error = data.Message;
//                        $scope.dataLoading = false;
                    });




               // $scope.menus();

               // $route.reload();
//                $scope.$watch('menus', function() {
//                    $scope.menus();
//                }, true);

               // $window.location.reload();
               // $location.path('/UserList');

                //$window.location.reload();

                // $scope.dataLoading = true;
//$rootScope
//,'$rootScope'
                //var user={};
                //user["PASSWORD"]=$scope.PASSWORD;
                //user["USERNAME"]=$scope.USERNAME;
                // AuthenticationService.Login(user);


//                AuthenticationService.Login($scope.username, $scope.password,Constants)
//                    .success(function (data) {
//                        console.log('ResultDATA :: '+JSON.stringify(data));
//                        AuthenticationService.SetCredentials($scope.username, $scope.password);
//                        $location.path('/Login');
//                    })
//                    .error(function (data) {
////                        $scope.error = data.Message;
////                        $scope.dataLoading = false;
//                    });
            };
        }
//]
);