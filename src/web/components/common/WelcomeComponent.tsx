import { Link } from 'react-router-dom'
import { Typography, Button, Row, Col } from 'antd';

const { Title } = Typography;

/**
 * Welcome page after login
 */
const WelcomeComponent: React.FC = () =>{
    return (
        <div>
            <Title style={{textAlign: 'center'}} level={2}>WELCOME TO HAPPY WORLD!!</Title>
            <div style={{textAlign: 'center', margin: '25px'}}>
            <Button style={{background: 'green'}}><Link to="/courses/all" style={{color: 'white'}}>Get started!</Link></Button>
            </div>
            <Row style={{marginTop: '200px'}}>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/the-complete-nodejs-developer-course-2/">
                        <div className="mask rgba-white-light">Node JS</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/react-the-complete-guide-incl-redux/">
                        <div className="mask rgba-white-light">React</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/">
                        <div className="mask rgba-white-light">Bootstrap 4</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/postgresqlmasterclass/">
                        <div className="mask rgba-white-light">PostgreSQL</div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default WelcomeComponent