import axios from "axios"

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const ROLE = 'role'

/**
 * Authentication service when logged in and logged out
 */
class AuthenticationService {
    /**
     * handle register success login 
     * @param username 
     * @param token 
     * @param role 
     */
    registerSuccessfulLoginForJwt(username, token, role) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        sessionStorage.setItem(ROLE, role)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    /**
     * create jwt token
     * @param token 
     * @returns 
     */
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    /**
     * handle logout
     */
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(ROLE);
    }

    /**
     * check whether logged in or not
     */ 
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    /**
     * get user name after logged in
     */ 
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    /**
     * check whether admin is logged in
     */
    isAdminLoggedIn() {
        let role = sessionStorage.getItem(ROLE)
        if (role === "ADMIN") return true
        return false
    }

    /**
     * set up axios interceptors
     * @param token 
     */
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()