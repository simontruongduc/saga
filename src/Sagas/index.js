import * as taskType from "../Constants/Task";
import  { getAll }  from "../Apis/Task";
import * as Status from "../Constants/Status";
import {fetchTasksError, fetchTasksSuccess} from "../Actions/Task";
import {fork,take,call,put,delay} from "redux-saga/effects";
import {hideLoading, showLoading} from "../Actions/Loading";

function * fetchListTaskAction(){
    while (true){
        yield take(taskType.FETCH_TASKS);
        yield put(showLoading());
        const response = yield call(getAll);
        console.log(response);
        if(response.status === Status.SUCCESS){
            yield put(fetchTasksSuccess(response.data));
        }else {
            yield put(fetchTasksError(response.data));
        }
        yield delay(2000);
        yield put(hideLoading());
    }
}

export default function * rootSaga(){
     yield fork(fetchListTaskAction);
}