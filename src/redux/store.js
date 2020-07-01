import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {commentsReducer} from './reducers';

const reducers = combineReducers({
    commentsReducer: commentsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;