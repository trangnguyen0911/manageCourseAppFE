import { RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button, Table, Popconfirm, Tooltip, Spin, Space, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Column from 'antd/lib/table/Column';
import { Input, Typography, Row, Col } from 'antd';
import * as constant from '../../utils/Constant';
import {
    getPendingSelector,
    getCoursesSelector,
    getErrorSelector,
} from '../../../core/course/selector'
import { fetchCourseRequest, fetchSearchCourseRequest, confirmExistCourseRequest, deleteCourseRequest } from '../../../core/course/actions'
import { ICourse } from '../../../core/course/types'

const { Search } = Input;
const { Title } = Typography;

const ListCourseRoleAdminComponent: React.FC<RouteComponentProps> = (props) => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const courses = useSelector(getCoursesSelector);
    const error = useSelector(getErrorSelector);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCourseRequest());
    }, []);

    const onSearch = (value: any) => {
        dispatch(fetchSearchCourseRequest(value));
    }

    const onEdit = (course: ICourse) => {
        dispatch(confirmExistCourseRequest(course));
        history.push({ pathname: `/admin/courses/edit`, state: { course: course } })
    }

    const onDelete = (courseID: Number) => {
        dispatch(deleteCourseRequest(courseID));
    }

    return (
        <div>
            {pending ? (
                <Space size="middle">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </Space>
            ) : error ? (
                message.error(constant.ERR_SYSTEM, 5)
            ) : (<>
                <Title style={{ textAlign: 'center' }} level={2}>LIST OF ALL COURSES</Title>
                <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Col span={24}>
                        <Button type="default" style={{ marginRight: '3px', background: '#2e8b57', color: 'white' }}><Link to="/admin/courses/add">Add Course</Link></Button>
                        <Button type="default" style={{ background: 'black', color: 'white' }} onClick={() => window.location.reload()}>Refresh</Button>
                        <Search placeholder="content search" onSearch={onSearch} enterButton style={{ float: 'right', width: 'auto' }} />
                    </Col>
                </Row>

                <Table
                    dataSource={courses}
                    pagination={{ pageSizeOptions: ["5", "10", "20"], showSizeChanger: true, showQuickJumper: true, defaultPageSize: 5, total: courses.length, showTotal: total => `Total ${total} items` }}
                    scroll={{ y: 320 }} >
                    <Column title='Course Name' dataIndex='courseName' key="courseName"
                        sorter={(a: any, b: any) => a.courseName.toLowerCase() > b.courseName.toLowerCase() ? 1 : -1}
                        render={text =>
                            <Tooltip placement="topLeft" title={text}>
                                {text}
                            </Tooltip>
                        }
                    />
                    <Column title='Description' dataIndex='description' key="description"
                        render={text =>
                            <Tooltip placement="topLeft" title={text}>
                                {text}
                            </Tooltip>
                        }
                    />
                    <Column title="Instructor's Email" dataIndex='instructorEmail' key="instructorEmail"
                        sorter={(a: any, b: any) => a.instructorEmail.toLowerCase() > b.instructorEmail.toLowerCase() ? 1 : -1}
                        render={text =>
                            <Tooltip placement="topLeft" title={text}>
                                {text}
                            </Tooltip>
                        }
                    />
                    <Column title='Duration (minutes)' dataIndex='duration' key="duration" width='10%' className="text-right"
                        sorter={(a: any, b: any) => a.duration - b.duration}
                        render={text =>
                            <Tooltip placement="topLeft" title={text}>
                                {text}
                            </Tooltip>
                        }
                    />
                    <Column title='Fee (USD)' dataIndex='fee' key="fee" width='10%' className="text-right"
                        sorter={(a: any, b: any) => a.fee - b.fee}
                        render={text =>
                            <Tooltip placement="topLeft" title={text}>
                                {text}
                            </Tooltip>
                        }
                    />
                    <Column
                        title="Action"
                        key="action"
                        className="text-center"
                        render={(text, record: ICourse) =>
                            <>
                                <Button htmlType="button" style={{ background: 'orange', color: 'white', marginRight: '2px' }} onClick={() => onEdit(record)}>Edit</Button>
                                <Popconfirm placement="top" title={"Are you sure to delete this course?"} onConfirm={() => onDelete(record.courseID!)} okText="Yes" cancelText="No">
                                    <Button htmlType="button" style={{ background: 'red', color: 'white' }} >Delete</Button>
                                </Popconfirm>
                            </>
                        }
                    />
                </Table>
            </>)}
        </div>
    )
}

export default ListCourseRoleAdminComponent