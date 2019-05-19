const passport = require( "passport" );
const LocalStrategy = require( "passport-local" ).Strategy;
const auth = require( "../util/authentication.js" );

module.exports = {

  init( app ) {

    app.use( passport.initialize() );
    app.use( passport.session() );

    passport.use( new LocalStrategy(
      ( username, password, done ) => {

        return done( null, { id: 1 } );
        /*
        User.findOne( { where: { username } } )
        .then( ( user ) => {
          if ( !user || !auth.match( password, user.password ) ) {
            return done( null, false,
              { message: "Invalid username or password" }
            );
          }
          return done( null, user );
        } )
        .catch( ( err ) => { return done( err ); } );
        */
      }
    ) );

    passport.serializeUser( ( user, done ) => {
      done( null, user.id );
    } );

    passport.deserializeUser( ( id, done ) => {
      done( null, { id: 1 } );
      /*
      User.findByPk( id )
      .then( ( user ) => { done( null, user ); } )
      .catch( ( err ) => { done( err ); } );
      */
    } );
  },

};
