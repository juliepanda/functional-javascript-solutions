// not correct yet
function checkUsersValid( goodUsers ) {
  return function allUsersValid( submittedUsers ) {
    function matchSome(val) {
      return val.id === this.id;
    }

    function matchAll(elem) {
      if(submittedUsers.some(matchSome, elem) === true) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    }

    var s = goodUsers.some(matchAll);
    //console.log(s);
    return s;
  };
}
module.exports = checkUsersValid;
