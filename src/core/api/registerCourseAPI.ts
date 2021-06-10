import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { IRegisterCourse } from "../registerCourse/types";

/**
 * get all registered courses
 * @returns list of registered course
 */
export async function fetchRegisterCourseAPI(): Promise<IRegisterCourse[]> {
    return await axios.get(`${API_URL}/registercourse/all`);
}

/**
 * get registered courses by user name
 * @param username 
 * @returns list of registered courses by user name
 */
export async function fetchRegisterCourseByUserNameAPI(username: string): Promise<IRegisterCourse[]> {
    return await axios.get(`${API_URL}/registercourse/${username}/courses`);
}

/**
 * search registered courses
 * @returns list of searched registered course
 */
export async function fetchSearchRegisterCourseAPI(contentSearch: string): Promise<IRegisterCourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/registercourse/all`);
    }
    return await axios.get(`${API_URL}/registercourse/search/${contentSearch}`);
}

/**
 * search registered courses by user name and content search
 * @returns list of searched registered course by user name
 */
export async function fetchSearchRegisterCourseByUserNameAPI(contentSearch: string, username: string): Promise<IRegisterCourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/registercourse/${username}/courses`);
    }
    return await axios.get(`${API_URL}/registercourse/${username}/search/${contentSearch}`);
}

/**
 * cancel registered course
 * @param username 
 * @param registeredCourse 
 * @returns message
 */
export async function cancelRegisterCourseAPI(username: string, registeredCourse: IRegisterCourse): Promise<IRegisterCourse> {
    return await axios.post(`${API_URL}/registercourse/${username}/cancel`, registeredCourse);
}