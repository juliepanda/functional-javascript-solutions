function countWords( inputWords ) {
  var obj = {};
  inputWords.reduce( function(previous, current) {

    if( obj[current]===undefined) {
      obj[current] = 1; //initialize counter
    } else {
      obj[current] = obj[current] + 1; //increment counter
    }
  }, obj);

  return obj;
}
module.exports = countWords;
