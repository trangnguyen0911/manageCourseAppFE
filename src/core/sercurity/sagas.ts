import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as Action from "./actions"
import * as ActionTypes from "./actionTypes"
import * as AuthenAPI from '../api/authenAPI'
import { message } from 'antd'
import * as constant from '../../web/utils/Constant.js'
import AuthenticationService from './AuthenticationService.js'

/** 
  Worker Saga: Fired on LOGIN_REQUEST action
*/
function* LoginSaga(action: any): any {
  try {
    const response = yield call(AuthenAPI.executeJwtAuthenticationService, action.username, action.password);
    yield put(
      Action.UserSuccess({
        role: response.data.role,
      })
    );
    AuthenticationService.registerSuccessfulLoginForJwt(action.username, response.data.token, response.data.role);
    yield delay(200)
    window.location.href = `/welcome/${action.username}`
  } catch (e) {
    message.error(constant.INVALID_LOGIN, 2.5)
  }
}

/** 
  Worker Saga: Fired on LOGOUT_REQUEST action
*/
function* LogoutSaga(): any {
  try {
    AuthenticationService.logout()
    yield put(
      Action.UserSuccess({
        role: "",
      })
    );
  } catch (e) {
    message.error(constant.ERR_SYSTEM, 2.5)
  }
}

/**
  Starts worker saga on latest dispatched action.
*/
function* sercureSaga() {
  yield all([takeEvery(ActionTypes.LOGIN_REQUEST, LoginSaga), takeLatest(ActionTypes.LOGOUT_REQUEST, LogoutSaga)]);
}

export default sercureSaga;