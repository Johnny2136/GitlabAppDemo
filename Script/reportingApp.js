var reportingApp = angular.module('reportingApp', []);
'use strict';
<<<<<<< HEAD
reportingApp.controller('repoCtrl', function($scope, $http) {
=======
reportingApp.controller('repoCtrl', function ($scope, $http) {


    $scope.appovalChanged = function(dataIndexId, dataId) {
        //console.log("event received - dataIndexId is " + dataIndexId);

        if ($scope.periodic[dataIndexId]['isApproved'] == false)
        {
            $scope.periodic[dataIndexId]['approvalDate'] = new Date();
            $scope.periodic[dataIndexId]['isApproved'] = true;


        }
        else
        {
            $scope.periodic[dataIndexId]['approvalDate'] = "";
            $scope.periodic[dataIndexId]['isApproved'] = false;

        }

        $http({
            data: $scope.periodic[dataIndexId],
            contentType: "application/json",
            method: 'POST',
            url: 'https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj'
        }).success(function (data, status) {
            console.log('data successfully posted');

        }).error(function (data, status) {
            console.log('data post failed');

        });


    };
>>>>>>> release/build-2

        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj'

        }).success(function(data, status) {
            $scope.periodic = data;
<<<<<<< HEAD
=======

>>>>>>> release/build-2
        });

  


/*
        $http({
            method: 'POST',
            data: JSON.stringify({"catagory": " IV","txdate": "2014-05-01","activity": "codeing","hours": "8","comment": "yada yada yada","mission": "CST","country": "USA","post": "DC","user": "Johnny"}),
            contentType: "application/json",
            url: 'https://api.mongolab.com/api/1/databases/apptest/collections/timekeepingEntries?apiKey=sXsYo54JNRbcU9mm5RHrCGqd21hOY2lC'
        }).success(function(data, status) {
            alert("data was successfully added");
        }).error(function(data, status, headers, config) {
            alert("there was an error adding data");
        });
*/
    $scope.date = new Date();
});

