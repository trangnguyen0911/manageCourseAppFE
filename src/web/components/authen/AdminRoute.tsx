import { Redirect, Route } from 'react-router-dom'
import AuthenticationService from '../../../core/sercurity/AuthenticationService.js'

type IProps = {path: string} & { component: any };

/** 
 * Route for only admin
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
const AdminRoute: React.FC<IProps> = (props) => {
    return AuthenticationService.isAdminLoggedIn()? <Route {...props}/> : <Redirect to="/author/error" />
}

export default AdminRoute