import User from '../models/userschema'


export function registerUser(req, res) {
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
        console.log('User registered!');
        res.json({
            name: 'Register successful!',
            username: username
        });
    });
}

export function loginUser(req, res) {
        req.session.user = JSON.stringify(req.user);
        res.json(req.user);
}