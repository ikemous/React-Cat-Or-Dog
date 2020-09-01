import React from "react";
import { Form, Button } from "react-bootstrap";

function UserAuthentication() {
    return (
        <>
            <Form className="col-sm-8">
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
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default UserAuthentication;