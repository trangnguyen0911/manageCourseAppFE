import { useEffect} from 'react'
import { useLocation, useHistory} from 'react-router-dom';
import { Form, Input, Button, InputNumber, Popconfirm, Typography} from 'antd'
import { ICourse } from '../../../core/course/types'
import * as constant from '../../utils/Constant'; 
import { useDispatch} from "react-redux";
import { editCourseRequest } from '../../../core/course/actions'


const { Title } = Typography;

/**
 * Add information form, handle add usertodo api
 */
const EditCourseComponent: React.FC<ICourse> = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [form] = Form.useForm();
    const temp: any = location.state;

    useEffect(() => {
        form.setFieldsValue(temp.course)
    }, [location]);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 6,
            },
        },
    };

    const onFinish = (values: any) => {
        const course: ICourse = {
            courseID: temp.course.courseID,
            courseName: values.courseName.trim(),
            description: values.description.trim(),
            duration: values.duration,
            fee: values.fee,
            instructorEmail: values.instructorEmail.trim(),
            status: 1
        }
        dispatch(editCourseRequest(course));
    }

    return (
        <Form className="form-style"
            {...formItemLayout}
            form={form}
            name="basic"
            onFinish={onFinish}
            validateMessages={constant.validateMessages}
        >
            <Title style={{ textAlign: 'center' }} level={3}>ADD NEW COURSE</Title>
            <Form.Item style={{ marginTop: '20px' }} className="form-required"
                labelAlign='left'
                label="Course Name"
                name="courseName"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Course Name", 50) }]}
            >
                <Input />
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Instructor Email"
                name="instructorEmail"
                rules={[{ required: true}, { type: 'email'}]}
            >
                <Input />
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Duration (minutes)"
                name="duration"
                rules={[{ required: true}, { type: 'number', min: 1, max: 300 }]}
            >
                <InputNumber style={{ width: '20%' }} />
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Fee"
                name="fee"
                rules={[{ required: true}, { type: 'number', min: 0, max: 5000}]}
            >
                <InputNumber style={{ width: '20%' }}
                            formatter={(value: any)=> `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}/>
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Description"
                name="description"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,199}\s*$/), message: constant.validateMaxLength('Description', 200)}]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} style={{marginTop: '20px'}}>
                <Popconfirm placement="top" title={"When you click Yes, the current data will be lost if you haven't update yet. Are you sure to back to the list?"} onConfirm={ () =>  history.push("/admin/courses/all")} okText="Yes" cancelText="No">
                    <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight:'2px' }} >Back</Button>
                </Popconfirm>
                <Button type="primary" htmlType="submit">Edit Course</Button>
                <Button htmlType="reset" className="btn-reset">Clear</Button>
            </Form.Item>
        </Form>
    )
}

export default EditCourseComponent
