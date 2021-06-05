import * as ActionTypes from "./actionTypes";

import { UserActions, UserState } from "./types";

const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.EDIT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    default:
      return {
        ...state,
      };
  }
};