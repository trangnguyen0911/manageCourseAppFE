import { Typography } from 'antd';

const { Title } = Typography;

/** 
 * Error page when user don't have permission
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
const ErrorAuthorComponent: React.FC = () => {
    return (
        <Title level={4}>You don't have permission to view this page!</Title>
    );
}

export default ErrorAuthorComponent