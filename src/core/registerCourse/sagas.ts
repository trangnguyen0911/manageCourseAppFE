import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Action from "./actions";
import * as ActionTypes from "./actionTypes";
import * as RegisterCourseAPI from '../api/registerCourseAPI'
import { message } from 'antd'
import * as constant from '../../web/utils/Constant';

/*
  Worker Saga: Fired on FETCH_REGISTER_COURSE_REQUEST action
*/
function* fetchRegisterCourseSaga(): any {
  try {
    const response = yield call(RegisterCourseAPI.fetchRegisterCourseAPI);
    console.log(response.data)
    yield put(
      Action.fetchRegisterCourseSuccess({
        registerCourses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchRegisterCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on FETCH_SEARCH_REGISTER_COURSE_REQUEST action
*/
function* fetchSearchRegisterCourseSaga(action: any): any {
  try {
    const response = yield call(RegisterCourseAPI.fetchSearchRegisterCourseAPI, action.contentSearch);
    yield put(
      Action.fetchRegisterCourseSuccess({
        registerCourses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchRegisterCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST action
*/
function* fetchRegisterCourseByUserNameSaga(action: any): any {
  try {
    const response = yield call(RegisterCourseAPI.fetchRegisterCourseByUserNameAPI, action.username);
    yield put(
      Action.fetchRegisterCourseSuccess({
        registerCourses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchRegisterCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST action
*/
function* fetchSearchRegisterCourseByUserNameSaga(action: any): any {
  try {
    const response = yield call(RegisterCourseAPI.fetchSearchRegisterCourseByUserNameAPI, action.contentSearch, action.username);
    yield put(
      Action.fetchRegisterCourseSuccess({
        registerCourses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchRegisterCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on CANCEL_REGISTER_COURSE_REQUEST action
*/
function* cancelRegisterCourseSaga(action: any): any {
  try {
    const response = yield call(RegisterCourseAPI.cancelRegisterCourseAPI, action.username, action.registerCourse);
    const data = response.data
    if (data === "Err01") {
      message.error(constant.ERR01_REGISTER_COURSE, 5)
    } else if (data === "NoErr") {
      message.success(constant.NOERR_CANCEL, 5)
    }
  } catch (e) {
    yield put(
      Action.registerCourseFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Starts worker saga on latest dispatched action.
*/
function* courseSaga() {
  yield all([takeLatest(ActionTypes.FETCH_REGISTER_COURSE_REQUEST, fetchRegisterCourseSaga),
      takeLatest(ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST, fetchSearchRegisterCourseSaga),
      takeLatest(ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, fetchRegisterCourseByUserNameSaga),
      takeLatest(ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, fetchSearchRegisterCourseByUserNameSaga),
      takeEvery(ActionTypes.CANCEL_REGISTER_COURSE_REQUEST, cancelRegisterCourseSaga)]);
}

export default courseSaga;