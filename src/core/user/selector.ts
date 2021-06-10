import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.user.pending;
const getUsers = (state: AppState) => state.user.users;
const getError = (state: AppState) => state.user.error;
const getUser = (state: AppState) => state.user.user;

/**
 * get user selector
 */
export const getUsersSelector = createSelector(getUsers, (users) => users);

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
 * get user selector
 */
export const getUserSelector = createSelector(getUser, (user) => user);