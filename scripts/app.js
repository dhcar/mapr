// 
// declare constants
// 

var map, fb;

var init = function() {

  fb = firebase.initializeApp(fireConfig).database();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7832195, lng: -122.4056887},
    zoom: 14
  });

};

init()