import React, { useEffect, useState } from "react";
import TotallyCoolAuthentication from "../components/TotallyCoolAuthentication.js"
import { Container, Row } from "react-bootstrap";

function SignupPage() {
    const [errors, setErrors] = useState({});
    const [userInfo, setUserInfo] = useState({});

    const handleChange = ({ target }) => {
        setUserInfo({...userInfo, [target.name]: target.value});
    };

    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
                <TotallyCoolAuthentication signup={true} handleChange={handleChange} errors={errors} />
            </Row>
        </Container>
    )
}

export default SignupPage;