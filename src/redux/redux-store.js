import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import tasksReducer from "./tasksReducer";

let reducers = combineReducers( {
    tasks: tasksReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)))

export default store