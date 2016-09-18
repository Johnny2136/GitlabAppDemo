var entryApp = angular.module("entryApp", []);

entryApp.controller("entryCtrl", function($scope, $http) {
    "use strict";

    var profile = {
        "firstName": "",
        "lastName": ""
    };

    $scope.profile = profile;
    profile.empDate = new Date();

    $scope.resetForm = function () {

        profile.empDate = new Date();
        profile.firstName = "";
        profile.lastName = "";
        profile.userEmail = "";
        profile.posTyp = "";
        profile.govCont = "";
        profile.contName = "";
        profile.govOffice = "";
        profile.mission = "";
        profile.country = "";
        profile.post = "";
        profile.reason = "";
        profile.coder = "";
        profile.coderDes = "";
        profile.proCoder = "";
        profile.proCoderDes = "";
        profile.cmExp = "";
        profile.cmExpDes = "";
        profile.applicationDate = new Date();
        profile.isApproved = false;
        profile.approvalDate = null;
        var countryElement = document.getElementById("country");
        countryElement.getElementsByTagName('option')[0].selected = 'selected'
        var cityElement = document.getElementById("city");
        cityElement.getElementsByTagName('option')[0].selected = 'selected'
        var suburbElement = document.getElementById("suburb");
        suburbElement.getElementsByTagName('option')[0].selected = 'selected'
    };


    $scope.postData = function() {


        $http({
            method: "POST",
                data: JSON.stringify($scope.profile),
                contentType: "application/json",
            url: "https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj"
            }).success(function(data, status) {

                alert("data was successfully added");
                //Clears the form after post... jj
                $scope.profile = null;
                $scope.selectedRegion = null;
                $scope.selectedCountry = null;
                $scope.suburb = null;

            }).error(function(data, status, headers, config) {
                alert("there was an error adding data");
            });

        $scope.resetForm();

    };

    

    $scope.regionValueChanged = function () {
        var regionElement = document.getElementById("country");
        var selectedRegion = regionElement.options[regionElement.selectedIndex].text;
        if (selectedRegion !== '') {
            console.log(selectedRegion);
            $scope.selectedRegion = selectedRegion;
            $scope.$emit("missionChangedEvent", selectedRegion);
            profile.mission = selectedRegion;

        }
        else {
            $scope.selectedRegion = null;
            $scope.selectedCountry = null;
            $scope.suburb = null;
            $scope.$emit("missionChangedEvent", null);
            profile.mission = null;
        }


    };
    $scope.countryValueChanged = function () {

        var countryElement = document.getElementById("city");
        var selectedCountry = countryElement.options[countryElement.selectedIndex].text;
        if (selectedCountry !== '') {
            console.log(selectedCountry);
            $scope.selectedCountry = selectedCountry;
            profile.country = selectedCountry;
           
        }
        else {
            $scope.selectedCountry = null;
            $scope.suburb = null;
            profile.country = null;
        }
    };


    $scope.$watch("suburb", function (newValue, oldValue, scope) {
        profile.post = newValue;

    });


    $scope.countries = {
        "AF": {
            "Angola": [
                "Luanda"
            ],
            "Benin": [
                "Cotonou"
            ],
            "Botswana": [
                "Gaborone"
            ],
            "Burkina Faso": [
                "Ouagadougou"
            ],
            "Burundi": [
                "Bujumbura"
            ],
            "Cameroon": [
                "Douala",
                "Yaounde"
            ],
            "Cape Verde": [
                "Praia"
            ],
            "Central African Rep": [
                "Bangui"
            ],
            "Chad": [
                "N'djamena"
            ],
            "Congo": [
                "Brazzaville"
            ],
            "Congo (Kinshasa)": [
                "Kinshasa"
            ],
            "Djibouti": [
                "Djibouti"
            ],
            "Equatorial Guinea": [
                "Malabo"
            ],
            "Eritrea": [
                "Asmara"
            ],
            "Ethiopia": [
                "Addis Ababa",
                "Addis Ababa"
            ],
            "Gabon": [
                "Libreville"
            ],
            "Ghana": [
                "Accra"
            ],
            "Guinea": [
                "Conakry"
            ],
            "Kenya": [
                "Nairobi"
            ],
            "Lesotho": [
                "Maseru"
            ],
            "Liberia": [
                "Monrovia"
            ],
            "Madagascar": [
                "Antananarivo"
            ],
            "Malawi": [
                "Lilongwe"
            ],
            "Mali": [
                "Bamako"
            ],
            "Mauritania": [
                "Nouakchott"
            ],
            "Mauritius": [
                "Port Louis"
            ],
            "Mozambique": [
                "Maputo"
            ],
            "Namibia": [
                "Windhoek"
            ],
            "Niger": [
                "Niamey"
            ],
            "Nigeria": [
                "Abuja",
                "Lagos"
            ],
            "Rwanda": [
                "Kigali"
            ],
            "Senegal": [
                "Dakar"
            ],
            "Sierra Leone": [
                "Freetown"
            ],
            "South Africa": [
                "Cape Town",
                "Durban",
                "Johannesburg",
                "Pretoria"
            ],
            "Sudan": [
                "Juba",
                "Khartoum"
            ],
            "Swaziland": [
                "Mbabane"
            ],
            "Tanzania": [
                "Dar es Salaam"
            ],
            "The Gambia": [
                "Banjul"
            ],
            "Togo": [
                "Lome"
            ],
            "Uganda": [
                "Kampala"
            ],
            "Zambia": [
                "Lusaka"
            ],
            "Zimbabwe": [
                "Harare"
            ]
        },
        "EAP": {
            "Australia": [
                "Canberra",
                "Melbourne",
                "Perth",
                "Sydney"
            ],
            "Brunei": [
                "Bandar Seri Begawan"
            ],
            "Burma": [
                "Rangoon"
            ],
            "Cambodia": [
                "Phnom Penh"
            ],
            "China": [
                "Beijing",
                "Chengdu",
                "Guangzhou",
                "Shanghai",
                "Shenyang",
                "Wuhan"
            ],
            "Fiji": [
                "Suva"
            ],
            "Hong Kong": [
                "Hong Kong"
            ],
            "Indonesia": [
                "Jakarta",
                "Medan",
                "Surabaya"
            ],
            "Japan": [
                "Fukuoka",
                "Nagoya",
                "Naha",
                "Osaka-Kobe",
                "Sapporo",
                "Tokyo"
            ],
            "Laos": [
                "Vientiane"
            ],
            "Malaysia": [
                "Kuala Lumpur"
            ],
            "Marshall Islands": [
                "Majuro"
            ],
            "Micronesia, Fed. States of": [
                "Kolonia"
            ],
            "Mongolia": [
                "Ulaanbaatar"
            ],
            "New Zealand": [
                "Auckland",
                "Wellington"
            ],
            "Palau": [
                "Koror"
            ],
            "Papua New Guinea": [
                "Port Moresby"
            ],
            "Philippines": [
                "Manila"
            ],
            "Samoa": [
                "Apia"
            ],
            "Singapore": [
                "Singapore"
            ],
            "South Korea": [
                "Busan",
                "Seoul"
            ],
            "Thailand": [
                "Bangkok",
                "Chiang Mai"
            ],
            "Timor-Leste": [
                "Dili"
            ],
            "Vietnam": [
                "Hanoi",
                "Ho Chi Minh City"
            ]
        },
        "EUR": {
            "Albania": [
                "Tirana"
            ],
            "Armenia": [
                "Yerevan"
            ],
            "Austria": [
                "Vienna",
                "Vienna"
            ],
            "Azerbaijan": [
                "Baku"
            ],
            "Belarus": [
                "Minsk"
            ],
            "Belgium": [
                "Brussels",
                "Brussels",
                "Brussels"
            ],
            "Bermuda": [
                "Hamilton"
            ],
            "Bosnia": [
                "Mostar"
            ],
            "Bosnia and Herzegovina": [
                "Banja Luka",
                "Sarajevo"
            ],
            "Bulgaria": [
                "Sofia"
            ],
            "Croatia": [
                "Zagreb"
            ],
            "Cyprus": [
                "Nicosia"
            ],
            "Czech Republic": [
                "Prague"
            ],
            "Denmark": [
                "Copenhagen"
            ],
            "Estonia": [
                "Tallinn"
            ],
            "Finland": [
                "Helsinki"
            ],
            "France": [
                "Bordeaux",
                "Lyon",
                "Marseille",
                "Paris",
                "Paris",
                "Rennes",
                "Strasbourg",
                "Toulouse"
            ],
            "Georgia": [
                "Tbilisi"
            ],
            "Germany": [
                "Berlin",
                "Dusseldorf",
                "Frankfurt",
                "Hamburg",
                "Leipzig",
                "Munich"
            ],
            "Greece": [
                "Athens",
                "Thessaloniki"
            ],
            "Holy See": [
                "Vatican City"
            ],
            "Hungary": [
                "Budapest"
            ],
            "Iceland": [
                "Reykjavik"
            ],
            "Ireland": [
                "Dublin"
            ],
            "Italy": [
                "Florence",
                "Milan",
                "Naples",
                "Rome"
            ],
            "Kosovo": [
                "Pristina"
            ],
            "Latvia": [
                "Riga"
            ],
            "Lithuania": [
                "Vilnius"
            ],
            "Luxembourg": [
                "Luxembourg"
            ],
            "Macedonia": [
                "Skopje"
            ],
            "Malta": [
                "Valletta"
            ],
            "Moldova": [
                "Chisinau"
            ],
            "Montenegro": [
                "Podgorica"
            ],
            "Netherlands": [
                "Amsterdam",
                "Hague, The"
            ],
            "Norway": [
                "Oslo"
            ],
            "Poland": [
                "Krakow",
                "Warsaw"
            ],
            "Portugal": [
                "Lisbon",
                "Ponta Delgada"
            ],
            "Romania": [
                "Bucharest"
            ],
            "Russia": [
                "Moscow",
                "St. Petersburg",
                "Vladivostok",
                "Yekaterinburg"
            ],
            "Serbia": [
                "Belgrade"
            ],
            "Slovakia": [
                "Bratislava"
            ],
            "Slovenia": [
                "Ljubljana"
            ],
            "Spain": [
                "Barcelona",
                "Madrid"
            ],
            "Sweden": [
                "Stockholm"
            ],
            "Switzerland": [
                "Bern"
            ],
            "Turkey": [
                "Adana",
                "Ankara",
                "Istanbul"
            ],
            "Ukraine": [
                "Kyiv"
            ],
            "United Kingdom": [
                "Belfast",
                "Edinburgh",
                "London"
            ]
        },
        "IO": {
            "Austria": [
                "Vienna"
            ],
            "Switzerland": [
                "Geneva"
            ],
            "United States": [
                "New York"
            ]
        },
        "NEA": {
            "Algeria": [
                "Algiers"
            ],
            "Bahrain": [
                "Manama"
            ],
            "Egypt": [
                "Alexandria",
                "Cairo"
            ],
            "Iraq": [
                "Baghdad"
            ],
            "Israel": [
                "Tel Aviv"
            ],
            "Jerusalem": [
                "Jerusalem"
            ],
            "Jordan": [
                "Amman"
            ],
            "Kuwait": [
                "Kuwait"
            ],
            "Lebanon": [
                "Beirut"
            ],
            "Libya": [
                "Tripoli"
            ],
            "Morocco": [
                "Casablanca",
                "Rabat"
            ],
            "Oman": [
                "Muscat"
            ],
            "Qatar": [
                "Doha"
            ],
            "Saudi Arabia": [
                "Dhahran",
                "Jeddah",
                "Riyadh"
            ],
            "Syria": [
                "Damascus"
            ],
            "Tunisia": [
                "Tunis"
            ],
            "United Arab Emirates": [
                "Abu Dhabi",
                "Dubai"
            ],
            "Yemen": [
                "Sanaa"
            ]
        },
        "SCA": {
            "Afghanistan": [
                "Herat",
                "Kabul",
                "Mazar-e-Sharif"
            ],
            "Bangladesh": [
                "Dhaka"
            ],
            "India": [
                "Chennai (Madras)",
                "Hyderabad",
                "Kolkata",
                "Mumbai (Bombay)",
                "New Delhi"
            ],
            "Kazakhstan": [
                "Almaty",
                "Astana"
            ],
            "Kyrgyzstan": [
                "Bishkek"
            ],
            "Nepal": [
                "Kathmandu"
            ],
            "Pakistan": [
                "Islamabad",
                "Karachi",
                "Lahore",
                "Peshawar"
            ],
            "Sri Lanka": [
                "Colombo"
            ],
            "Tajikistan": [
                "Dushanbe"
            ],
            "Turkmenistan": [
                "Ashgabat"
            ],
            "Uzbekistan": [
                "Tashkent"
            ]
        },
        "WHA": {
            "USA": [
                "Hot Springs  AR",
                "Atlanta  GA",
                "Boston  MA",
                "Buffalo  NY",
                "Chicago  IL",
                "Aurora  CO",
                "Stamford  CT",
                "Dallas  TX",
                "Detroit  MI",
                "El Paso  TX",
                "Honolulu  HI",
                "Houston  TX",
                "Los Angeles  CA",
                "Miami  FL",
                "Minneapolis  MN",
                "Portsmouth  NH",
                "New Orleans, LA",
                "New York  NY",
                "Philadelphia  PA",
                "San Diego  CA",
                "San Francisco  CA",
                "San Juan  Puerto Rico",
                "Seattle  WA",
                "St. Albans  VT",
                "Washington  DC",
                "Tucson  AZ"
            ],
            "Argentina": [
                "Buenos Aires"
            ],
            "Barbados": [
                "Bridgetown"
            ],
            "Belize": [
                "Belmopan"
            ],
            "Bolivia": [
                "La Paz"
            ],
            "Brazil": [
                "Brasilia",
                "Recife",
                "Rio de Janiero",
                "Sao Paulo"
            ],
            "Canada": [
                "Calgary",
                "Halifax",
                "Montreal",
                "Ottawa",
                "Quebec",
                "Toronto",
                "Vancouver",
                "Winnipeg"
            ],
            "Chile": [
                "Santiago"
            ],
            "Colombia": [
                "Bogota",
                "Cartagena"
            ],
            "Costa Rica": [
                "San Jose"
            ],
            "Cuba": [
                "Havana"
            ],
            "Dominican Rep": [
                "Santo Domingo"
            ],
            "Ecuador": [
                "Guayaquil",
                "Quito"
            ],
            "El Salvador": [
                "San Salvador"
            ],
            "Grenada": [
                "St. George's"
            ],
            "Guatemala": [
                "Guatemala City"
            ],
            "Guyana": [
                "Georgetown"
            ],
            "Haiti": [
                "Port-au-Prince"
            ],
            "Honduras": [
                "Tegucigalpa"
            ],
            "Jamaica": [
                "Kingston"
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
            ],
            "Netherlands Antilles": [
                "Curacao"
            ],
            "Nicaragua": [
                "Managua"
            ],
            "Panama": [
                "Panama City"
            ],
            "Paraguay": [
                "Asuncion"
            ],
            "Peru": [
                "Lima"
            ],
            "Suriname": [
                "Paramaribo"
            ],
            "The Bahamas": [
                "Nassau"
            ],
            "Trinidad & Tobago": [
                "Port-of-Spain"
            ],
            "United States": [
                "Washington"
            ],
            "Uruguay": [
                "Montevideo"
            ],
            "Venezuela": [
                "Caracas"
            ]
        }
    };
});
