const express = require("express");
//const passport = require("passport");
const cors = require('cors');
var session = require('express-session');
const { register, login } = require("./controllers/auth.controller");
//let user;
 const passport=require("./configs/passport")
const app = express();

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET||'default_session_secret',
  resave: false,
  saveUninitialized: false,
  
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

app.use(passport.authenticate('session'));
passport.serializeUser(function({user, token}, done){
  done(null, {user, token})
})

passport.deserializeUser(function({user, token}, done){
  done( {user, token})
})

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.send(err);
  });
  res.status(200).send("Logout Successfully")
});


app.get('/auth/google',
  passport.authenticate('google', { scope :[ 'email', 'profile' ] },

));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure',session:false
}),

function  (req, res) {

  return res.send({user: req.user})

}

)
module.exports = app;
