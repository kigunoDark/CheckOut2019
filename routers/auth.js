var connection = require("../config/connection/dbconnection.js");
var UserControll = require("../controllers/userController");
var User= require('../models/users');
const pool = connection;
var events;

module.exports = function(app, passport) {
    function getConnection() {
        return pool;
      } 
      
      
      
    app.get("/checkout.json", isLoggedIn, (req, res) => {
    const queryString = "SELECT * FROM events";
    getConnection().query(queryString, (err, rows, fields) => {
      if (err) {
        res.sendStatus(500);
        return;
      } else {
        console.log("We have got an info about");
        events = rows.map(row => {
          return {
            evName: row.evName,
            evInfo: row.evInfo,
            evType: row.evType,
            lng: row.lng,
            lat: row.lat
          };
        });
        console.log(events);
        // mapjs(events);
        res.json({ base: events });
      }
    });
  });


  app.get("/checkout-map", isLoggedIn, (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => {
        
         res.render("usermap", { pageTitle: "CheckOut-Map", users: user });
    })
    .catch(err => {
      console.log(err);
  })
  });

  app.get("/logout", UserControll.logout);
  app.get("/checkout-profile", UserControll.prof);


  
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/checkout-map",

      failureRedirect: "/"
    })
  );

  app.post("/add-event", (req, res) => {
    console.log("Get name of your event: " + req.body.evName);
    console.log("Get your info: " + req.body.evInfo);
    console.log("Get your event: " + req.body.evType);
    console.log("Get lng: " + req.body.lng);
    console.log("Get lat: " + req.body.lat);

    const evName = req.body.evName;
    const evInfo = req.body.evInfo;
    const evType = req.body.evType;
    const lng = req.body.lng;
    const lat = req.body.lat;

    const queryString =
      "INSERT INTO events(evName, evInfo, evType, lng, lat) values (?,?,?,?,?)";
    getConnection().query(
      queryString,
      [evName, evInfo, evType, lng, lat],
      (err, results, fields) => {
        if (err) {
          console.log("Feild to insert a new user: " + err);
          res.sendStatus(500);
          return;
        }
        console.log("Inserted a new user with id" + results.insertedId);
      }
    );
    res.redirect('/checkout-map')
  });


  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/checkout-map",

      failureRedirect: "/"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/");
  }

  app.get("/checkout.json", isLoggedIn, (req, res) => {
    const queryString = "SELECT * FROM events";
    getConnection().query(queryString, (err, rows, fields) => {
      if (err) {
        res.sendStatus(500);
        return;
      } else {
        console.log("We have got an info about");
        events = rows.map(row => {
          return {
            evName: row.evName,
            evInfo: row.evInfo,
            evType: row.evType,
            lng: row.lng,
            lat: row.lat
          };
        });
        console.log(events);
        // mapjs(events);
        res.json({ base: events });
      }
    });
  });
  app.get("/checkout-map", isLoggedIn, (req, res) => {
    res.render("usermap", {    pageTitle:"CheckOut-Map", name: "Vladislav Krushenitskii" });
  });
  app.get("/logout", UserControll.logout);
  app.get("/prof", UserControll.prof);








  


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/");
  }

}