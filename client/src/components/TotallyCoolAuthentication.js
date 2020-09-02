import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function TotallyCoolAuthentication({ signup, passwordError, emailError, handleChange, handleSubmit }) {

    return (
        <>
            <Form className="col-sm-8">
                <h1 style={{textAlign:"center"}}>{signup?"Signup":"Login"}</h1>
                <Form.Group controlId="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control 
                        isInvalid={emailError}
                        type="email" 
                        name="email" 
                        placeholder="Enter email" 
                        onChange={handleChange} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {!signup?"": "Email invalid or already used" }
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        isInvalid={passwordError}
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {!signup?"Email or Password may be incorrect": "Password must be longer than 6 characters"}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{textAlign: "center"}} >
                    <Button onClick={handleSubmit} style={{width: "100%"}} variant="primary" type="submit">
                        {signup? "Signup":"Login"}
                    </Button>
                </Form.Group>
                <small style={{textAlign: "center"}}>
                    {signup?"Already Have An Account":"Need To Login"}? {signup?<Link to="/login">click here</Link>:<Link to="/signup">click here</Link>}
                </small>
            </Form>
        </>
    )
}

export default TotallyCoolAuthentication;