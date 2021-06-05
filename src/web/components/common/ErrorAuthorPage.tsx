import { Typography } from 'antd';

const { Title } = Typography;
const ErrorAuthorComponent: React.FC = () => {
    return (
        <Title level={4}>You don't have permission to view this page!</Title>
    );
}

export default ErrorAuthorComponent