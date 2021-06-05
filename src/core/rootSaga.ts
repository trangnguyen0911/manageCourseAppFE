import { all, fork } from "redux-saga/effects";

import courseSaga from "./course/sagas";
import registerCourseSaga from "./registerCourse/sagas"
import userSaga from "./user/sagas"

export function* rootSaga() {
  yield all([fork(courseSaga), fork(registerCourseSaga), fork(userSaga)]);
}