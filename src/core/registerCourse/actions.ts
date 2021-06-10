import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

/** 
 * fetch register course request
 */
export const fetchRegisterCourseRequest = (): Types.FetchRegisterCourseRequest => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_REQUEST,
});

/**
 * fetch search register course request
 * @param contentSearch 
 * @returns 
 */
export const fetchSearchRegisterCourseRequest = (contentSearch: string): Types.FetchSearchRegisterCourseRequest => ({
    type: ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST, contentSearch
});

/**
 * fetch register course by user name request
 * @param username 
 * @returns 
 */
export const fetchRegisterCourseByUserNameRequest = (username: string): Types.FetchRegisterCourseByUserNameRequest => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, username
});

/**
 * fetch search register course by user name request
 * @param contentSearch 
 * @param username 
 * @returns 
 */
export const fetchSearchRegisterCourseByUserNameRequest = (contentSearch: string, username: string): Types.FetchSearchRegisterCourseByUserNameRequest => ({
    type: ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, contentSearch, username
});

/**
 * cancel register course request
 * @param username 
 * @param registerCourse 
 * @returns 
 */
export const cancelRegisterCourseRequest = (username: string, registerCourse: Types.IRegisterCourse): Types.CancelRegisterCourseRequest => ({
    type: ActionTypes.CANCEL_REGISTER_COURSE_REQUEST, username, registerCourse
});

/**
 * confirm exist register course request
 * @param registerCourse 
 * @returns 
 */
export const confirmExistRegisterCourseRequest = (registerCourse: Types.IRegisterCourse): Types.ConfirmExistRegisterCourseRequest => ({
    type: ActionTypes.CONFIRM_EXIST_REGISTER_COURSE_REQUEST, registerCourse
});

/**
 * fetch register course success
 * @param payload 
 * @returns 
 */
export const fetchRegisterCourseSuccess = (
    payload: Types.FetchRegisterCourseSuccessPayload
): Types.FetchRegisterCourseSuccess => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_SUCCESS,
    payload,
});

/**
 * fetch register course failure
 * @param payload 
 * @returns 
 */
export const fetchRegisterCourseFailure = (
    payload: Types.FetchRegisterCourseFailurePayload
): Types.FetchRegisterCourseFailure => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_FAILURE,
    payload,
});

/**
 * register course success
 * @param payload 
 * @returns 
 */
export const registerCourseSuccess = (
    payload: Types.RegisterCourseSuccessPayload
): Types.RegisterCourseSuccess => ({
    type: ActionTypes.REGISTER_COURSE_SUCCESS,
    payload,
});

/**
 * register course failure 
 * @param payload 
 * @returns 
 */
export const registerCourseFailure = (
    payload: Types.RegisterCourseFailurePayload
): Types.RegisterCourseFailure => ({
    type: ActionTypes.REGISTER_COURSE_FAILURE,
    payload,
});