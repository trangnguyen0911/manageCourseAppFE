import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

/**
 * add user request action
 * @param user 
 * @returns 
 */
export const addUserRequest = (user: Types.IUser): Types.AddUserRequest => ({
    type: ActionTypes.ADD_USER_REQUEST, user
});

/**
 * edit user request action
 * @param user 
 * @returns 
 */
export const editUserRequest = (user: Types.IUser): Types.EditUserRequest => ({
    type: ActionTypes.EDIT_USER_REQUEST, user
});

/**
 * get user by user name request action
 * @param username 
 * @returns 
 */
export const getUserByUserNameRequest = (username: string): Types.GetUserByUserNameRequest => ({
    type: ActionTypes.GET_USER_BY_USER_NAME_REQUEST, username
});

/**
 * user success action
 * @param payload 
 * @returns 
 */
export const userSuccess = (
    payload: Types.UserSuccessPayload
): Types.UserSuccess => ({
    type: ActionTypes.USER_SUCCESS,
    payload,
});

/**
 * user failure action
 * @param payload 
 * @returns 
 */
export const userFailure = (
    payload: Types.UserFailurePayload
): Types.UserFailure => ({
    type: ActionTypes.USER_FAILURE,
    payload,
});