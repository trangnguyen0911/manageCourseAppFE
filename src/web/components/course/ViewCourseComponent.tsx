import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button, Row, Col, Popconfirm, Card } from 'antd'
import AuthenticationService from '../authen/AuthenticationService.js'
import { ICourse } from '../../../core/course/types'
import { registerCourseRequest } from '../../../core/course/actions'

/**
 * Add information form, handle add usertodo api
 */
const ViewCourseComponent: React.FC<ICourse> = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const temp: any = location.state;

    // call api to register course
    const onRegister = (courseID: Number) => {
        const username = AuthenticationService.getLoggedInUserName()
        dispatch(registerCourseRequest(username, courseID));
    }

    return (
        <div className="site-card-border-less-wrapper">
            <Card title="Course Information" bordered={false} style={{ width: '95%' }}>
                <Row>
                    <Col xs={24} xl={9}>
                        <h4>Course name:</h4>
                    </Col>
                    <Col xs={24} xl={15}>
                        <p className="wrap-text">{temp.course.courseName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} xl={9}>
                        <h4>Instructor email:</h4>
                    </Col>
                    <Col xs={24} xl={15}>
                        <p>{temp.course.instructorEmail}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} xl={9}>
                        <h4>Duration (minutes):</h4>
                    </Col>
                    <Col xs={24} xl={15}>
                        <p>{temp.course.duration}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} xl={9}>
                        <h4>Fee:</h4>
                    </Col>
                    <Col xs={24} xl={15}>
                        <p>{temp.course.fee}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} xl={9}>
                        <h4>Description:</h4>
                    </Col>
                    <Col xs={24} xl={15}>
                        <p className="wrap-text">{temp.course.description}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Popconfirm placement="top" title={"Are you sure to back to the list?"} onConfirm={() => history.push("/courses/all")} okText="Yes" cancelText="No">
                        <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight: '2px' }} >Back</Button>
                    </Popconfirm>
                    <Button htmlType="button" style={{ background: 'green', color: 'white', marginRight: '2px' }} onClick={() => onRegister(temp.course.courseID)}>Register</Button>
                </Row>
            </Card>

        </div>

    )
}

export default ViewCourseComponent
