function reduce( arr, fn, initial) {
  while(arr[initial] !== undefined){
    var obj = initial + 1;
    return reduce(arr, fn, obj);
  }
}
module.exports = reduce;
