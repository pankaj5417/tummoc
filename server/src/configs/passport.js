require("dotenv").config()

const passport=require("passport")

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User= require("../models/user.model")

const uuid=require("uuidv4")

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,

    clientSecret:process.env.GOOGLE_CLIENT_SECRET,

    callbackURL: "https://tummoc2.herokuapp.com/auth/google/callback",
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",

    passReqToCallback   : true
  },

 async function(request, accessToken, refreshToken, profile, done) {
console.log("accessToken, refreshToken, profile",profile)
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
