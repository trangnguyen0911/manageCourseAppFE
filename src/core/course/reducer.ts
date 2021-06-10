import * as ActionTypes from "./actionTypes";

import { CourseActions, CourseState } from "./types";

/**
 * initial course state
 */
const initialState: CourseState = {
  pending: false,
  courses: [],
  error: null,
  confirm: "",
};

/**
 * update state for each course action
 */
export default (state = initialState, action: CourseActions) => {
  switch (action.type) {
    // fetch course request action
    case ActionTypes.FETCH_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch search course request action
    case ActionTypes.FETCH_SEARCH_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // fetch course success action
    case ActionTypes.FETCH_COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        courses: action.payload.courses,
        error: null,
      };
    // fetch course failure action
    case ActionTypes.FETCH_COURSE_FAILURE:
      return {
        ...state,
        pending: false,
        courses: [],
        error: action.payload.error,
      };
    // add course request action
    case ActionTypes.ADD_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // edit course request action
    case ActionTypes.EDIT_COURSE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // delete course request action
    case ActionTypes.DELETE_COURSE_REQUEST:
      return {
        ...state,
        pending: false,
      };
    // register course request action
    case ActionTypes.REGISTER_COURSE_REQUEST:
      return {
        ...state,
        pending: false,
      };
    // confirm exist course request action
    case ActionTypes.CONFIRM_EXIST_COURSE_REQUEST:
      return {
        ...state,
        pending: false,
        confirm: "",
      };
    // course success action
    case ActionTypes.COURSE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        confirm: action.payload.confirm,
      };
    // course failure action
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