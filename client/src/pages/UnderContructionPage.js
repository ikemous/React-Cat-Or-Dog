import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Image } from "react-bootstrap"
import partyDawg from "../components/images/picture8.jpg";

function UnderConstruction()
{
        return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="text-center align-items-center justify-content-center">
                <h1>Page is underconstruction</h1>
                <Image style={{maxHeight: "50vh", maxWidth: "50vh" }} src={partyDawg} rounded />
                <h2>While You're waiting go <Link to="/swipe">find some</Link> friends!</h2>
            </Row>
        </Container>
    );
}

export default UnderConstruction;