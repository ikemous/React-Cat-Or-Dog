import React, { useState } from "react";
import TotallyCoolAuthentication from "../components/TotallyCoolAuthentication.js"
import { Container, Row } from "react-bootstrap";

function LoginPage() {
    const [errors, setErrors] = useState({});
    const [userInfo, setUserInfo] = useState({});

    const handleChange = ({ target }) => {
        setUserInfo(...userInfo, [target.name])
    };

    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
                <TotallyCoolAuthentication signup={false} />
            </Row>
        </Container>
    )
}

export default LoginPage;