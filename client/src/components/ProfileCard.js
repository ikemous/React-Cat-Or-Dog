import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import "./profileCard.css";

function ProfileCard({ animal, handleClick, userFriend })
{
    return (
        <Card 
            style={
                    animal.gender === "male"? {background: "#6ca0dc"}
                    : animal.gender === "female"? {background: "#f8b9d4"}
                    : {background: "white"}
                  } 
            className="profileCard"
        >
            <Card.Img className="profileImage" variant="top" src={animal.imageUrl || "https://via.placeholder.com/450?text=Profile+Image"} />
            <Card.ImgOverlay className="imageOverlay">
                <Card.Title className="city">{animal.city?`${animal.city}, ${animal.country}`:"Loading"}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="profileBody">
                <Card.Title className="animalName">
                    {animal.title?`${animal.title}. ${animal.first} ${animal.last}` : "Loading Name"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted animalDetails">{animal.gender|| "Unknown"} - {animal.age || "Unknown"}</Card.Subtitle>
                <Card.Text>
                    <Form.Control 
                        className="animalBio" 
                        as="textarea" 
                        value={animal.bio || "Loading Bio"} 
                        readOnly
                    />
                </Card.Text>
                {userFriend? 
                        <Button 
                            variant="danger" 
                            className="deleteButton" 
                            name="delete" 
                            onClick={handleClick}
                        >
                            Delete Friend
                        </Button>
                    :
                        <>
                            <Button 
                                className="leftButton" 
                                name="left"
                                variant="danger"
                                onClick={handleClick}
                            >
                                <FaThumbsDown />
                            </Button>
                            <Button 
                                className="rightButton" 
                                name="right"
                                variant="success"
                                onClick={handleClick}
                            >
                                <FaThumbsUp />
                            </Button>
                        </>
                    }
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;