import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "./api";
import { getUserActionCreator, toogeLoadingActionCreator } from "./reducer";


export function* getUserWorker(action){
    yield put(toogeLoadingActionCreator(true))
    const res = yield call(usersApi.getUsers, action.usersData)
    yield put(getUserActionCreator(res.data.items))
    yield put(toogeLoadingActionCreator(false))
}



export const asyncGetUserAction=(usersData)=>({
    type: 'ASYNC_GET_USER_DATA', usersData
})

export function* getUserWatcher(){
    yield takeEvery('ASYNC_GET_USER_DATA', getUserWorker)
}

