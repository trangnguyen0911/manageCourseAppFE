import * as ActionTypes from "./actionTypes";
import { UserActions, UserState } from "./types";

/**
 * initial state
 */
const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
  user: { username: "", fullname: "", birthdate: new Date(), status: -1, gender: -1, email: "" }
};

/**
 * update state for each user action
 */
export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    // add user request
    case ActionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // edit user request
    case ActionTypes.EDIT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // get user by user name request
    case ActionTypes.GET_USER_BY_USER_NAME_REQUEST:
      return {
        ...state,
        pending: false,
      };
    // user success
    case ActionTypes.USER_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        user: action.payload.user,
      };
    // user failure
    case ActionTypes.USER_FAILURE:
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