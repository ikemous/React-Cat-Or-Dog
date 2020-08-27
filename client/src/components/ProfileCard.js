import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard({ animal, information, setUserAction })
{
    useEffect(() => console.log(animal), [animal]);
    return (
        <Card>
            <Card.Img variant="top" src={animal.imageUrl || "https://via.placeholder.com/450?text=Profile+Image"} />
            <Card.ImgOverlay>
                <Card.Title style={{color:"white"}}>{animal.city?`${animal.city}, ${animal.country}`:"Loading"}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>
                    {animal.title?`${animal.title}. ${animal.first} ${animal.last}` : "Loading Name"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{animal.gender|| "Unknown"} - {animal.age || "Unknown"}</Card.Subtitle>
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