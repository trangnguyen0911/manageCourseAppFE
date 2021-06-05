import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from '../authen/AuthenticationService.js'
import { Menu, Layout } from 'antd';
import { BarsOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuComponent: React.FC = () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();

    return (
        <>
            {isUserLoggedIn && <Sider breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => { }}
                onCollapse={(collapsed, type) => { }}
                className="site-layout-background">
                <Menu className="menu"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User Information">
                        <Menu.Item key="1"><Link to="/users/profile" >Profile</Link></Menu.Item>
                        {/* <Menu.Item key="2"><Link to="/users/profile/redux" >Profile Redux</Link></Menu.Item> */}
                    </SubMenu>
                    <SubMenu key="sub2" icon={<BookOutlined />} title="Course">
                        {isAdminLoggedIn && <Menu.Item key="5"><Link to="/admin/courses/add">Add course</Link></Menu.Item>}
                        {isAdminLoggedIn && <Menu.Item key="6"><Link to="/admin/courses/all">All courses</Link></Menu.Item>}
                        <Menu.Item key="7"><Link to="/courses/all">Register courses</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<BarsOutlined />} title="Registered Course Information">
                        <Menu.Item key="9"><Link to="/registeredCourses/all">List registered courses</Link></Menu.Item>
                        {isAdminLoggedIn && <Menu.Item key="10"><Link to="/admin/registeredCourses/all">All registered courses</Link></Menu.Item>}
                    </SubMenu>
                </Menu>
            </Sider>}
        </>
    );
}

export default withRouter(MenuComponent)