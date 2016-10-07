import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Log from './components/LoginUser'
import Reg from './components/RegisterUser'
import Dash from './components/Dashboard'
import { Router, Route, IndexRoute, browserHistory} from 'react-router/lib';
import {store} from './store/store'
import { Provider } from 'react-redux';


ReactDOM.render((
    <Provider store={store}>
    <Router history={browserHistory} >
        <Route path="/">
            <IndexRoute component={Log} />
            <Route path="login" component={Log} />
            <Route path="register" component={Reg} />
            <Route path="dashboard" component={Dash} />
        </Route>
    </Router>
        </Provider>
), document.getElementById('application'));

