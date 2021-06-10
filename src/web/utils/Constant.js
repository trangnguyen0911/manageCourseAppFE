/**
 * Constant
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

export const API_URL = 'http://localhost:8080'

export const ERR01 = "Data does not exist. Please REFRESH page to get the latest data!"
export const ERR01_REGISTER_COURSE = "You canceled this course!"
export const ERR11 = "Course name exists. Please choose a different name!"
export const ERR12 = "Email exists. Please choose a different one!"
export const ERR13 = "User name exists. Please choose a different one!"
export const ERR12ERR13 = "User name and email exists. Please choose a different one!"
export const NOERR_DELETE = "Delete successfully!"
export const NOERR_EDIT = "Update successfully!"
export const NOERR_REGISTER = "Register successfully!"
export const NOERR_ADD = "Add successfully!"
export const NOERR_SIGNUP = "Sign up successfully!"
export const NOERR_CANCEL = "Cancel successfully!"
export const ERR10 = "You have already registered this course!"
export const ERR_SYSTEM = "System error. Please contact the manager for support!"

export const PASSWORD = "Password must have at least 8 characters, containing at least 1 upper case, 1 lower case character, 1 digit and 1 special character."
export const PASSWORD_MAX = 'Password should not be longer than 20 characters.'
export const MAX_LENGTH = " must have length less than "
export const PASSWORD_CONFIRM = "Please confirm your Password!"
export const PASSWORD_CONFIRM_MATCH = "The two passwords that you entered do not match!"
export const INVALID_LOGIN = "Invalid log in information"

/**
 * validate message ant design form
 */
export const validateMessages = {
    required: "Please input ${label}!",
    types: {
        email: "${label} is not in correct format!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}"
    }
};

export const validateMaxLength = (label, max) => {return label +  " must have length less than " + max }

export const deleteCourseMessage = (number) => {return "There are " + number + " students learning this course so you can't delete it!"}

export const backMessage = "When you click Yes, the current data will be lost if you haven't update yet. Are you sure to back?"