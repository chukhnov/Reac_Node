import {createStore, applyMiddleware} from 'redux/lib/index'
import thunk from 'redux-thunk'
import reducers from '../reducers/reducers'

export const store = createStore(reducers, applyMiddleware(thunk));