import * as ActionTypes from "./actionTypes";

/**
 * define user type
 */
export interface IUser {
    username: string
    password?: string
    role?: string
}

/**
 * define sercure type
 */
export interface SercureState {
    pending: boolean;
    error: string | null;
    role: string;
}

/**
 * login request
 */
export interface LoginRequest {
    type: typeof ActionTypes.LOGIN_REQUEST;
    username: string;
    password: string;
}

/**
 * logout request
 */
 export interface LogoutRequest {
    type: typeof ActionTypes.LOGOUT_REQUEST;
}

/**
 * user success payload
 */
export interface UserSuccessPayload {
    role: string
}

/**
 * user success
 */
export type UserSuccess = {
    type: typeof ActionTypes.USER_SUCCESS;
    payload: UserSuccessPayload;
};

/**
 * type sercure actions
 */
export type SercureActions =
    | LoginRequest
    | LogoutRequest
    | UserSuccess;