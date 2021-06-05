import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

export const addUserRequest = (user: Types.IUser): Types.AddUserRequest => ({
    type: ActionTypes.ADD_USER_REQUEST, user
});

export const editUserRequest = (user: Types.IUser): Types.EditUserRequest => ({
    type: ActionTypes.EDIT_USER_REQUEST, user
});

export const userSuccess = (
    payload: Types.UserSuccessPayload
): Types.UserSuccess => ({
    type: ActionTypes.USER_SUCCESS,
    payload,
});

export const userFailure = (
    payload: Types.UserFailurePayload
): Types.UserFailure => ({
    type: ActionTypes.USER_FAILURE,
    payload,
});