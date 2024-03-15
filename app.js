require('dotenv').config({path:"./.env"});

const express = require('express');
const app = express();

require('./models/dbconfig.js').dbconnection();

app.listen( process.env.PORT, function(){
    console.log(`server is running on PORT ${process.env.PORT}`);
})
