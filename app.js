require('dotenv').config({path:"./.env"});

const express = require('express');
const app = express();

require('./models/dbconfig.js').dbconnection();

//routes
const userRouter = require('./routes/userRoute.js');


//body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/user',userRouter);


//server
app.listen( process.env.PORT, function(){
    console.log(`server is running on PORT ${process.env.PORT}`);
})
