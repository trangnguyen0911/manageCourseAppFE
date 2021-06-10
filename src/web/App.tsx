import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import HeaderComponent from './components/common/HeaderComponent'
import MenuComponent from './components/common/MenuComponent'
import ErrorComponent from './components/common/ErrorComponent'
import ErrorAuthorComponent from './components/common/ErrorAuthorPage'
import WelcomeComponent from './components/common/WelcomeComponent'
import LoginComponent from './components/authen/LoginComponent'
import ListCourseRoleAdminComponent from './components/course/ListCourseRoleAdminComponent'
import ListCourseComponent from './components/course/ListCourseComponent'
import AddCourseComponent from './components/course/AddCourseComponent'
import EditCourseComponent from './components/course/EditCourseComponent'
import ViewCourseComponent from './components/course/ViewCourseComponent'
import ListRegisterCourseRoleAdminComponent from './components/registerCourse/ListRegisterCourseRoleAdminComponent'
import ViewRegisterCourseRoleAdminComponent from './components/registerCourse/ViewRegisterCourseRoleAdminComponent'
import ListRegisterCourseComponent from './components/registerCourse/ListRegisterCourseComponent'
import ViewRegisterCourseComponent from './components/registerCourse/ViewRegisterCourseComponent'
import SignUpComponent from './components/user/SignUpComponent'
import ViewUserInfoComponent from './components/user/ViewUserInfoComponent'
import EditUserInfoComponent from './components/user/EditUserInfoComponent'
import AuthenticatedRoute from './components/authen/AuthenticatedRoute'
import AdminRoute from './components/authen/AdminRoute'
import LogoutComponent from './components/authen/LogoutComponent'

const { Content} = Layout;

/**
 * Define path for each component
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
const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Layout>
          <MenuComponent />
          <Layout style={{ padding: '0 10px 10px' }}>
            <Content className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 700,
              }}
            >
              <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/signup" component={SignUpComponent} />
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                <AuthenticatedRoute path="/users/profile" component ={ViewUserInfoComponent} />
                <AuthenticatedRoute path="/users/:name/edit" component={EditUserInfoComponent} />
                <Route path="/author/error" component={ErrorAuthorComponent} />
                <AdminRoute path="/admin/courses/all" component={ListCourseRoleAdminComponent} />
                <AdminRoute path="/admin/courses/add" component={AddCourseComponent} />
                <AdminRoute path="/admin/registeredCourses/all" component={ListRegisterCourseRoleAdminComponent} />
                <AdminRoute path="/admin/registeredCourses/view" component={ViewRegisterCourseRoleAdminComponent} />
                <AuthenticatedRoute path="/registeredCourses/all" component={ListRegisterCourseComponent} />
                <AuthenticatedRoute path="/registeredCourses/view" component={ViewRegisterCourseComponent} />
                <AdminRoute path="/admin/courses/edit" component={EditCourseComponent} />
                <AuthenticatedRoute path="/courses/all" component={ListCourseComponent} />
                <AuthenticatedRoute path="/courses/view" component={ViewCourseComponent} />
                <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                <Route component={ErrorComponent} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App