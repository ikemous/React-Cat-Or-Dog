import React from "react";
import UserAuthentication from "../components/UserAuthentication.js"
import { Container, Row } from "react-bootstrap";

function LoginPage() {
    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
                <UserAuthentication />
            </Row>
        </Container>
    )
}

export default LoginPage;