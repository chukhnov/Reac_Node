import  {
    REGISTER_FAILED, REGISTER_SUCCESSFULLY,
    LOGIN_FAILED, LOGIN_SUCCESSFULLY,
    LOGOUT
} from './../constants/RegisterActionTypes'
import {browserHistory} from 'react-router'



export function loginError(error) {
    return {error, type: LOGIN_FAILED};
}

export function loginSuccess(response) {
    return dispatch => {
        dispatch({response, type: LOGIN_SUCCESSFULLY});
        console.log('LOGIN SUCCESSFULLY');
        browserHistory.push('/dashboard');
    };
}

export function registerError(error) {
    return {error, type: REGISTER_FAILED};
}

export function registerSuccess(response) {
    return dispatch => {
        dispatch({response, type: REGISTER_SUCCESSFULLY});
        console.log('REGISTER SUCCESSFULLY');
        browserHistory.push('/login');
    };
}

export function logout() {
    return dispatch => {
        dispatch({type: LOGOUT});
        console.log('SUCCESSFUL LOGOUT');
        browserHistory.push('/');
    };
}




export function register(userData) {
    function parseJSON(res) {
        return res.json()
    }
    return dispatch =>
        fetch('/api/register', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(parseJSON)
            .then(function (data) {
                if (data.username) {
                    dispatch(registerSuccess(data.username));
                } else {
                    dispatch(registerError(error));
                    throw error;
                }
            })
            .catch(error => {
                console.log('request failed', error);
            });
}



export function login(userData) {
    function parseJSON(res) {
        return res.json()
    }
    return dispatch =>
        fetch('/api/login', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(parseJSON)
            .then(function (data) {
                    if (data.username) {
                            dispatch(loginSuccess(data.username));
                    } else {
                        dispatch(loginError(error));
                        throw error;
                    }
            })
            .catch(error => {
                console.log('request failed', error);
            });
}


export function exit() {
    return dispatch =>
        fetch('/api/logout', {
            method: "GET",
            credentials: 'same-origin'
        })
            .then(function (data) {
                console.log(data);
                if (data.ok) {
                    dispatch(logout());

                }
            }).catch(function (error) {
            console.log('request failed', error)
        })
}