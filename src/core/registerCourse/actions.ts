import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

export const fetchRegisterCourseRequest = (): Types.FetchRegisterCourseRequest => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_REQUEST,
});

export const fetchSearchRegisterCourseRequest = (contentSearch: string): Types.FetchSearchRegisterCourseRequest => ({
    type: ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST, contentSearch
});

export const fetchRegisterCourseByUserNameRequest = (username: string): Types.FetchRegisterCourseByUserNameRequest => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, username
});

export const fetchSearchRegisterCourseByUserNameRequest = (contentSearch: string, username: string): Types.FetchSearchRegisterCourseByUserNameRequest => ({
    type: ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST, contentSearch, username
});

export const cancelRegisterCourseRequest = (username: string, registerCourse: Types.IRegisterCourse): Types.CancelRegisterCourseRequest => ({
    type: ActionTypes.CANCEL_REGISTER_COURSE_REQUEST, username, registerCourse
});

export const confirmExistRegisterCourseRequest = (registerCourse: Types.IRegisterCourse): Types.ConfirmExistRegisterCourseRequest => ({
    type: ActionTypes.CONFIRM_EXIST_REGISTER_COURSE_REQUEST, registerCourse
});

export const fetchRegisterCourseSuccess = (
    payload: Types.FetchRegisterCourseSuccessPayload
): Types.FetchRegisterCourseSuccess => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_SUCCESS,
    payload,
});

export const fetchRegisterCourseFailure = (
    payload: Types.FetchRegisterCourseFailurePayload
): Types.FetchRegisterCourseFailure => ({
    type: ActionTypes.FETCH_REGISTER_COURSE_FAILURE,
    payload,
});

export const registerCourseSuccess = (
    payload: Types.RegisterCourseSuccessPayload
): Types.RegisterCourseSuccess => ({
    type: ActionTypes.REGISTER_COURSE_SUCCESS,
    payload,
});

export const registerCourseFailure = (
    payload: Types.RegisterCourseFailurePayload
): Types.RegisterCourseFailure => ({
    type: ActionTypes.REGISTER_COURSE_FAILURE,
    payload,
});