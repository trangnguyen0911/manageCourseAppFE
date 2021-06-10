import * as ActionTypes from "./actionTypes";
import * as Types from "./types";

/**
 * fetch course request
 * @returns 
 */
export const fetchCourseRequest = (): Types.FetchCourseRequest => ({
    type: ActionTypes.FETCH_COURSE_REQUEST,
});

/**
 * fetch search course request
 * @param contentSearch 
 * @returns 
 */
export const fetchSearchCourseRequest = (contentSearch: string): Types.FetchSearchCourseRequest => ({
    type: ActionTypes.FETCH_SEARCH_COURSE_REQUEST, contentSearch
});

/**
 * add course request
 * @param course 
 * @returns 
 */
export const addCourseRequest = (course: Types.ICourse): Types.AddCourseRequest => ({
    type: ActionTypes.ADD_COURSE_REQUEST, course
});

/**
 * edit course request
 * @param course 
 * @returns 
 */
export const editCourseRequest = (course: Types.ICourse): Types.EditCourseRequest => ({
    type: ActionTypes.EDIT_COURSE_REQUEST, course
});

/**
 * delete course request
 * @param courseID 
 * @returns 
 */
export const deleteCourseRequest = (courseID: Number): Types.DeleteCourseRequest => ({
    type: ActionTypes.DELETE_COURSE_REQUEST, courseID
});

/**
 * register course request
 * @param username 
 * @param courseID 
 * @returns 
 */
export const registerCourseRequest = (username: string, courseID: Number): Types.RegisterCourseRequest => ({
    type: ActionTypes.REGISTER_COURSE_REQUEST, username, courseID
});

/**
 * confirm exist course request
 * @param course 
 * @returns 
 */
export const confirmExistCourseRequest = (course: Types.ICourse): Types.ConfirmExistCourseRequest => ({
    type: ActionTypes.CONFIRM_EXIST_COURSE_REQUEST, course
});

/**
 * fetch course success
 * @param payload 
 * @returns 
 */
export const fetchCourseSuccess = (
    payload: Types.FetchCourseSuccessPayload
): Types.FetchCourseSuccess => ({
    type: ActionTypes.FETCH_COURSE_SUCCESS,
    payload,
});

/**
 * fetch course failure
 * @param payload 
 * @returns 
 */
export const fetchCourseFailure = (
    payload: Types.FetchCourseFailurePayload
): Types.FetchCourseFailure => ({
    type: ActionTypes.FETCH_COURSE_FAILURE,
    payload,
});

/**
 * course success
 * @param payload 
 * @returns 
 */
export const courseSuccess = (
    payload: Types.CourseSuccessPayload
): Types.CourseSuccess => ({
    type: ActionTypes.COURSE_SUCCESS,
    payload,
});

/**
 * course failure
 * @param payload 
 * @returns 
 */
export const courseFailure = (
    payload: Types.CourseFailurePayload
): Types.CourseFailure => ({
    type: ActionTypes.COURSE_FAILURE,
    payload,
});