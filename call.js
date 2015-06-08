// Early solution that uses iterative method

/*function duckCount() {
  var counter = 0;
  for (var i = 0; i < arguments.length; i++) {
    if(Object.prototype.hasOwnProperty.call(arguments[i], 'quack') === true) {
      counter += 1;
    }
  }
  return counter;
}*/

// Updated solution that uses recursive methods
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(
    function(val) { // for some reasons, ternary operator doesn't work here??!?!
      if (Object.prototype.hasOwnProperty.call(val, 'quack') === true) {
        return true;
      } else {
        return false;
      }
    } 
  ).length;
}
module.exports = duckCount;






