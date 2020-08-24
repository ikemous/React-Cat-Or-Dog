import React from "react";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";

function SwipingPage()
{
    return (
        <>
            <Container>
                <Row>
                    <ProfileCard />
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;