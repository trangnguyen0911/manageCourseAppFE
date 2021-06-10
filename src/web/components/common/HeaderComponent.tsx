import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import { useDispatch} from "react-redux";
import { LogoutRequest } from '../../../core/sercurity/actions'
import AuthenticationService from '../authen/AuthenticationService.js'
import { HomeOutlined } from '@ant-design/icons';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header} = Layout;

/** 
 * Header component
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
const HeaderComponent: React.FC = () => {
    const dispatch = useDispatch();
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
        <Header style={{ padding: 12, backgroundColor: '#116466' }}>
            {!isUserLoggedIn && <Title style={{ float: 'right' }} level={4}><Link to="/login" style={{ color: 'white' }} className="log-in-out">Login</Link></Title>}
            {isUserLoggedIn && <Title style={{ float: 'right' }} level={4}><Link to="/logout" style={{ color: 'white' }} className="log-in-out" onClick={() => dispatch(LogoutRequest())}>Logout</Link></Title>}
            {isUserLoggedIn && <Link className="nav-link" to="/welcome/Shin"><HomeOutlined style={{ color: 'white' }} className="home log-in-out" /></Link>}
        </Header>
    );
}

export default withRouter(HeaderComponent)