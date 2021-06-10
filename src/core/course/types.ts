import * as ActionTypes from "./actionTypes";

/**
 * define course type
 */
export interface ICourse {
    courseID?: number
    courseName: string
    description: string
    duration: number
    fee: number
    instructorEmail: string
    status: number
}

/**
 * define course state
 */
export interface CourseState {
    pending: boolean;
    courses: ICourse[];
    error: string | null;
    confirm: string;
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
 * course success payload
 */
export interface CourseSuccessPayload {
    confirm: string;
}

/**
 * course failure payload
 */
export interface CourseFailurePayload {
    error: string;
}

/**
 * add course request
 */
export interface AddCourseRequest {
    type: typeof ActionTypes.ADD_COURSE_REQUEST;
    course: ICourse
}

/**
 * course success
 */
export type CourseSuccess = {
    type: typeof ActionTypes.COURSE_SUCCESS;
    payload: CourseSuccessPayload;
};

/**
 * course failure
 */
export type CourseFailure = {
    type: typeof ActionTypes.COURSE_FAILURE;
    payload: CourseFailurePayload;
};

/**
 * fetch courses success payload
 */
export interface FetchCourseSuccessPayload {
    courses: ICourse[];
}

/**
 * fetch course failure payload
 */
export interface FetchCourseFailurePayload {
    error: string;
}

/**
 * fetch course request
 */
export interface FetchCourseRequest {
    type: typeof ActionTypes.FETCH_COURSE_REQUEST;
}

/**
 * fetch search course request
 */
export interface FetchSearchCourseRequest {
    type: typeof ActionTypes.FETCH_SEARCH_COURSE_REQUEST;
    contentSearch: string;
}

/**
 * fetch course success
 */
export type FetchCourseSuccess = {
    type: typeof ActionTypes.FETCH_COURSE_SUCCESS;
    payload: FetchCourseSuccessPayload;
};

/**
 * fetch course failure
 */
export type FetchCourseFailure = {
    type: typeof ActionTypes.FETCH_COURSE_FAILURE;
    payload: FetchCourseFailurePayload;
};

/**
 * export type course actions
 */
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