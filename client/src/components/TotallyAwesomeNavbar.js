import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { useLocation, Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function TotallyAwesomeNavbar({ loggedIn, history })
{
    
    let location = useLocation();
    const [path, setPath] = useState("/");

    const handleLogout = () => {
        API.logoutUser()
        .then(() => {
            console.log("%c User Logged Out", "color: red;");
            window.location = "/";
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        setPath(location.pathname);
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
                                <Nav.Link as={Link} to="/swipe" href="#/swipe" className={path==="/swipe"?"active":""}>Search</Nav.Link>
                                <Nav.Link as={Link} to="/profile/settings" href="#/profile/settings" className={path==="/profile/settings"?"active":""}>Settings</Nav.Link>
                                <Nav.Link as={Link} to="/profile/friends" href="#/profile/friends" className={path==="/profile/friends"?"active":""}>Friends</Nav.Link>
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

export default withRouter(TotallyAwesomeNavbar);