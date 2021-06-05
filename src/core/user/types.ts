import * as ActionTypes from "./actionTypes";

export interface IRole {
    roleID: number,
    description: string
    name: string
}

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

export interface UserState {
    pending: boolean;
    users: IUser[];
    error: string | null;
}

/**
 * edit user
 */
export interface EditUserRequest {
    type: typeof ActionTypes.EDIT_USER_REQUEST;
    user: IUser
}

export interface UserSuccessPayload {
    message: string
}

export interface UserFailurePayload {
    error: string;
}

/**
 * add user
 */
export interface AddUserRequest {
    type: typeof ActionTypes.ADD_USER_REQUEST;
    user: IUser
}

export type UserSuccess = {
    type: typeof ActionTypes.USER_SUCCESS;
    payload: UserSuccessPayload;
};

export type UserFailure = {
    type: typeof ActionTypes.USER_FAILURE;
    payload: UserFailurePayload;
};

export type UserActions =
    | AddUserRequest
    | EditUserRequest
    | UserSuccess
    | UserFailure;