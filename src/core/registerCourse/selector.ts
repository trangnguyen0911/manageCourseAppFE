import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.registerCourse.pending;

const getRegisterCourses = (state: AppState) => state.registerCourse.registerCourses;

const getError = (state: AppState) => state.registerCourse.error;

export const getRegisterCoursesSelector = createSelector(getRegisterCourses, (courses) => courses);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);