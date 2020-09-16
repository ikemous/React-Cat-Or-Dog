import React, { useState } from "react";
import layingDawg from "../components/images/picture1.jpg";
import toungeDawg from "../components/images/picture7.jpg";
import yellowDawg from "../components/images/picture4.jpg";
import smallDawg from "../components/images/picture5.jpg";
import catsCATS from "../components/images/picture6.jpg";
import { Container, Carousel, Row } from "react-bootstrap";

function WelcomePage()
{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="slideShow" style={{height: "calc(100vh - 56px)"}} fluid>
        <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
            <div>
                <h2 className="text-center">Find your newest furry friend!</h2>
                <Carousel style={{height: "80vh", margin: "20px"}} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={{height: "-webkit-fill-available"}}
                            className="d-block w-100 slideImage"
                            src={layingDawg}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{height: "-webkit-fill-available"}}
                            className="d-block w-100 slideImage"
                            src={toungeDawg}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{height: "-webkit-fill-available"}}
                            className="d-block w-100 slideImage"
                            src={yellowDawg}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{height: "-webkit-fill-available"}}
                            className="d-block w-100 slideImage"
                            src={catsCATS}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{height: "-webkit-fill-available"}}
                            className="d-block w-100 slideImage"
                            src={smallDawg}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </Row>

        </Container>
        )
    ;
}

export default WelcomePage;