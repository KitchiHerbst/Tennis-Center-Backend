const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
        //implement this later TODO
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    // });
        return done(err, profile);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.serializeUser((user, done) => {
    done(null, user)
})