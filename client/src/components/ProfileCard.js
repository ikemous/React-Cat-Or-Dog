import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard()
{
    return (
        <CardGroup style={{display:"block"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={logo} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card>
                <Card.Body></Card.Body>
            </Card>
        </CardGroup>
    )
}

export default ProfileCard;