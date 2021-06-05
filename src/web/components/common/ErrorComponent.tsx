import { Typography } from 'antd';

const { Title } = Typography;
const ErrorComponent: React.FC = () => {
    return (
        <Title level={4}>An Error Occurred. Please contact the manager to be supported.</Title>
    );
}

export default ErrorComponent