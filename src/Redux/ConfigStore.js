import React from "react";
import {applyMiddleware, createStore,compose} from "redux";
import appReducer from "../Reducers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../Sagas/index";
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload:false
    }) : compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () =>{
    const middlewares = [
        thunk,
        sagaMiddleware
    ];
    const enhencers = [applyMiddleware(...middlewares)];
    const store = createStore(
        appReducer,
        composeEnhancers(...enhencers)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
export default configStore;