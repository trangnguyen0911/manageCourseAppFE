import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Tooltip, Spin, Space, message } from 'antd';
import { Input, Typography, Row, Col } from 'antd';
import Column from 'antd/lib/table/Column';
import * as constant from '../../utils/Constant';
import AuthenticationService from '../authen/AuthenticationService.js'
import {
  getPendingSelector,
  getCoursesSelector,
  getErrorSelector,
  getConfirmSelector
} from '../../../core/course/selector'
import { fetchCourseRequest, fetchSearchCourseRequest, confirmExistCourseRequest, registerCourseRequest } from '../../../core/course/actions'
import { ICourse } from '../../../core/course/types'

const { Search } = Input;
const { Title } = Typography;

/** 
 * Get list of all courses
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
const ListCourseComponent: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const courses = useSelector(getCoursesSelector);
  const error = useSelector(getErrorSelector);
  const confirm = useSelector(getConfirmSelector);
  const history = useHistory();

  /**
   * fetch list of course
   */
  useEffect(() => {
    dispatch(fetchCourseRequest());
  }, []);

  /**
   * handle search
   * @param value 
   */
  const onSearch = (value: any) => {
    dispatch(fetchSearchCourseRequest(value));
  }

  /**
   * handle register course
   * @param courseID 
   */
  const onRegister = (courseID: Number) => {
    const username = AuthenticationService.getLoggedInUserName()
    dispatch(registerCourseRequest(username, courseID));
  }


  /**
   * handle view detail course
   * @param course 
   */
  const onView = (course: ICourse) => {
    dispatch(confirmExistCourseRequest(course));
    if (confirm === "NoErr"){
      history.push({ pathname: "/courses/view", state: { course: course } })
    }
  }

  /**
   * handle when click button refresh
   */
  const onRefresh = () => {
    dispatch(fetchCourseRequest());
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
            <Button type="default" style={{ background: '#4682b4', color: 'white' }} onClick={() => onRefresh()}>Refresh</Button>
            <Search placeholder="content search" onSearch={onSearch} enterButton style={{ float: 'right', width: 'auto' }} />
          </Col>
        </Row>

        <Table
          dataSource={courses}
          pagination={{ pageSizeOptions: ["5", "10", "20"], showSizeChanger: true, showQuickJumper: true, defaultPageSize: 5, total: courses.length,
                        showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total} items` }}
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
          <Column title='Duration (minutes)' dataIndex='duration' key="duration" width='12%' className="text-right"
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
          <Column width='23%'
            title="Action"
            key="action"
            className="text-center"
            render={(text, record: ICourse) =>
              <>
                <Button htmlType="button" style={{ background: 'green', color: 'white', marginRight: '2px' }} onClick={() => onRegister(record.courseID!)}>Register</Button>
                <Button htmlType="button" style={{ background: 'orange', color: 'white' }} onClick={() => onView(record)}>Detail</Button>
              </>
            }
          />
        </Table>
      </>)}
    </div>
  )
}

export default ListCourseComponent