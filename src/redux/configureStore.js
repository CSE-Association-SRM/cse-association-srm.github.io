import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Events} from './EventsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore=()=>{
    const store =createStore(
        combineReducers({
            events:Events
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}