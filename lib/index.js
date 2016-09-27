import express from 'express'
import mongoose from 'mongoose'
import passport_local from 'passport-local'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'
import bodyParser from 'body-parser'
import User from '../models/userschema'


const
    app = express(),
    db = mongoose.connection,
    LocalStrategy = passport_local.Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect('mongodb://localhost/exampleReactNodeDB');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!')
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/register', (req, res, next) => {
  console.log(req.body, '------------');
  const
      username = req.body.username,
      password = req.body.password;
  User.register(new User({username: username}), password, (err) => {
        if (err) {
          console.log('error while user register!', err);
          res.json({
            name: err.name,
            message: err.message
          });
          return
        }
        console.log('user registered!');
        res.json({
          name: 'Register successful!',
          username: username
        });
    });
});


app.listen(3000, function () {
  console.log('Server running at port 3000')
});