import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function TotallyCoolAuthentication({ signup }) {
    return (
        <>
            <Form className="col-sm-8">
                <h1 style={{textAlign:"center"}}>{signup?"Signup":"Login"}</h1>
                <Form.Group controlId="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group style={{textAlign: "center"}} >
                    <Button style={{width: "100%"}} variant="primary" type="submit">
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