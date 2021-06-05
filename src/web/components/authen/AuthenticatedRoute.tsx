import AuthenticationService from './AuthenticationService.js'
import { Redirect, Route } from 'react-router-dom'

type IProps = {path: string} & { component: any };

const AuthenticatedRoute: React.FC<IProps> = (props) => {
    return AuthenticationService.isUserLoggedIn()? <Route {...props}/> : <Redirect to="/login" />
}

export default AuthenticatedRoute