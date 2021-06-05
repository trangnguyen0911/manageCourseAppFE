import axios from "axios";
import { API_URL } from '../../web/utils/Constant'
import { IUser } from "../user/types";

export async function addUserAPI(user: IUser): Promise<IUser> {
    return await axios.post(`${API_URL}/users/add`, user);
}

export async function editUserAPI(user: IUser): Promise<IUser> {
    return await axios.post(`${API_URL}/users/${user.username}/edit`, user);
}