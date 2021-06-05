import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button} from 'antd';
import { Typography } from 'antd';
import { message} from 'antd';
import * as constant from '../../utils/Constant.js'

const { Title } = Typography;

interface userprops extends RouteComponentProps {}

const initUser = { name: "", password: ""};
const LoginComponent: React.FC<userprops> = (props) => {
    const [formValue, setFormValue] = useState(initUser);

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
      
    const onFinish = (values: any) => {
        AuthenticationService
            .executeJwtAuthenticationService(values.username, values.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(values.username, response.data.token, response.data.role)
                props.history.push(`/welcome/${values.username}`)
            }).catch(() => {
                message.error("Invalid log in information", 2.5)
            })
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (
        <Form className="form-log-in"
            {...formItemLayout}
            labelAlign='left'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Title style={{textAlign: 'center'}} level={3}>LOG IN</Title>
            <Form.Item style={{marginTop: '20px'}}
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' },
                        { max: 50, message : "username is too long"}]}
            >
            <Input 
                value={formValue.name}
                onChange={onInputChange}
            />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' },
                    { max: 20, message: constant.PASSWORD_MAX}]}
            >
            <Input.Password value={formValue.password} onChange={onInputChange}/>
            </Form.Item>

            <Form.Item {...tailLayout} >
                <Link to="/signup" style={{ color: '#116466', marginBottom: '20px', textDecoration: 'underline' }}>Click here to sign up</Link>
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