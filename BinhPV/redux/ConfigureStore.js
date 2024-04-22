// redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
const thunk = require('redux-thunk').thunk; //for version 3.x
import logger from 'redux-logger';
// reducers
import { leaders } from './leaders';
import { dishes } from './dishes';
import { comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ leaders, dishes, comments }),
        applyMiddleware(thunk, logger)
    );
    return store;
};