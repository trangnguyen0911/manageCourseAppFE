import * as ActionTypes from "./actionTypes";

/**
 * define registercourse type
 */
export interface IRegisterCourse {
    courseID: number
    studentID: number
    username: string
    courseName: string
    email: string
    instructorEmail: string
    duration: number
    description: string
    registerDate: string
}

/**
 * define registercourse state
 */
export interface RegisterCourseState {
    pending: boolean;
    registerCourses: IRegisterCourse[];
    error: string | null;
}

/**
 * cancel register course
 */
 export interface CancelRegisterCourseRequest {
    type: typeof ActionTypes.CANCEL_REGISTER_COURSE_REQUEST;
    username: string;
    registerCourse: IRegisterCourse;
}

/**
 * confirm exist registered course
 */
export interface ConfirmExistRegisterCourseRequest {
    type: typeof ActionTypes.CONFIRM_EXIST_REGISTER_COURSE_REQUEST;
    registerCourse: IRegisterCourse
}

/**
 * register course success payload
 */
export interface RegisterCourseSuccessPayload {
    message: string
}

/**
 * register course failure payload
 */
export interface RegisterCourseFailurePayload {
    error: string;
}

/**
 * register course success
 */
export type RegisterCourseSuccess = {
    type: typeof ActionTypes.REGISTER_COURSE_SUCCESS;
    payload: RegisterCourseSuccessPayload;
};

/**
 * register course failure
 */
export type RegisterCourseFailure = {
    type: typeof ActionTypes.REGISTER_COURSE_FAILURE;
    payload: RegisterCourseFailurePayload;
};

/**
 * fetch register course success payload
 */
export interface FetchRegisterCourseSuccessPayload {
    registerCourses: IRegisterCourse[];
}

/**
 * fetch regitered courses
 */
export interface FetchRegisterCourseRequest {
    type: typeof ActionTypes.FETCH_REGISTER_COURSE_REQUEST;
}

/**
 * search registered course 
 */
 export interface FetchSearchRegisterCourseRequest {
    type: typeof ActionTypes.FETCH_SEARCH_REGISTER_COURSE_REQUEST;
    contentSearch: string;
}

/**
 * fetch register course failure payload
 */
export interface FetchRegisterCourseFailurePayload {
    error: string;
}


/**
 * fetch registered courses by user name
 */
export interface FetchRegisterCourseByUserNameRequest {
    type: typeof ActionTypes.FETCH_REGISTER_COURSE_BY_USER_NAME_REQUEST;
    username: string;
}

/**
 * search registered courses by user name
 */
export interface FetchSearchRegisterCourseByUserNameRequest {
    type: typeof ActionTypes.FETCH_SEARCH_REGISTER_COURSE_BY_USER_NAME_REQUEST;
    contentSearch: string;
    username: string;
}

/**
 * fetch register course success
 */
export type FetchRegisterCourseSuccess = {
    type: typeof ActionTypes.FETCH_REGISTER_COURSE_SUCCESS;
    payload: FetchRegisterCourseSuccessPayload;
};

/**
 * fetch register course failure
 */
export type FetchRegisterCourseFailure = {
    type: typeof ActionTypes.FETCH_REGISTER_COURSE_FAILURE;
    payload: FetchRegisterCourseFailurePayload;
};

/**
 * export type registercourse actions
 */
export type RegisterCourseActions =
    | FetchRegisterCourseRequest
    | FetchSearchRegisterCourseRequest
    | FetchRegisterCourseSuccess
    | FetchRegisterCourseFailure
    | RegisterCourseSuccess
    | RegisterCourseFailure
    | ConfirmExistRegisterCourseRequest
    | FetchRegisterCourseByUserNameRequest
    | FetchSearchRegisterCourseByUserNameRequest
    | CancelRegisterCourseRequest;