var map, fb;

var init = function() {

  fb = firebase.initializeApp(fireConfig).database();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7832195, lng: -122.4056887},
    zoom: 14
  });

};

init();

var update_eta = function(snap) {
  var eta_el = document.getElementById('eta');
  if( snap.val() != 0){
    var eta  = moment().valueOf() + 60 * 1000 * snap.val();
    var text = moment( eta ).fromNow();
    eta_el.textContent = ' ' + text;
  } else {
    eta_el.textContent = ' arrived';
  }
}

var timer = new utils.Timer();

var update_fb = function( minutes ){
  fb.ref('timer').set( minutes )
};

// 
// Timer runs in background to send fake updates to firebase
// 

timer.start(10, update_fb);

fb.ref('timer').on('value', update_eta);
