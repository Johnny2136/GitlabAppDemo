var entryApp = angular.module("entryApp", []);

entryApp.controller("entryCtrl", function($scope, $http) {
    "use strict";

    var profile = {"firstName":"","lastName":""};

    $scope.profile = profile;

    $scope.$on("missionChangedEvent", function(event, args) {
        profile.mission = args;
        console.log("event received " + event + " - " + args);
    });

    $scope.$on("countryChangedEvent", function(event, args) {
        profile.country = args;
        console.log("event received " + event + " - " + args);
    });

    $scope.$on("postChangedEvent", function(event, args) {
        profile.post = args;
        console.log("event received " + event + " - " + args);
    });


    $scope.postData = function() {

        alert(JSON.stringify($scope.profile));

        $http({
            method: "POST",
                data: JSON.stringify($scope.profile),
                contentType: "application/json",
            url: "https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj"
            }).success(function(data, status) {

                alert("data was successfully added");

            }).error(function(data, status, headers, config) {
                alert("there was an error adding data");
            });

        };

});

entryApp.controller("StaticCtrl", function($scope) {

    $scope.regionValueChanged = function (){
        var regionElement = document.getElementById("country");
        var selectedRegion = regionElement.options[regionElement.selectedIndex].text;
        if (selectedRegion !== '') {
            console.log(selectedRegion);
            $scope.selectedRegion = selectedRegion;
            $scope.$emit("missionChangedEvent", selectedRegion);
        }
        else{
            $scope.selectedRegion = null;
            $scope.selectedCountry = null;
            $scope.suburb = null;
            $scope.$emit("missionChangedEvent", null);
        }
    };
    $scope.countryValueChanged = function () {

        var countryElement = document.getElementById("city");
        var selectedCountry = countryElement.options[countryElement.selectedIndex].text;
        if (selectedCountry !== '') {
            console.log(selectedCountry);
            $scope.selectedCountry = selectedCountry;
            $scope.$emit("countryChangedEvent", selectedCountry);
        }
        else {
            $scope.selectedCountry = null;
            $scope.suburb = null;
            $scope.$emit("countryChangedEvent", null);
        }
    };

$scope.$watch("suburb", function (newValue, oldValue, scope) {
    $scope.$emit("postChangedEvent", newValue);
});
    $scope.countries = {
        "WHA": {
            "USA": [
                "Hot Springs, AR",
		        "Atlanta, GA",
		        "Boston, MA",
		        "Buffalo, NY",
		        "Chicago, IL",
	        	"Aurora, CO",
	        	"Stamford, CT",
		        "Dallas, TX",
		        "Detroit, MI",
		        "El Paso, TX",
		        "Honolulu, HI",
		        "Houston, TX",
		        "Los Angeles, CA",
		        "Miami, FL",
		        "Minneapolis, MN",
		        "Portsmouth, NH",
		        "New Orleans, LA",
		        "New York, NY",
		        "Philadelphia, PA",
		        "San Diego, CA",
	        	"San Francisco, CA",
		        "San Juan, Puerto Rico",
		        "Seattle, WA",
		        "St. Albans, VT",
	        	"Washington, DC",
		        "Tucson, AZ"
            ],
            "Brazil": [
                "Brasilia",
                "Recife",
                "Rio de Janiero",
                "Sao Paulo"
            ],
            "Mexico": [
                "Ciudad Juarez",
                "Guadalajara",
                "Hermosillo",
                "Matamoros",
                "Merida",
                "Mexico City",
                "Monterrey",
                "Nogales",
                "Nuevo Laredo",
                "Tijuana"
            ]
        },
        "EAP": {
            "China": [
                "Beijing",
                "Shanghai",
                "Beijing",
                "Chengdu",
                "Guangzhou",
                "Shanghai",
                "Shenyang",
                "Wuhan"
            ]
        },
        "SCA": {
            "India": [
                "Chennai/Madras",
                "Hyderabad",
                "Kolkata",
                "Mumbai/Bombay",
                "New Delhi"
            ]
        }
    };
});
