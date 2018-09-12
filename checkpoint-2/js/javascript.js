'use strict';

window.onload = function(){

var currentYear = new Date().getFullYear();
document.getElementById("printed-year").innerHTML = currentYear;
//maintains current year on copyright

function myMap() {
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
}
