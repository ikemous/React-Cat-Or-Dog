import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

function TotallyAwesomeNavbar()
{
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "10px"}}>
                <Navbar.Brand href="/">Aninder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Login</Nav.Link>
                        <Nav.Link href="#pricing">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TotallyAwesomeNavbar;