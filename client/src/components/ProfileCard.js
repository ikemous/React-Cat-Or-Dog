import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard({ animal, information, setUserAction })
{
    useEffect(() => console.log(information), [information]);
    return (
        <Card>
            <Card.Img variant="top" src={animal.url?animal.url:animal.message} />
            <Card.ImgOverlay>
                <Card.Title>{information.location? `${information.location.city}, ${information.location.country}`:"Loading"}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>
                    {information.name? `${information.name.title}. ${information.name.first} ${information.name.last}` : "Loading Name"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{information.gender} - {information.dob?information.dob.age:"Unknown"}</Card.Subtitle>
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