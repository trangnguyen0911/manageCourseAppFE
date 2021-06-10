import { useEffect} from 'react'
import { useLocation, useHistory} from 'react-router-dom';
import { Form, Input, Button, InputNumber, Popconfirm, Typography} from 'antd'
import { ICourse } from '../../../core/course/types'
import * as constant from '../../utils/Constant'; 
import { useDispatch} from "react-redux";
import { editCourseRequest } from '../../../core/course/actions'

const { Title } = Typography;

/** 
 * Edit course form
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
const EditCourseComponent: React.FC<ICourse> = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [form] = Form.useForm();
    const temp: any = location.state;
    let courseNameRef: any = null;
    let instructorEmailRef: any = null;
    let descriptionRef: any = null;
    let durationRef: any = null;
    let feeRef: any = null;

    /**
     * focus on first input
     */
    useEffect(() => {
        courseNameRef.focus()
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

    /**
     * handle edit course when valid input
     * @param values 
     */
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

    /**
     * handle invalid input when submit
     * @param errorInfo 
     */
     const onFinishFailed = (errorInfo: any) => {
        const firstErrorField: any = errorInfo.errorFields[0].name[0] 
        
        if(firstErrorField ===  "courseName"){
            courseNameRef.focus()
        } else if (firstErrorField === "instructorEmail") {
            instructorEmailRef.focus()
        } else if (firstErrorField === "description") {
            descriptionRef.focus()
        } else if (firstErrorField === "duration") {
            durationRef.focus()
        } else {
            feeRef.focus()
        }
    };

    return (
        <Form className="form-style"
            {...formItemLayout}
            form={form}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={constant.validateMessages}
        >
            <Title style={{ textAlign: 'center' }} level={3}>EDIT COURSE</Title>
            <Form.Item style={{ marginTop: '20px' }} className="form-required"
                labelAlign='left'
                label="Course Name"
                name="courseName"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Course Name", 50) }]}
            >
                <Input ref={input => { courseNameRef = input }}/>
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Instructor Email"
                name="instructorEmail"
                rules={[{ required: true}, { type: 'email'}]}
            >
                <Input ref={input => { instructorEmailRef = input }} />
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Duration (minutes)"
                name="duration"
                rules={[{ required: true}, { type: 'number', min: 1, max: 300 }]}
            >
                <InputNumber style={{ width: '20%' }} ref={input => {durationRef = input }} />
            </Form.Item>

            <Form.Item className="form-required"
                labelAlign='left'
                label="Fee"
                name="fee"
                rules={[{ required: true}, { type: 'number', min: 0, max: 5000}]}
            >
                <InputNumber style={{ width: '20%' }} ref={input => {feeRef = input }}
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
                <Input.TextArea showCount maxLength={200} ref={input => {descriptionRef = input }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} style={{marginTop: '20px'}}>
                <Popconfirm placement="top" title={constant.backMessage} onConfirm={ () =>  history.push("/admin/courses/all")} okText="Yes" cancelText="No">
                    <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight:'2px' }} >Back</Button>
                </Popconfirm>
                <Button type="primary" htmlType="submit">Edit Course</Button>
                <Button htmlType="reset" className="btn-reset">Clear</Button>
            </Form.Item>
        </Form>
    )
}

export default EditCourseComponent