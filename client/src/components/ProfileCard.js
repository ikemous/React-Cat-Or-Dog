import React from "react";
import { Card } from "react-bootstrap";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard()
{
    return (
        <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <LikeOrDislikeForm />
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;