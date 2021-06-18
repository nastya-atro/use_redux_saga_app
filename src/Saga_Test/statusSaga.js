import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "./api";
import { getStatusActionCreator, toogeLoadingActionCreator } from './reducer';

function* getStatusWorker(action){
    const data = yield call(usersApi.getStatus, action.status)
    yield put(getStatusActionCreator(data))
}

function* changeStatusWorker(action){
    debugger
    
    const data = yield call(usersApi.changeStatus(action.changedStatus), action.changedStatus)
    yield put(getStatusActionCreator(data))   
}


export const asyncGetStatusAction=(status)=>({
    type: 'ASYNC_GET_STATUS', status
})

export const asyncChangeStatusAction=(changedStatus)=>({
    type: 'ASYNC_CHANGE_STATUS', changedStatus
})

export function* getStatusWatcher(){
    yield takeEvery('ASYNC_GET_STATUS', getStatusWorker)
    yield takeEvery('ASYNC_CHANGE_STATUS', changeStatusWorker)
}