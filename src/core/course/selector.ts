import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.course.pending;

const getCourses = (state: AppState) => state.course.courses;

const getError = (state: AppState) => state.course.error;

export const getCoursesSelector = createSelector(getCourses, (courses) => courses);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);