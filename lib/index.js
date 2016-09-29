import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import User from '../models/userschema'
import {routes as ApplicationRouter} from '../routes/api'



export const
    app = express(),
    db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(ApplicationRouter);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.connect('mongodb://localhost/exampleReactNodeDB');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!')
});

app.listen(3000, () => {
  console.log('Server running at port 3000')
});