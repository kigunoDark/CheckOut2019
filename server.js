const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require("./data/dbconnection");
const path = require("path");
const app = express();
const ejs = require('ejs');
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync()
.then(result => {
    //  console.log(result);
})
.catch(err => {
    console.log(err);
});
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