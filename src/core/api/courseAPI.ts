import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { ICourse } from "../course/types";

export async function fetchCourseAPI(): Promise<ICourse[]> {
    return await axios.get(`${API_URL}/courses/all`);
}

export async function fetchSearchCourseAPI(contentSearch: string): Promise<ICourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/courses/all`);
    }
    return await axios.get(`${API_URL}/courses/search/${contentSearch}`);
}

export async function addCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/add`, course);
}

export async function editCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/edit/${course.courseID}`, course);
}

export async function confirmExistCourseAPI(course: ICourse): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/confirm/${course.courseID}`);
}

export async function deleteCourseAPI(courseID: Number): Promise<ICourse> {
    return await axios.post(`${API_URL}/courses/course/delete/${courseID}`);
}

export async function registerCourseAPI(username: string, courseID: Number): Promise<ICourse> {
    return await axios.post(`${API_URL}/registercourse/${username}/${courseID}`);
}