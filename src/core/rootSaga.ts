import { all, fork } from "redux-saga/effects";
import courseSaga from "./course/sagas";
import registerCourseSaga from "./registerCourse/sagas"
import userSaga from "./user/sagas"
import sercureSaga from "./sercurity/sagas"

/** 
 * Route saga
 * 
 * Version 1.0
 * 
 * Date 01-6-2021
 * 
 * Copyright
 * 
 * Modification Logs: 
 * DATE        AUTHOR    DESCRIPTION
 * ----------------------------------- 
 * 01-6-2021  TrangNTT46    Create
 */
export function* rootSaga() {
  yield all([fork(courseSaga), fork(registerCourseSaga), fork(userSaga), fork(sercureSaga)]);
}