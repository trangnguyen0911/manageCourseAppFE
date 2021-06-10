export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const USER_ROLE = 'role'

/** 
 * Authentication service when logged in and logged out
 * 
 * Version 1.0
 * 
 * Date 01-6-2021
 * 
 * Copyright
 * 
 * Modification Logs: 
 * DATE        AUTHOR    DESCRIPTION
 * ----------------------------------- 
 * 01-6-2021  TrangNTT46    Create
 */
class AuthenticationService {
    /**
     * check whether logged in or not
     */
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    /**
     * check whether admin logged in or not
     */
    isAdminLoggedIn() {
        let role = sessionStorage.getItem(USER_ROLE)
        if (role !== "ADMIN") return false
        return true
    }

    /**
     * get user name of user
     */
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService()