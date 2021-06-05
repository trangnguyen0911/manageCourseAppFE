import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import HeaderComponent from './components/common/HeaderComponent'
import MenuComponent from './components/common/MenuComponent'
import ErrorComponent from './components/common/ErrorComponent'
import ErrorAuthorComponent from './components/common/ErrorAuthorPage'
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

const { Content} = Layout;

/**
 * Define path for each component
 * AuthenticatedRoute for components only can access when logged in
 */
const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Layout>
          <MenuComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
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
                <Route path="/users/profile" component ={ViewUserInfoComponent} />
                <Route path="/author/error" component={ErrorAuthorComponent} />
                <Route path="/admin/courses/all" component={ListCourseRoleAdminComponent} />
                <Route path="/admin/courses/add" component={AddCourseComponent} />
                <Route path="/admin/registeredCourses/all" component={ListRegisterCourseRoleAdminComponent} />
                <Route path="/admin/registeredCourses/view" component={ViewRegisterCourseRoleAdminComponent} />
                <Route path="/registeredCourses/all" component={ListRegisterCourseComponent} />
                <Route path="/registeredCourses/view" component={ViewRegisterCourseComponent} />
                <Route path="/admin/courses/edit" component={EditCourseComponent} />
                <Route path="/courses/all" component={ListCourseComponent} />
                <Route path="/courses/view" component={ViewCourseComponent} />
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