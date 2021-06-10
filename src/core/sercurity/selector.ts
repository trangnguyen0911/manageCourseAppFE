import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.sercure.pending;
const getError = (state: AppState) => state.sercure.error;
const getRole = (state: AppState) => state.sercure.role;

/**
 * get role selector
 */
export const getRoleSelector = createSelector(getRole, (role) => role);

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