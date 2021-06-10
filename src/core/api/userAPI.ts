import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { IUser } from "../user/types";

/**
 * add user when sign up
 * @param user 
 * @returns message
 */
export async function addUserAPI(user: IUser): Promise<IUser> {
    return await axios.post(`${API_URL}/users/add`, user);
}

/**
 * edit user
 * @param user 
 * @returns message
 */
export async function editUserAPI(user: IUser): Promise<IUser> {
    return await axios.post(`${API_URL}/users/${user.username}/edit`, user);
}

/**
 * get user by user name
 * @param username 
 * @returns user
 */
export async function getUserByUserNameAPI(username: string): Promise<IUser> {
    return await axios.get(`${API_URL}/users/${username}`);
}