function getShortMessages( messages ) {
  return messages.filter( function(obj){ return obj.message.length < 50 }).map( function( x ) { return x.message })
}
module.exports = getShortMessages;


