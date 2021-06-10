import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { ICourse } from "../course/types";

/**
 * get all courses
 * @returns all courses
 */
export async function fetchCourseAPI(): Promise<ICourse[]> {
    return await axios.get(`${API_URL}/courses/all`);
}

/**
 * search courses
 * @returns searched courses
 */
export async function fetchSearchCourseAPI(contentSearch: string): Promise<ICourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/courses/all`);
    }
    return await axios.get(`${API_URL}/courses/search/${contentSearch}`);
}

/**
 * add new course
 * @param course 
 * @returns message
 */
export async function addCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/add`, course);
}

/**
 * edit course
 * @param course 
 * @returns message
 */
export async function editCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/edit/${course.courseID}`, course);
}

/**
 * confirm exist course
 * @param course 
 * @returns message
 */
export async function confirmExistCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/confirm/${course.courseID}`);
}

/**
 * delete course
 * @param courseID 
 * @returns message
 */
export async function deleteCourseAPI(courseID: Number): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/delete/${courseID}`);
}

/**
 * register course
 * @param username 
 * @param courseID 
 * @returns message
 */
export async function registerCourseAPI(username: string, courseID: Number): Promise<ICourse> {
    return await axios.post(`${API_URL}/registercourse/${username}/${courseID}`);
}