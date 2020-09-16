import React from "react";
import dawgNotFound from "../components/images/picture3.jpg"
import { Link } from "react-router-dom";
import { Container, Row, Image } from "react-bootstrap";

function PageNotFound()
{
    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="text-center align-items-center justify-content-center">
                <div>
                    <h1>Hello There!</h1>
                    <Image style={{maxHeight: "50vh", maxWidth: "50vh" }} src={dawgNotFound} rounded />
                    <h2>This Is Not The Page You're Looking For. <Link to="/">Go Home</Link></h2>
                </div>
            </Row>
        </Container>
    )
}

export default PageNotFound;