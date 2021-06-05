import AuthenticationService from './AuthenticationService.js'
import { Redirect, Route } from 'react-router-dom'

type IProps = {path: string} & { component: any };

const AdminRoute: React.FC<IProps> = (props) => {
    return AuthenticationService.isAdminLoggedIn()? <Route {...props}/> : <Redirect to="/author/error" />
}

export default AdminRoute