import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { IRegisterCourse } from "../registerCourse/types";

export async function fetchRegisterCourseAPI(): Promise<IRegisterCourse[]> {
    return await axios.get(`${API_URL}/registercourse/all`);
}

export async function fetchRegisterCourseByUserNameAPI(username: string): Promise<IRegisterCourse[]> {
    return await axios.get(`${API_URL}/registercourse/${username}/courses`);
}

export async function fetchSearchRegisterCourseAPI(contentSearch: string): Promise<IRegisterCourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/registercourse/all`);
    }
    return await axios.get(`${API_URL}/registercourse/search/${contentSearch}`);
}

export async function fetchSearchRegisterCourseByUserNameAPI(contentSearch: string, username: string): Promise<IRegisterCourse[]> {
    if (contentSearch === null || contentSearch.trim() === "") {
        return await axios.get(`${API_URL}/registercourse/${username}/courses`);
    }
    return await axios.get(`${API_URL}/registercourse/${username}/search/${contentSearch}`);
}

export async function cancelRegisterCourseAPI(username: string, registeredCourse: IRegisterCourse): Promise<IRegisterCourse> {
    return await axios.post(`${API_URL}/registercourse/${username}/cancel`, registeredCourse);
}
