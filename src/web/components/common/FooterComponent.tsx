const FooterComponent: React.FC = () => {
    return (
        // <footer>
        //     <p className="text-muted">Typescript Demo</p>
        // </footer>
        <footer className="page-footer font-small mdb-color lighten-3 pt-2 fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-12 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/the-complete-nodejs-developer-course-2/">
                                <div className="mask rgba-white-light">Node JS</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/react-the-complete-guide-incl-redux/">
                                <div className="mask rgba-white-light">React</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/">
                                <div className="mask rgba-white-light">Bootstrap 4</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/postgresqlmasterclass/">
                                <div className="mask rgba-white-light">PostgreSQL</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/ios-13-app-development-bootcamp/">
                                <div className="mask rgba-white-light">IOS</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-1">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" className="img-fluid"
                            alt=""/>
                            <a href="https://fpt-software.udemy.com/course/understanding-typescript/">
                                <div className="mask rgba-white-light">Typescript</div>
                            </a>
                        </div>
                    </div>
                </div>
    </div>
            <div className="footer-copyright text-center py-3">© 
                <a href="https://fpt-software.udemy.com/course/full-stack-application-with-spring-boot-and-react/learn">Learn React on Udemy</a>
            </div>
        </footer>
    );
}

export default FooterComponent