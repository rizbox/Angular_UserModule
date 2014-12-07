/**
 * Created by ahmed on 11/29/2014.
 */

userApp.factory("MenuService", function($http, $filter,$angularCacheFactory) {

//    function filterData(data, filter){
//        return $filter('filter')(data, filter)
//    }

//    function orderData(data, params){
//        return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
//    }
//
//    function sliceData(data, params){
//        return data.slice((params.page() - 1) * params.count(), params.page() * params.count())
//    }
//
//    function transformData(data,filter,params){
//        return sliceData( orderData( filterData(data,filter), params ), params);
//    }

//    var service = {
//        cachedData:[],
//        getData:function($defer){
//            if(service.cachedData.length>0){
//               console.log("using cached data")
//               var filteredData = filterData(service.cachedData,filter);
//               //var transformedData = sliceData(orderData(filteredData,params),params);
//               //params.total(filteredData.length)
//               //$defer.resolve(transformedData);
//                $defer.resolve(filteredData);
//            }
//            else{
//            console.log("fetching data Menu SErvice")
//            $http.get("http://localhost:42848/api/menu/get/5").success(function(resp)
//            {
//                //console.log('GETALL:::'+ JSON.stringify(resp));
//                //angular.copy(resp,service.cachedData)
//               // params.total(resp.length)
//               // var filteredData = $filter('filter')(resp, filter);
//               // var transformedData = transformData(resp,filter,params)
//                service= resp;
//                //$defer.resolve(eval(JSON.parse(resp)));
//            });
//            }
//
//        }
//    }; var service = {
//        cachedData:[],
//        getData:function($defer){
//            if(service.cachedData.length>0){
//               console.log("using cached data")
//               var filteredData = filterData(service.cachedData,filter);
//               //var transformedData = sliceData(orderData(filteredData,params),params);
//               //params.total(filteredData.length)
//               //$defer.resolve(transformedData);
//                $defer.resolve(filteredData);
//            }
//            else{
//            console.log("fetching data Menu SErvice")
//            $http.get("http://localhost:42848/api/menu/get/5").success(function(resp)
//            {
//                //console.log('GETALL:::'+ JSON.stringify(resp));
//                //angular.copy(resp,service.cachedData)
//               // params.total(resp.length)
//               // var filteredData = $filter('filter')(resp, filter);
//               // var transformedData = transformData(resp,filter,params)
//                service= resp;
//                //$defer.resolve(eval(JSON.parse(resp)));
//            });
//            }
//
//        }
//    };


   // var service = {};
    return {
        getMenu: function (Constants) {
        return  $http.get(Constants.URL+"/api/menu/get/5");
        }
    }
    //return service;

//    $angularCacheFactory('dataCache', {
//        maxAge: 90000, // Items added to this cache expire after 15 minutes.
//        cacheFlushInterval: 3600000, // This cache will clear itself every hour.
//        deleteOnExpire: 'aggressive' // Items will be deleted from this cache right when they expire.
//    });

//    return {
//        getMenu: function () {
//            //console.log('cacheFac :: '+  $cacheFactory.get('http://localhost:42848/api/menu/get/5'));
//            var deferred = $q.defer(),
//                start = new Date().getTime();
//
//            $http.get('http://localhost:42848/api/menu/get/5' , {
//                cache: $angularCacheFactory.get('dataCache')
//            }).success(function (data) {
//                console.log('time taken for request: ' + (new Date().getTime() - start) + 'ms');
//                deferred.resolve(data);
//            });
//            return deferred.promise;
//
//
//        }
//    };

//         return $http.get("http://localhost:42848/api/menu/get/5", {
//                cache: true
//            });

//    return $http.get("http://localhost:42848/api/menu/get/5");
//
//
    });
