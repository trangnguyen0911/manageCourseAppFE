import AuthenticationService from './AuthenticationService.js'
import { Redirect, Route } from 'react-router-dom'

type IProps = {path: string} & { component: any };

/** 
 * Route for only logged in user
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
const AuthenticatedRoute: React.FC<IProps> = (props) => {
    return AuthenticationService.isUserLoggedIn()? <Route {...props}/> : <Redirect to="/login" />
}

export default AuthenticatedRoute