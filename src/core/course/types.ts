import * as ActionTypes from "./actionTypes";

export interface ICourse {
    courseID?: number
    courseName: string
    description: string
    duration: number
    fee: number
    instructorEmail: string
    status: number
}

export interface CourseState {
    pending: boolean;
    courses: ICourse[];
    error: string | null;
}

/**
 * edit course
 */
export interface EditCourseRequest {
    type: typeof ActionTypes.EDIT_COURSE_REQUEST;
    course: ICourse
}

/**
 * delete course
 */
 export interface DeleteCourseRequest {
    type: typeof ActionTypes.DELETE_COURSE_REQUEST;
    courseID: Number
}

/**
 * register course
 */
 export interface RegisterCourseRequest {
    type: typeof ActionTypes.REGISTER_COURSE_REQUEST;
    username: string;
    courseID: Number;
}

/**
 * confirm exist course
 */
export interface ConfirmExistCourseRequest {
    type: typeof ActionTypes.CONFIRM_EXIST_COURSE_REQUEST;
    course: ICourse
}

/**
 * add course
 */
export interface CourseSuccessPayload {
    message: string
}

export interface CourseFailurePayload {
    error: string;
}

export interface AddCourseRequest {
    type: typeof ActionTypes.ADD_COURSE_REQUEST;
    course: ICourse
}

export type CourseSuccess = {
    type: typeof ActionTypes.COURSE_SUCCESS;
    payload: CourseSuccessPayload;
};

export type CourseFailure = {
    type: typeof ActionTypes.COURSE_FAILURE;
    payload: CourseFailurePayload;
};

/**
 * fetch courses
 */
export interface FetchCourseSuccessPayload {
    courses: ICourse[];
}

export interface FetchCourseFailurePayload {
    error: string;
}

export interface FetchCourseRequest {
    type: typeof ActionTypes.FETCH_COURSE_REQUEST;
}

export interface FetchSearchCourseRequest {
    type: typeof ActionTypes.FETCH_SEARCH_COURSE_REQUEST;
    contentSearch: string;
}

export type FetchCourseSuccess = {
    type: typeof ActionTypes.FETCH_COURSE_SUCCESS;
    payload: FetchCourseSuccessPayload;
};

export type FetchCourseFailure = {
    type: typeof ActionTypes.FETCH_COURSE_FAILURE;
    payload: FetchCourseFailurePayload;
};

export type CourseActions =
    | FetchCourseRequest
    | FetchSearchCourseRequest
    | FetchCourseSuccess
    | FetchCourseFailure
    | AddCourseRequest
    | EditCourseRequest
    | DeleteCourseRequest
    | RegisterCourseRequest
    | ConfirmExistCourseRequest
    | CourseSuccess
    | CourseFailure;