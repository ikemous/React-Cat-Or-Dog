import React, { useState } from "react";
import API from "../utils/API.js";
import TotallyCoolAuthentication from "../components/TotallyCoolAuthentication.js"
import { Container, Row } from "react-bootstrap";

function LoginPage({ setUser }) {
    
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [userInfo, setUserInfo] = useState({});

    const handleChange = ({ target }) => {
        setUserInfo({...userInfo, [target.name]: target.value});
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        API.loginUser(userInfo)
        .then(({data}) => setUser(data))
        .catch(({response}) => {
            if(response.data.errors)
            {
                if(response.data.errors.email) setEmailError(response.data.errors.email);
                else setEmailError(false);
                if(response.data.errors.password) setPasswordError(response.data.errors.password);
                else setPasswordError(false);
            }
            else
            {
                setEmailError(true);
                setPasswordError(true);
            }
        });
    };

    return (
        <Container style={{height: "calc(100vh - 56px)"}}>
            <Row style={{height: "inherit"}} className="align-items-center justify-content-center">
                <TotallyCoolAuthentication 
                    signup={false} 
                    handleChange={handleChange} 
                    passwordError={passwordError} 
                    emailError={emailError} 
                    handleSubmit={handleSubmit} 
                />
            </Row>
        </Container>
    )
}

export default LoginPage;