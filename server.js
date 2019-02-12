const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require("./data/dbconnection");
var passport = require("passport");
var session = require("express-session");
const path = require("path");
const app = express();
const ejs = require('ejs');
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// For Passport

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  ); // session secret

  
app.use(passport.initialize());

app.use(passport.session()); // persistent login sessionsvar app = express();

var models = require('./models/users');


sequelize.sync()
.then(result => {
    //  console.log(result);
})
.catch(err => {
    console.log(err);
});


var authRoute = require("./routers/auth.js")(app, passport);
require("./config/passport/passport")(passport, models);

const landingRouter = require('./routers/landingRouters');
const userRouter = require('./routers/userRouters');
app.use(landingRouter);
app.use(userRouter);

app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Your server is running on a port: " + PORT);
    }
})