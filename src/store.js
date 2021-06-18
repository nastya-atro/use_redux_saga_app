import {all} from 'redux-saga/effects';
import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from 'redux-saga';
import { getUserWatcher } from './Saga_Test/usersSaga';
import reducer from './Saga_Test/reducer';
import { getStatusWatcher } from './Saga_Test/statusSaga';


const sagaMiddleware= createSagaMiddleware()

let rootReducer = combineReducers({
    users: reducer
    
})


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagaWatcher)

export default store

function* rootSagaWatcher(){
    yield all([getUserWatcher(), getStatusWatcher()])
}