import { Link } from 'react-router-dom'
import { Typography, Button, Row, Col } from 'antd';

const { Title } = Typography;

/** 
 * Welcome page after login
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
const WelcomeComponent: React.FC = () =>{
    return (
        <div>
            <Title style={{textAlign: 'center'}} level={2}>WELCOME TO HAPPY WORLD!!</Title>
            <div style={{textAlign: 'center', margin: '25px'}}>
            <Button style={{background: 'green'}}><Link to="/courses/all" style={{color: 'white'}} className="log-in-out">Get view all courses!</Link></Button>
            </div>
            <Row style={{marginTop: '200px'}}>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/the-complete-nodejs-developer-course-2/" className="log-in-out">
                        <div className="mask rgba-white-light">Node JS</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/react-the-complete-guide-incl-redux/" className="log-in-out">
                        <div className="mask rgba-white-light">React</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/" className="log-in-out">
                        <div className="mask rgba-white-light">Bootstrap 4</div>
                    </a>
                </Col>
                <Col span={6}>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid"
                        alt=""/>
                    <a href="https://fpt-software.udemy.com/course/postgresqlmasterclass/" className="log-in-out">
                        <div className="mask rgba-white-light">PostgreSQL</div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default WelcomeComponent