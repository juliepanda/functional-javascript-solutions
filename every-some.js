// not correct yet
function checkUsersValid( goodUsers ) {
  return function allUsersValid( submittedUsers ) {
    goodUsers.every(function( e ) {
      return submittedUsers.some(function( elem ) { // return true if in list
        return elem.id == e.id;
      });
    });
  };
}
module.exports = checkUsersValid;
