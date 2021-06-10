import axios from "axios";
import { API_URL } from '../../web/utils/Constant'

/**
 * api call when login
 * @param username 
 * @param password 
 * @returns data
 */
export async function executeJwtAuthenticationService(username: string, password: string): Promise<any> {
    return await axios.post(`${API_URL}/authenticate`, {username, password});
}