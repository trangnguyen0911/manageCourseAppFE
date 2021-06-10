import * as ActionTypes from "./actionTypes";

/**
 * define type role
 */
export interface IRole {
    roleID: number,
    description: string
    name: string
}

/**
 * definr type user
 */
export interface IUser {
    studentID?: number
    username: string
    fullname: string
    birthdate: Date
    status: number
    gender: number
    email: string
    password?: string
    role?: string
}

/**
 * user state
 */
export interface UserState {
    pending: boolean;
    users: IUser[];
    error: string | null;
    user: IUser
}

/**
 * edit user request
 */
export interface EditUserRequest {
    type: typeof ActionTypes.EDIT_USER_REQUEST;
    user: IUser
}

/**
 * get user by user name request
 */
 export interface GetUserByUserNameRequest {
    type: typeof ActionTypes.GET_USER_BY_USER_NAME_REQUEST;
    username: string
}

/**
 * user success payload
 */
export interface UserSuccessPayload {
    user: IUser
}

/**
 * user failure payload
 */
export interface UserFailurePayload {
    error: string;
}

/**
 * add user request
 */
export interface AddUserRequest {
    type: typeof ActionTypes.ADD_USER_REQUEST;
    user: IUser
}

/**
 * define type user success
 */
export type UserSuccess = {
    type: typeof ActionTypes.USER_SUCCESS;
    payload: UserSuccessPayload;
};

/**
 * tyoe user failure
 */
export type UserFailure = {
    type: typeof ActionTypes.USER_FAILURE;
    payload: UserFailurePayload;
};

/**
 * export type user actions
 */
export type UserActions =
    | AddUserRequest
    | EditUserRequest
    | GetUserByUserNameRequest
    | UserSuccess
    | UserFailure;