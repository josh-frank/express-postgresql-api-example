import { expect, server, BASE_URL } from "./setup";

describe( "Index page test", () => {
  it( "gets base url", done => {
    server
      .get( `${BASE_URL}/` )
      .expect( 200 )
      .end( ( error, response ) => {
        expect( response.status ).to.equal( 200 );
        expect( response.body.message ).to.equal( "Test environment variable" );
        done();
      } );
  } );
} );