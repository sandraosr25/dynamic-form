import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form {" "}
                            <span className="pt-2 pb-4">where you will do everything you want</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5 text-center">
                            Hi, I'm Iván Devia, I'm 38 years old and I like to make programs, develop with JS and JAVA. I like to play BaseBall and play drums.
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={() => console.log("click button1")}
                                >Get in touch</Button>
                                <Button className="p-3">Get in touch</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}