import { Form, Input, Button, DatePicker} from 'antd'
import { Typography,  Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addUserRequest } from '../../../core/user/actions'
import { getErrorSelector } from '../../../core/course/selector'
import { IUser } from '../../../core/user/types'
import * as constant from '../../utils/Constant';
import moment from 'moment'

const { Title } = Typography;

/**
 * Add information form, handle add usertodo api
 */
const SignUpComponent: React.FC<IUser> = (props) => {
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

    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please input time!' }],
    };

    const onFinish = (values: any) => {
        const user: IUser = {
            username: values.username.trim(),
            fullname: values.fullname.trim(),
            birthdate: values['birthdate'].format('YYYY-MM-DD'),
            status: 1,
            gender: +values.gender,
            email: values.email.trim(),
            password: values.password.trim(),
        }
        dispatch(addUserRequest(user));
    }

    return (
        error ?
            <>
                message.error(constant.ERR_SYSTEM, 5)
            </> :
        (<Form className="form-style"
            {...formItemLayout}
            form={form}
            labelAlign='left'
            name="basic"
            onFinish={onFinish}
            validateMessages={constant.validateMessages}
        >
            <Title style={{ textAlign: 'center' }} level={3}>SIGN UP INFORMATION</Title>
            <Form.Item style={{ marginTop: '20px' }} className="form-required"
                label="User Name"
                name="username"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,19}\s*$/), message: constant.validateMaxLength("User Name", 20)}]}
            >
                <Input />
            </Form.Item>

            <Form.Item className="form-required"
                label="Full Name"
                name="fullname"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Full Name", 50) }]}
            >
                <Input />
            </Form.Item>

            <Form.Item className="form-required"
                label="Email"
                name="email"
                rules={[{ required: true},
                { type: 'email'},
                { max: 50, message: '${label}' +  constant.MAX_LENGTH + 50}]}
            >
                <Input />
            </Form.Item>

            <Form.Item 
                name="birthdate" 
                label="Birthdate" {...config}>
                <DatePicker defaultPickerValue={moment().year(moment().year() - 18)}
                            disabledDate={(current) =>
                                current &&
                                current > moment().year(moment().year() - 18)}/>
            </Form.Item>

            <Form.Item  className="form-required"
                name="gender" 
                label="Gender"
                rules={[{ required: true}]}>
                <Radio.Group>
                    <Radio.Button value={0}>Male</Radio.Button>
                    <Radio.Button value={1}>Female</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item className="form-required"
                label="Password"
                name="password"
                rules={[{ required: true},
                        { pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), message: constant.PASSWORD},
                        { max: 20, message: constant.PASSWORD_MAX}]}
            >
            <Input.Password style={{width: '300px'}}/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: constant.PASSWORD_CONFIRM,
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error(constant.PASSWORD_CONFIRM_MATCH));
                    },
                }),
                ]}
            >
                <Input.Password style={{width: '300px'}}/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout} style={{marginTop: '20px'}}>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button htmlType="reset" className="btn-reset">Clear</Button>
            </Form.Item>
        </Form>)
    )
}

export default SignUpComponent
