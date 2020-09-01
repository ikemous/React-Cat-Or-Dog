import React from "react";
import TotallyCoolAuthentication from "../components/TotallyCoolAuthentication.js"
import { Container, Row } from "react-bootstrap";

function SignupPage() {
    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
                <TotallyCoolAuthentication signup={true} />
            </Row>
        </Container>
    )
}

export default SignupPage;