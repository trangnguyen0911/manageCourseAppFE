import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import moment from 'moment'
import { Form, Input, Button, DatePicker, Radio, Popconfirm, Typography } from 'antd'
import { getUserSelector } from '../../../core/user/selector'
import { getUserByUserNameRequest, editUserRequest } from '../../../core/user/actions'
import AuthenticationService from '../authen/AuthenticationService.js'
import { IUser } from '../../../core/user/types'
import * as constant from '../../utils/Constant'

const { Title } = Typography;
const username = AuthenticationService.getLoggedInUserName()

/**
 * EditUserInfoComponent
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
const EditUserInfoComponent: React.FC<IUser> = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserSelector);
    const history = useHistory();
    const [form] = Form.useForm();
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

    const config = {
        rules: [{ type: 'object' as const, required: true}],
    };

    /**
     * focus on first input
     * check whether course exist or not
     */
    useEffect(() => {
        fullnameRef.focus()
        dispatch(getUserByUserNameRequest(username));
        form.setFieldsValue({
            id: user.studentID,
            username: user.username,
            fullname: user.fullname,
            birthdate: moment(user.birthdate),
            status: 1,
            gender: user.gender,
            email: user.email,
        })
    }, []);

    /**
     * handle edit user
     * @param values 
     */
    const onFinish = (values: any) => {
        const newUser: IUser = {
            username: username,
            fullname: values.fullname.trim(),
            birthdate: values.birthdate,
            status: 1,
            gender: values.gender,
            email: values.email,
            password: "abc",
        }
        dispatch(editUserRequest(newUser));
    }

    /**
     * handle invalid input when submit
     * @param errorInfo 
     */
     const onFinishFailed = (errorInfo: any) => {
        const firstErrorField: any = errorInfo.errorFields[0].name[0] 
        
        if (firstErrorField === "fullname") {
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
        <Form className="form-style"
            {...formItemLayout}
            labelAlign="left"
            form={form}
            name="basic"
            validateMessages={constant.validateMessages}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Title style={{ textAlign: 'center' }} level={3}>EDIT PROFILE</Title>
            <Form.Item style={{ marginTop: '20px' }} className="form-required"
                labelAlign='left'
                label="User name"
                name="username"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,19}\s*$/), message: constant.validateMaxLength("User Name", 20) }]}
            >
                <Input disabled/>
            </Form.Item>

            <Form.Item className="form-required"
                label="Full name"
                name="fullname"
                rules={[{ required: true},
                { pattern: new RegExp(/^\s*\S.{0,49}\s*$/), message: constant.validateMaxLength("Full Name", 50) }]}
            >
                <Input ref={input => { fullnameRef = input }}/>
            </Form.Item>

            <Form.Item className="form-required"
                label="Email"
                name="email"
                rules={[{ required: true }, { type: 'email'}, { max: 50, message: constant.validateMaxLength("Email", 50)}]}
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

            <Form.Item {...tailFormItemLayout} style={{marginTop: '20px'}}>
                <Popconfirm placement="top" title={constant.backMessage} onConfirm={ () =>  history.push("/users/profile")} okText="Yes" cancelText="No">
                    <Button htmlType="button" style={{ background: '#116466', color: 'white', marginRight:'2px' }} >Back</Button>
                </Popconfirm>
                <Button type="primary" htmlType="submit">Edit</Button>
                <Button htmlType="button" onClick ={() => window.location.reload()} className="btn-reset">Reset</Button>
            </Form.Item>
        </Form>
    )
}

export default EditUserInfoComponent