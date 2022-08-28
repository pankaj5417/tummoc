require("dotenv").config()

const passport=require("passport")

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User= require("../models/user.model")

const uuid=require("uuidV4")

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,

    clientSecret:process.env.GOOGLE_CLIENT_SECRET,

    callbackURL: "http://localhost:2345/auth/google/callback",
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",

    passReqToCallback   : true
  },

 async function(request, accessToken, refreshToken, profile, done) {
//console.log("accessToken, refreshToken, profile")
    const email= profile?._json?.email

    let user;
    try{
      user = await User.findOne({email}).lean().exec()

      if(!user){
        user= await User.create({
          email:email,
          password:uuid()
        })
      }
    

      return done(null, user);
   
  }catch(e){

  }
}
));

module.exports=passport
