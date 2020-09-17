import React from "react";
import TotallyDecentFooter from "../components/Footer.js"
import layingDawg from "../components/images/picture1.jpg";
import toungeDawg from "../components/images/picture7.jpg";
import yellowDawg from "../components/images/picture4.jpg";
import smallDawg from "../components/images/picture5.jpg";
import catsCATS from "../components/images/picture6.jpg";
import { Container, Carousel, Row, Alert } from "react-bootstrap";

function WelcomePage()
{

    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "80vh"}} className="align-items-center justify-content-center">
                <div>
                    <Alert style={{margin: "20px", textAlign: "center"}} variant="danger">
                        <Alert.Heading>This Is For Fun!</Alert.Heading>
                        <p>
                            This Site Is Pure For Fun! The Animals/Names/Infos are fictional.
                        </p>
                    </Alert>
                    <Carousel className="slideShow" style={{height: "45vh", margin: "20px"}}>
                        <Carousel.Item>
                            <img
                                style={{height: "45vh"}}
                                className="d-block w-100 slideImage"
                                src={layingDawg}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{height: "45vh"}}
                                className="d-block w-100 slideImage"
                                src={toungeDawg}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{height: "45vh"}}
                                className="d-block w-100 slideImage"
                                src={yellowDawg}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{height: "45vh"}}
                                className="d-block w-100 slideImage"
                                src={catsCATS}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{height: "45vh"}}
                                className="d-block w-100 slideImage"
                                src={smallDawg}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="text-center">Find your newest furry friend!</h2>
                </div>    
            </Row>
            <TotallyDecentFooter />
        </Container>
        )
    ;
}

export default WelcomePage;