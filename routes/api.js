import passport from 'passport'
import express from 'express'
import {registerUser, loginUser} from '../methods/authorization'


export const routes = express();

routes.post('/api/register', registerUser);

routes.post('/api/login', passport.authenticate('local'), loginUser);


routes.get('/*', (req, res) => {
    res.redirect('/');
});
