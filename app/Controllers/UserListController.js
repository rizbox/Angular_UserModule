/**
 * Created by ahmed on 12/1/2014.
 */
userApp.controller('UserListController', function($scope, $http,$location,$route,$window,$filter,$loading,$rootScope,Constants) {


  //  $route.reload();
   // $window.location.reload();
    $scope.startLoading = function (name) {
        $loading.start(name);
    };

    $scope.finishLoading = function (name) {

//        window.setTimeout(function() {
//            //$scope.val = true;
//        }, 6000);
        $loading.finish(name);
    };

    var count=0;
    //console.log('totalList');
    $scope.originalList  = function (Constants){
        console.log('GetUserD2222222222222222222222222222222222222222');
        //     UserService2.getData($defer,params,$scope.filter)

        $http.get(Constants.URL+"/api/user/getall").success(function(resp)
        {
            $scope.filteredList=resp;
            $scope.originalList=resp;
            //$scope.list=JSON.stringify(resp);
            $rootScope.runCounter=$rootScope.runCounter+1;
            console.log('Loading GET.........'+$rootScope.runCounter);
            if( $rootScope.runCounter==2) {
                $scope.finishLoading('sample-2')
                $rootScope.runCounter=0;
            }
        });

    };
    $scope.filteredList = $scope.originalList ;

    $scope.config = {
        itemsPerPage: 5,
        maxPages: 5,
        fillLastPage: "yes"
    };
    $scope.updateFilteredList = function() {
        //console.log('keypress updateFilteredList');
        //console.log('scope query:: '+ $scope.query);
        //console.log('scope originalList:: '+$scope.originalList)
        $scope.filteredList = $filter("filter")($scope.originalList , $scope.query);
    };
    //$scope.config = {};
    $scope.originalList (Constants);


//    $scope.Save=function(){
//
//        console.log('SaveUser2');
//        var user={};
//        console.log('USERCODECtrl : '+$scope.USERCODE)
//        user["USERCODE"]=$scope.USERCODE;
//        user["PASSWORD"]=$scope.PASSWORD;
//        user["USERNAME"]=$scope.USERNAME;
//
//        console.log('user :: '+JSON.stringify(user));
//        UserNewService.addUser(user, notificationFactory);
//        //notificationFactory.success();
//
//    }
//    $scope.isClean = function() {
//        return angular.equals(original, $scope.customer);
//    }



})