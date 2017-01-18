var utils = (function() {

  var _utils = {};

  _utils.Timer = function(){};

  _utils.Timer.prototype.start = function( minutes, cb ){
    var self   = this;
    self._time = minutes;
    window.setInterval(function(){
      cb(self._time);
      self._time--;
    }, 60 * 1000);
  };

  return _utils;

})();