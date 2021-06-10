import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.registerCourse.pending;

const getRegisterCourses = (state: AppState) => state.registerCourse.registerCourses;

const getError = (state: AppState) => state.registerCourse.error;

/**
 * get register course selector
 */
export const getRegisterCoursesSelector = createSelector(getRegisterCourses, (courses) => courses);

/**
 * get pending selector
 */
export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

/**
 * get error selector
 */
export const getErrorSelector = createSelector(getError, (error) => error);