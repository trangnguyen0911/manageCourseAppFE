import { Form, Input, Button, InputNumber, Typography} from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { addCourseRequest } from '../../../core/course/actions'
import { getErrorSelector } from '../../../core/course/selector'
import { ICourse } from '../../../core/course/types'
import * as constant from '../../utils/Constant';

const { Title } = Typography;
interface Props {
    course: ICourse;
}
/**
 * Add information form, handle add usertodo api
 */
const AddCourseComponent: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const error = useSelector(getErrorSelector);
    const [form] = Form.useForm();

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
            courseName: values.courseName.trim(),
            description: values.description.trim(),
            duration: values.duration,
            fee: values.fee,
            instructorEmail: values.instructorEmail.trim(),
            status: 1
        }
        dispatch(addCourseRequest(course));
    }

    return (
        error ?
            <>
                message.error(constant.ERR_SYSTEM, 5)
            </> :
            (<Form className="form-style"
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
                    rules={[{ required: true },
                    { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Course Name", 50) }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className="form-required"
                    labelAlign='left'
                    label="Instructor Email"
                    name="instructorEmail"
                    rules={[{ required: true }, { type: 'email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className="form-required"
                    labelAlign='left'
                    label="Duration (minutes)"
                    name="duration"
                    rules={[{ required: true }, { type: 'number', min: 1, max: 300 }]}
                >
                    <InputNumber style={{ width: '20%' }} />
                </Form.Item>

                <Form.Item className="form-required"
                    labelAlign='left'
                    label="Fee"
                    name="fee"
                    rules={[{ required: true }, { type: 'number', min: 0, max: 5000 }]}
                >
                    <InputNumber style={{ width: '20%' }}
                        formatter={(value: any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')} />
                </Form.Item>

                <Form.Item className="form-required"
                    labelAlign='left'
                    label="Description"
                    name="description"
                    rules={[{ required: true },
                    { pattern: new RegExp(/^\s*\S.{0,199}\s*$/), message: constant.validateMaxLength('Description', 200) }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item {...tailFormItemLayout} style={{ marginTop: '20px' }}>
                    <Button type="primary" htmlType="submit">Add Course</Button>
                    <Button htmlType="reset" className="btn-reset">Clear</Button>
                </Form.Item>
            </Form>)
    )
}

export default AddCourseComponent
