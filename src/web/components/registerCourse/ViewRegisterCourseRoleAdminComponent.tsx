import { useDispatch } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';
import { Button, Row, Col, Popconfirm, Card, message} from 'antd'
import { IRegisterCourse } from '../../../core/registerCourse/types'
import { cancelRegisterCourseRequest } from '../../../core/registerCourse/actions'
import AuthenticationService from '../authen/AuthenticationService.js'

/**
 * Add information form, handle add usertodo api
 */
const ViewRegisterCourseRoleAdminComponent: React.FC<IRegisterCourse> = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const temp: any = location.state;

    const onCancelRegister = (registerCourse: IRegisterCourse) => {
        const username = AuthenticationService.getLoggedInUserName()
        dispatch(cancelRegisterCourseRequest(username, registerCourse));
    }

    return (
        <div className="site-card-border-less-wrapper">
            <Card title="Registration Detail" bordered={false} style={{ width: '95%' }}>
                <Row>
                    <Col span={8}>
                        <h4>User name:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{temp.registeredCourse.username}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>User email:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{temp.registeredCourse.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Course name:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{temp.registeredCourse.courseName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Instructor email:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{temp.registeredCourse.instructorEmail}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Duration (in minutes):</h4>
                    </Col>
                    <Col span={16}>
                        <p>{temp.registeredCourse.duration}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Description:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{temp.registeredCourse.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Register Date:</h4>
                    </Col>
                    <Col span={16}>
                        <p>{temp.registeredCourse.registerDate}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Popconfirm placement="top" title={"Are you sure to back to the list?"} onConfirm={() => history.push("/admin/registeredCourses/all")} okText="Yes" cancelText="No">
                        <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight: '2px' }} >Back</Button>
                    </Popconfirm>

                    <Popconfirm placement="top" title={"Are you sure to cancel this course?"} onConfirm={() => onCancelRegister(temp.registeredCourse)} okText="Yes" cancelText="No">
                        <Button htmlType="button" style={{ background: 'green', color: 'white' }}>Cancel Registration</Button>
                    </Popconfirm>
                </Row>
            </Card>

        </div>

    )
}

export default ViewRegisterCourseRoleAdminComponent