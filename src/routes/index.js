var express = require( "express" );
var router = express.Router();

router.get( "/", function( request, response, next ) {
  return response.status( 200 ).json( { message: "Express API template" } );
} );

module.exports = router;
