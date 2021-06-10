import { useState, useEffect} from 'react'
import { useDispatch} from "react-redux";
import { Link, RouteComponentProps } from 'react-router-dom'
import { LoginRequest } from '../../../core/sercurity/actions'
import { Form, Input, Button, Typography} from 'antd';
import * as constant from '../../utils/Constant.js'

const { Title } = Typography;

interface userprops extends RouteComponentProps {}

const initUser = { name: "", password: ""};

/** 
 * LoginComponent
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
const LoginComponent: React.FC<userprops> = (props) => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState(initUser);
    let usernameRef: any = "";
    let passwordRef: any = "";

    const tailLayout = {
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

    /**
     * focus on first input
     */
    useEffect(() => 
        usernameRef.focus(),
    [])
      
    /**
     * handle loggin request 
     * @param values 
     */
    const onFinish = (values: any) => {
        dispatch(LoginRequest(values.username, values.password));
    };

    /**
     * handle onchange event
     * @param e 
     */
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    /**
     * handle invalid input when submit
     * @param errorInfo 
     */
     const onFinishFailed = (errorInfo: any) => {
        const firstErrorField: any = errorInfo.errorFields[0].name[0] 
        
        if(firstErrorField ===  "username"){
            usernameRef.focus()
        } else {
            passwordRef.focus()
        }
    };

    return (
        <Form className="form-log-in"
            {...formItemLayout}
            labelAlign='left'
            name="basic"
            initialValues={{ remember: true }}
            validateMessages={constant.validateMessages}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Title style={{textAlign: 'center'}} level={3}>LOG IN</Title>
            <Form.Item style={{marginTop: '20px'}}
                label="Username"
                name="username"
                rules={[{ required: true},
                        { pattern: new RegExp(/^\s*\S.{0,19}\s*$/), message: constant.validateMaxLength("User Name", 20)}]}
            >
            <Input ref={input => { usernameRef = input }}
                value={formValue.name}
                onChange={onInputChange}
            />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true},
                    { max: 20, message: constant.PASSWORD_MAX}]}
            >
            <Input.Password value={formValue.password} onChange={onInputChange} ref={input => { passwordRef = input }}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Link to="/signup" style={{ color: '#116466', marginBottom: '20px', textDecoration: 'underline' }} className="sign-up-link">Click here to sign up</Link>
            </Form.Item>
            
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Log in
                </Button>
                <Button htmlType="reset" className="btn-reset">Clear</Button>
            </Form.Item>
        </Form>
    );
}

export default LoginComponent