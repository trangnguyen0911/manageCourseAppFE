import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

export const fetchCourseRequest = (): Types.FetchCourseRequest => ({
    type: ActionTypes.FETCH_COURSE_REQUEST,
});

export const fetchSearchCourseRequest = (contentSearch: string): Types.FetchSearchCourseRequest => ({
    type: ActionTypes.FETCH_SEARCH_COURSE_REQUEST, contentSearch
});

export const addCourseRequest = (course: Types.ICourse): Types.AddCourseRequest => ({
    type: ActionTypes.ADD_COURSE_REQUEST, course
});

export const editCourseRequest = (course: Types.ICourse): Types.EditCourseRequest => ({
    type: ActionTypes.EDIT_COURSE_REQUEST, course
});

export const deleteCourseRequest = (courseID: Number): Types.DeleteCourseRequest => ({
    type: ActionTypes.DELETE_COURSE_REQUEST, courseID
});

export const registerCourseRequest = (username: string, courseID: Number): Types.RegisterCourseRequest => ({
    type: ActionTypes.REGISTER_COURSE_REQUEST, username, courseID
});

export const confirmExistCourseRequest = (course: Types.ICourse): Types.ConfirmExistCourseRequest => ({
    type: ActionTypes.CONFIRM_EXIST_COURSE_REQUEST, course
});

export const fetchCourseSuccess = (
    payload: Types.FetchCourseSuccessPayload
): Types.FetchCourseSuccess => ({
    type: ActionTypes.FETCH_COURSE_SUCCESS,
    payload,
});

export const fetchCourseFailure = (
    payload: Types.FetchCourseFailurePayload
): Types.FetchCourseFailure => ({
    type: ActionTypes.FETCH_COURSE_FAILURE,
    payload,
});

export const courseSuccess = (
    payload: Types.CourseSuccessPayload
): Types.CourseSuccess => ({
    type: ActionTypes.COURSE_SUCCESS,
    payload,
});

export const courseFailure = (
    payload: Types.CourseFailurePayload
): Types.CourseFailure => ({
    type: ActionTypes.COURSE_FAILURE,
    payload,
});