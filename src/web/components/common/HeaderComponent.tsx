import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from '../authen/AuthenticationService.js'
import { HomeOutlined } from '@ant-design/icons';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header} = Layout;

const HeaderComponent: React.FC = () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
        <Header style={{ padding: 12, backgroundColor: '#116466' }}>
            {!isUserLoggedIn && <Title style={{ float: 'right' }} level={4}><Link to="/login" style={{ color: 'white' }}>Login</Link></Title>}
            {isUserLoggedIn && <Title style={{ float: 'right' }} level={4}><Link to="/logout" style={{ color: 'white' }} onClick={AuthenticationService.logout}>Logout</Link></Title>}
            {isUserLoggedIn && <Link className="nav-link" to="/welcome/Shin"><HomeOutlined style={{ color: 'white' }} className="home" /></Link>}
        </Header>
    );
}

export default withRouter(HeaderComponent)