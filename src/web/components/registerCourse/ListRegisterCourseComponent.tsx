import { useHistory } from 'react-router-dom';
import { Button, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Column from 'antd/lib/table/Column';
import { Input, Typography, Row, Col, Tooltip, Space, Spin, message } from 'antd';
import {
  getPendingSelector,
  getRegisterCoursesSelector,
  getErrorSelector,
} from '../../../core/registerCourse/selector'
import * as constant from '../../utils/Constant';
import { fetchRegisterCourseByUserNameRequest, fetchSearchRegisterCourseByUserNameRequest } from '../../../core/registerCourse/actions'
import { IRegisterCourse } from '../../../core/registerCourse/types'
import AuthenticationService from '../authen/AuthenticationService.js'

const { Search } = Input;
const { Title } = Typography;

const username = AuthenticationService.getLoggedInUserName()
const ListRegisterCourseComponent: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const registerCourses = useSelector(getRegisterCoursesSelector);
  const error = useSelector(getErrorSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchRegisterCourseByUserNameRequest(username));
  }, []);
  
  const onSearch = (value: any) => {
    dispatch(fetchSearchRegisterCourseByUserNameRequest(value, username));
  }

  const onView = (record: IRegisterCourse) => {
    history.push({ pathname: `/registeredCourses/view`, state: { registeredCourse: record } })
  }


  return (
    <div>
      <Title style={{ textAlign: 'center' }} level={2}>ALL REGISTERED COURSES</Title>
      <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Col span={24}>
          <Button type="default" style={{ background: '#4682b4', color: 'white' }} onClick={() => window.location.reload()}>Refresh</Button>
          <Search placeholder="content search" onSearch={onSearch} enterButton style={{ float: 'right', width: 'auto' }} />
        </Col>
      </Row>

      <Table
        dataSource={registerCourses}
        pagination={{ pageSizeOptions: ["5", "10", "20"], showSizeChanger: true, showQuickJumper: true, defaultPageSize: 5, total: registerCourses.length, showTotal: total => `Total ${total} items` }}
        scroll={{ y: 320 }} showSorterTooltip >
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
        <Column title='Register Date' dataIndex='registerDate' key="registerDate" width='20%' className="text-center"
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
          render={(text, record: IRegisterCourse) =>
            <>
              <Button htmlType="button" style={{ background: '#116466', color: 'white' }} onClick={() => onView(record)}>Detail</Button>
            </>
          }
        />
      </Table>
    </div>
  )
}

export default ListRegisterCourseComponent