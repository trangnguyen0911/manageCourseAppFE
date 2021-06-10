import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

/**
 * login request
 * @param username 
 * @param password 
 * @returns 
 */
export const LoginRequest = (username: string, password: string): Types.LoginRequest => ({
    type: ActionTypes.LOGIN_REQUEST, username, password
});

/**
 * logout request
 * @returns 
 */
export const LogoutRequest = (): Types.LogoutRequest => ({
    type: ActionTypes.LOGOUT_REQUEST
});

/**
 * user success
 * @param payload 
 * @returns 
 */
export const UserSuccess = (
    payload: Types.UserSuccessPayload
): Types.UserSuccess => ({
    type: ActionTypes.USER_SUCCESS,
    payload,
});