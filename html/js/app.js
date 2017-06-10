'use strict';

var CITY_QUERY_URL_PREFIX = 'http://localhost:3000/city?name=ilike.'

var app = {};

app.queryCity = function (cityName) {
    var queryURL = CITY_QUERY_URL_PREFIX + '*' + cityName + '*';
    
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function (j) {
            console.log(j);
        })
}