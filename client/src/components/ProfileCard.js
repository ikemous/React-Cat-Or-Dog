import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import logo from "../logo.svg"
import LikeOrDislikeForm from "./LikeOrDislikeForm.js"

function ProfileCard({ animal, handleClick })
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
                    {animal.bio || "Loading Bio"}
                </Card.Text>
            </Card.Body>
            <Card.Body>
            <Row>
                <Col>
                    <Button name="left" onClick={handleClick}>Left</Button>
                </Col>
                <Col></Col>
                <Col>
                    <Button name="right" onClick={handleClick}>Right</Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;