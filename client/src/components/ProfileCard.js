import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./profileCard.css";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard({ animal, handleClick })
{
    return (
        <Card className="profileCard">
            <Card.Img className="profileImage" variant="top" src={animal.imageUrl || "https://via.placeholder.com/450?text=Profile+Image"} />
            <Card.ImgOverlay className="imageOverlay">
                <Card.Title className="city">{animal.city?`${animal.city}, ${animal.country}`:"Loading"}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="profileBody">
                <Card.Title>
                    {animal.title?`${animal.title}. ${animal.first} ${animal.last}` : "Loading Name"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{animal.gender|| "Unknown"} - {animal.age || "Unknown"}</Card.Subtitle>
                <Card.Text>
                    {animal.bio || "Loading Bio"}
                </Card.Text>
                <Button className="leftButton" name="left" onClick={handleClick}>Left</Button>
                <Button className="rightButton" name="right" onClick={handleClick}>Right</Button>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;