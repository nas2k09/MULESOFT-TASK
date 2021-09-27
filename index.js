const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');


//Import Routes

const movieRoutes = require('./routes/movies');

dotenv.config();

//connect to DB

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true },
    () => console.log('connected to DB'));

//Middlewares

app.use(express.json());

//Route Middlewares
app.use( '/movies', movieRoutes);

app.listen(3000,() => console.log('server running'));


