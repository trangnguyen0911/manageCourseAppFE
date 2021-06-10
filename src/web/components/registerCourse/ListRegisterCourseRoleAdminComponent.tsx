import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Column from 'antd/lib/table/Column';
import { Input, Typography, Row, Col, Tooltip, Space, Spin, message,  Button, Table } from 'antd';
import {
  getPendingSelector,
  getRegisterCoursesSelector,
  getErrorSelector,
} from '../../../core/registerCourse/selector'
import * as constant from '../../utils/Constant';
import { fetchRegisterCourseRequest, fetchSearchRegisterCourseRequest } from '../../../core/registerCourse/actions'
import { IRegisterCourse } from '../../../core/registerCourse/types'

const { Search } = Input;
const { Title } = Typography;

/** 
 * Get list of all registered courses
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
const ListRegisterCourseRoleAdminComponent: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const registerCourses = useSelector(getRegisterCoursesSelector);
  const error = useSelector(getErrorSelector);
  const history = useHistory();

  /**
   * fetch list of registered courses
   */
  useEffect(() => {
    dispatch(fetchRegisterCourseRequest());
  }, []);

  /**
   * handle search 
   * @param value 
   */
  const onSearch = (value: any) => {
    dispatch(fetchSearchRegisterCourseRequest(value));
  }

  /**
   * handle when click Detail button
   * @param record 
   */
  const onView = (record: IRegisterCourse) => {
    history.push({ pathname: `/admin/registeredCourses/view`, state: { registeredCourse: record } })
  }

  /**
   * fetch list again when click button refresh
   */
  const onRefresh = () => {
    dispatch(fetchRegisterCourseRequest());
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
        <Title style={{ textAlign: 'center' }} level={2}>ALL REGISTERED COURSES</Title>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col span={24}>
            <Button type="default" style={{ background: '#4682b4', color: 'white' }} onClick={() => onRefresh()}>Refresh</Button>
            <Search placeholder="content search" onSearch={onSearch} enterButton style={{ float: 'right', width: 'auto' }} />
          </Col>
        </Row>

        <Table
          dataSource={registerCourses}
          pagination={{ pageSizeOptions: ["5", "10", "20"], showSizeChanger: true, showQuickJumper: true, defaultPageSize: 5, total: registerCourses.length,
                        showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total} items`}}
          scroll={{ y: 320 }} >
          <Column title='User name' dataIndex='username' key="username" 
            render={text =>
              <Tooltip placement="topLeft" title={text}>
                {text}
              </Tooltip>
            }
          />
          <Column title='User email' dataIndex='email' key="email"
            render={text =>
              <Tooltip placement="topLeft" title={text}>
                {text}
              </Tooltip>
            }
          />
          <Column title='Course Name' dataIndex='courseName' key="courseName"
            sorter={(a: any, b: any) => a.courseName.toLowerCase() > b.courseName.toLowerCase() ? 1 : -1}
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
          <Column title='Register Date' dataIndex='registerDate' key="registerDate" width='17%' className="text-center"
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
      </>)}
    </div>
  )
}

export default ListRegisterCourseRoleAdminComponent