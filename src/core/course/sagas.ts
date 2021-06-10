import { all, call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import * as Action from "./actions";
import * as ActionTypes from "./actionTypes";
import * as CourseAPI from '../api/courseAPI'
import { message } from 'antd'
import * as constant from '../../web/utils/Constant';

/*
  Worker Saga: Fired on FETCH_COURSE_REQUEST action
*/
function* fetchCourseSaga(): any {
  try {
    const response = yield call(CourseAPI.fetchCourseAPI);
    yield put(
      Action.fetchCourseSuccess({
        courses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on FETCH_SEARCH_COURSE_REQUEST action
*/
function* fetchSearchCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.fetchSearchCourseAPI, action.contentSearch);
    yield put(
      Action.fetchCourseSuccess({
        courses: response.data,
      })
    );
  } catch (e) {
    yield put(
      Action.fetchCourseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on ADD_COURSE_REQUEST action
*/
function* addCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.addCourseAPI, action.course);
    const data = response.data
    if (data === "Err11") {
      message.error(constant.ERR11, 5)
    } else if (data === "NoErr") {
      message.success(constant.NOERR_ADD, 5)
      yield delay(300)
      window.location.href = '/admin/courses/all'
    } else {
      message.error(data)
    }
  } catch (e) {
    yield put(
      Action.courseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on CONFIRM_EXIST_COURSE_REQUEST action
*/
function* confirmExistCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.confirmExistCourseAPI, action.course);
    const data: string = response.data
    if (data === "Err01") {
      message.error(constant.ERR01, 5)
    } else {
      yield put(
        Action.courseSuccess({
          confirm: data,
        })
      );
    }
  } catch (e) {
    yield put(
      Action.courseFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Worker Saga: Fired on EDIT_COURSE_REQUEST action
*/
function* editCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.editCourseAPI, action.course);
    const data = response.data
    if (data === "Err01") {
      message.error(constant.ERR01, 5)
    } else if (data === "Err11") {
      message.error(constant.ERR11, 5)
    } else if (data === "NoErr") {
      message.success(constant.NOERR_EDIT, 5)
      yield delay(300)
      window.location.href = '/admin/courses/all'
    } else {
      message.error(data)
    }
    //yield put(push('/admin/courses/all'));
  } catch (e) {
    yield put(
      Action.courseFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Worker Saga: Fired on DELETE_COURSE_REQUEST action
*/
function* deleteCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.deleteCourseAPI, action.courseID);
    const data = response.data
    if (data === "Err01") {
      message.error(constant.ERR01, 5)
    } else if (data === "NoErr") {
      window.location.reload()
      message.success(constant.NOERR_DELETE, 5);
    } else {
      message.error(constant.deleteCourseMessage(data), 7)
    }
  } catch (e) {
    yield put(
      Action.courseFailure({
        error: e.message,
      })
    );
    message.error(constant.ERR_SYSTEM, 5)
  }
}

/*
  Worker Saga: Fired on REGISTER_COURSE_REQUEST action
*/
function* registerCourseSaga(action: any): any {
  try {
    const response = yield call(CourseAPI.registerCourseAPI, action.username, action.courseID);
    const data = response.data
    if (data === "Err10") {
      message.error(constant.ERR10, 5)
    } else if (data === "Err01") {
      message.error(constant.ERR01, 5)
    } else {
      message.success(constant.NOERR_REGISTER, 5)
    }
  } catch (e) {
    yield put(
      Action.courseFailure({
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
  yield all([takeLatest(ActionTypes.FETCH_COURSE_REQUEST, fetchCourseSaga),
      takeLatest(ActionTypes.FETCH_SEARCH_COURSE_REQUEST, fetchSearchCourseSaga),
      takeLatest(ActionTypes.ADD_COURSE_REQUEST, addCourseSaga),
      takeEvery(ActionTypes.CONFIRM_EXIST_COURSE_REQUEST, confirmExistCourseSaga),
      takeEvery(ActionTypes.EDIT_COURSE_REQUEST, editCourseSaga),
      takeEvery(ActionTypes.DELETE_COURSE_REQUEST, deleteCourseSaga),
      takeEvery(ActionTypes.REGISTER_COURSE_REQUEST, registerCourseSaga)]);
}

export default courseSaga;