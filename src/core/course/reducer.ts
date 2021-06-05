import * as ActionTypes from "./actionTypes";

import { CourseActions, CourseState } from "./types";

const initialState: CourseState = {
  pending: false,
  courses: [],
  error: null,
};

export default (state = initialState, action: CourseActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_SEARCH_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        courses: action.payload.courses,
        error: null,
      };
    case ActionTypes.FETCH_COURSE_FAILURE:
      return {
        ...state,
        pending: false,
        courses: [],
        error: action.payload.error,
      };
    case ActionTypes.ADD_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.EDIT_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.DELETE_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.CONFIRM_EXIST_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case ActionTypes.COURSE_FAILURE:
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