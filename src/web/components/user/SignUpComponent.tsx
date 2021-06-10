import { Form, Input, Button, DatePicker} from 'antd'
import { Typography,  Radio } from 'antd';
import { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addUserRequest } from '../../../core/user/actions'
import { getErrorSelector } from '../../../core/course/selector'
import { IUser } from '../../../core/user/types'
import * as constant from '../../utils/Constant';
import moment from 'moment'

const { Title } = Typography;

/**
 * SignUpComponent
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
const SignUpComponent: React.FC<IUser> = (props) => {
    const dispatch = useDispatch();
    const error = useSelector(getErrorSelector);
    const [form] = Form.useForm();
    let usernameRef: any = null;
    let fullnameRef: any = null;
    let emailRef: any = null;
    let confirmRef: any = null;
    let passwordRef: any = null;
    let genderRef: any = null;
    let birthdateRef: any = null;

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
     * focus on first input
     */
    useEffect(() => 
        usernameRef.focus(),
    [])

    const config = {
        rules: [{ type: 'object' as const, required: true }],
    };

    /**
     * handle sign up after valid input
     * @param values 
     */
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
   
    /**
     * handle invalid input when submit
     * @param errorInfo 
     */
     const onFinishFailed = (errorInfo: any) => {
        const firstErrorField: any = errorInfo.errorFields[0].name[0] 
        
        if(firstErrorField ===  "username"){
            usernameRef.focus()
        } else if (firstErrorField === "fullname") {
            fullnameRef.focus()
        } else if (firstErrorField === "email") {
            emailRef.focus()
        } else if (firstErrorField === "password") {
            passwordRef.focus()
        } else if (firstErrorField === "confirm") {
            confirmRef.focus()
        } else if (firstErrorField === "birthdate") {
            birthdateRef.focus()
        } else {
            genderRef.focus()
        }
    };
    
    return (
        error ?
            <>
                message.error(constant.ERR_SYSTEM, 5)
            </> :
        (<Form className= "form-style"
            {...formItemLayout}
            form={form}
            labelAlign='left'
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={constant.validateMessages}
        >
            <Title style={{ textAlign: 'center' }} level={3}>SIGN UP INFORMATION</Title>
            <Form.Item style={{ marginTop: '20px' }} className="form-required"
                label="User Name"
                name="username"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,19}\s*$/), message: constant.validateMaxLength("User Name", 20)}]}
            >
                <Input ref={input => { usernameRef = input }}/>
            </Form.Item>

            <Form.Item className="form-required"
                label="Full Name"
                name="fullname"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Full Name", 50) }]}
            >
                <Input ref={input => { fullnameRef = input }} />
            </Form.Item>

            <Form.Item className="form-required"
                label="Email"
                name="email"
                rules={[{ required: true},
                { type: 'email'},
                { max: 50, message: constant.validateMaxLength("Email", 50)}]}
            >
                <Input ref={input => { emailRef = input }} />
            </Form.Item>

            <Form.Item 
                name="birthdate" 
                label="Birthdate" {...config}>
                <DatePicker ref = {input => { birthdateRef = input }} defaultPickerValue={moment().year(moment().year() - 18)}
                            disabledDate={(current) =>
                                current &&
                                current > moment().year(moment().year() - 18)}/>
            </Form.Item>

            <Form.Item  className="form-required"
                name="gender" 
                label="Gender"
                rules={[{ required: true}]}>
                <Radio.Group ref={input => { genderRef = input }}>
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
                <Input.Password ref={input => { passwordRef = input }} />
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
                <Input.Password ref={input => { confirmRef = input }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} style={{marginTop: '20px'}}>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button htmlType="reset" className="btn-reset">Clear</Button>
            </Form.Item>
        </Form>)
    )
}

export default SignUpComponent
