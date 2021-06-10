import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, Card } from 'antd'
import AuthenticationService from '../authen/AuthenticationService.js'
import { getUserSelector } from '../../../core/user/selector'
import { getUserByUserNameRequest } from '../../../core/user/actions'
import { IUser } from '../../../core/user/types'

const username = AuthenticationService.getLoggedInUserName()

/**
 * ViewUserInfoComponent
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
const ViewUserInfoComponent: React.FC<IUser> = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserSelector);
    const history = useHistory();

    /**
     * get user by user name
     */
    useEffect(() => {
        dispatch(getUserByUserNameRequest(username));
    }, []);

    return (
        <div className="site-card-border-less-wrapper">
            <Card title="User Profile" bordered={false} style={{ width: '90%' }}>
                <Row>
                    <Col span={8}>
                        <h4>User name:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{user?.username}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Full name:</h4>
                    </Col>
                    <Col span={16}>
                        <p>{user?.fullname}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Gender:</h4>
                    </Col>
                    <Col span={16}>
                        <p>{user?.gender === 0 ? "Male" : "Female"}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Birthdate:</h4>
                    </Col>
                    <Col span={16}>
                        <p>{user?.birthdate.toString()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Email:</h4>
                    </Col>
                    <Col span={16}>
                        <p className="wrap-text">{user?.email}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight: '2px' }} onClick={() => history.push("/courses/all")}>View all courses</Button>
                    <Button htmlType="button" style={{ background: 'green', color: 'white' }} onClick={() => history.push(`/users/${user?.username}/edit`)}>Edit</Button>
                </Row>
            </Card>

        </div>

    )
}

export default ViewUserInfoComponent
