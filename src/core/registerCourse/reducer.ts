import * as ActionTypes from "./actionTypes";

import { RegisterCourseActions, RegisterCourseState } from "./types";

/**
 * initial registercourse state
 */
const initialState: RegisterCourseState = {
  pending: false,
  registerCourses: [],
  error: null,
};

/**
 * update state for each action
 */
export default (state = initialState, action: RegisterCourseActions) => {
  switch (action.type) {
    // fetch register course request
    case ActionTypes.FETCH_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch search register course request
    case ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch register course by user name request
    case ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch register course by user name request
    case ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch register course success
    case ActionTypes.FETCH_REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        registerCourses: action.payload.registerCourses,
        error: null,
      };
    // fetch register course failure
    case ActionTypes.FETCH_REGISTER_COURSE_FAILURE:
      return {
        ...state,
        pending: false,
        registerCourses: [],
        error: action.payload.error,
      };
    // cancel register course request
    case ActionTypes.CANCEL_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // confirm exist register course request
    case ActionTypes.CONFIRM_EXIST_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // register course success
    case ActionTypes.REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    // register course failure
    case ActionTypes.REGISTER_COURSE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};