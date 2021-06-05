import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Action from "./actions";
import * as ActionTypes from "./actionTypes";
import * as UserAPI from '../api/userAPI'
import { message } from 'antd'
import * as constant from '../../web/utils/Constant';

/*
  Worker Saga: Fired on ADD_USER_REQUEST action
*/
function* addUserSaga(action: any): any {
  try {
    const response = yield call(UserAPI.addUserAPI, action.user);
    const data = response.data
    if (data === "Err12") {
      message.error(constant.ERR12, 5)
    } else if (data === "Err13") {
      message.error(constant.ERR13, 5)
    } else if (data === "NoErr") {
      message.success(constant.NOERR_SIGNUP, 5)
    } else if (data === "Err12Err13") {
      message.error(constant.ERR12ERR13)
    } else {
      message.error(data)
    }
  } catch (e) {
    yield put(
      Action.userFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Worker Saga: Fired on EDIT_USER_REQUEST action
*/
function* editUserSaga(action: any): any {
  try {
    const response = yield call(UserAPI.editUserAPI, action.user);
    const data = response.data
    if (data === "Err01") {
      message.error(constant.ERR01, 5)
    } else if (data === "Err12") {
      message.error(constant.ERR12, 5)
    } else if (data === "NoErr") {
      message.success(constant.NOERR_EDIT, 5)
    } else {
      message.error(data)
    }

  } catch (e) {
    yield put(
      Action.userFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Starts worker saga on latest dispatched action.
  Allows concurrent increments.
*/
function* userSaga() {
  yield all([takeLatest(ActionTypes.ADD_USER_REQUEST, addUserSaga), takeEvery(ActionTypes.EDIT_USER_REQUEST, editUserSaga)]);
}

export default userSaga;