import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import  roomReducer  from "./roomReducer";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware()
const reducer = combineReducers({
    room: roomReducer
})

const store = createStore(reducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store