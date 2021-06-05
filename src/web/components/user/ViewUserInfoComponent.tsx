import { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Card } from 'antd'
import axios from 'axios';
import { API_URL } from '../../utils/Constant.js'
import AuthenticationService from '../authen/AuthenticationService.js'
import { useDispatch } from "react-redux";
import { IUser } from '../../../core/user/types'
import { message } from 'antd';
import * as constant from '../../utils/Constant';

/**
 * Add information form, handle add usertodo api
 */
const username = AuthenticationService.getLoggedInUserName()
const ViewUserInfoComponent: React.FC<IUser> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState<IUser>()

    // call api to view user information
    const getUserInfor = useCallback(
        async () => {

            try {
                const response = await axios.get(
                    `${API_URL}/users/${username}`
                )
                const data = await response.data
                setUser(data)
            } catch (error) {
                message.error(constant.ERR_SYSTEM, 5)
            }
        },
        []
    )

    // effect side when fetch data
    useEffect(() => {
        getUserInfor()
    }, [getUserInfor])

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
                        <p>{user?.gender === 0? "Male" : "Female"}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>Birthdate:</h4>
                    </Col>
                    <Col span={16}>
                        <p>{user?.birthdate}</p>
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
                    <Button htmlType="button" style={{ background: 'green', color: 'white'}} onClick={() => history.push(`/users/${user?.username}/edit`) }>Edit</Button>
                </Row>
            </Card>

        </div>

    )
}

export default ViewUserInfoComponent
