import * as ActionTypes from "./actionTypes";

import { SercureActions, SercureState } from "./types";

/**
 * initial state
 */
const initialState: SercureState = {
  pending: false,
  error: null,
  role: "",
};

/**
 * update state for each sercurity action
 */
export default (state = initialState, action: SercureActions) => {
  switch (action.type) {
    // login request action
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // logout request action
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // user success action
    case ActionTypes.USER_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        role: action.payload.role,
      };
    default:
      return {
        ...state,
      };
  }
};