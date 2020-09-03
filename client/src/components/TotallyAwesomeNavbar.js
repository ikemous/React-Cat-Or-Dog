import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function TotallyAwesomeNavbar({ loggedIn })
{
    
    let location = useLocation();
    const [path, setPath] = useState("/");

    const handleLogout = () => {
        API.logoutUser()
        .then(() => {
            console.log("%c User Logged Out", "color: orange;");
            window.location = "/";
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        console.log(location);
        setPath(location.pathname);
        console.log(path);
    }, [location])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Aninder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        {loggedIn?
                            <>
                                <Nav.Link href="/swipe" className={path==="/swipe"?"active":""}>Search</Nav.Link>
                                <Nav.Link href="/profile/settings" >Settings</Nav.Link>
                                <Nav.Link href="/profile/friends">Friends</Nav.Link>
                                <Nav.Link as={Button} variant="danger" onClick={handleLogout}>Logout</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/login" className={path==="/login"?"active":""}>Login</Nav.Link>
                                <Nav.Link href="/signup" className={path==="/signup"?"active":""}>Signup</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TotallyAwesomeNavbar;