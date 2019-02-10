const express = require('express');
const path = require("path");
const app = express();
const ejs = require('ejs');
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

const landingRouter = require('./routers/landingRoutes');
app.use(landingRouter);

app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Your server is running on a port: " + PORT);
    }
})