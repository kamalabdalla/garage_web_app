const dotenv = require('dotenv');
const express = require('express');

const cookirParser = require('cookie-parser');
const orderRoute = require('./routes/orderRoute');
const userssRouter = require('./routes/userssRoute');
dotenv.config();
require('./db/connection')();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookirParser());


app.use('/api/user', userssRouter);

// app.use('/api/customer', customerRouter);

app.use('/api/order', orderRoute);


app.listen(port, ()=>{
    console.log("server is listen")
})