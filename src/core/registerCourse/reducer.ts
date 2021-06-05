import * as ActionTypes from "./actionTypes";

import { RegisterCourseActions, RegisterCourseState } from "./types";

const initialState: RegisterCourseState = {
  pending: false,
  registerCourses: [],
  error: null,
};

export default (state = initialState, action: RegisterCourseActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        registerCourses: action.payload.registerCourses,
        error: null,
      };
    case ActionTypes.FETCH_REGISTER_COURSE_FAILURE:
      return {
        ...state,
        pending: false,
        registerCourses: [],
        error: action.payload.error,
      };
    case ActionTypes.CANCEL_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.CONFIRM_EXIST_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
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