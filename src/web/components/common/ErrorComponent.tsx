import { Typography } from 'antd';

const { Title } = Typography;

/** 
 * Error page when access wrong url
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
const ErrorComponent: React.FC = () => {
    return (
        <Title level={4}>An Error Occurred. Please contact the manager to be supported.</Title>
    );
}

export default ErrorComponent