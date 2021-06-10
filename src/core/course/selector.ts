import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.course.pending;

const getCourses = (state: AppState) => state.course.courses;

const getError = (state: AppState) => state.course.error;

const getConfirm = (state: AppState) => state.course.confirm;

/**
 * get course selector
 */
export const getCoursesSelector = createSelector(getCourses, (courses) => courses);

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

/**
 * get confirm selector
 */
export const getConfirmSelector = createSelector(getConfirm, (confirm) => confirm);