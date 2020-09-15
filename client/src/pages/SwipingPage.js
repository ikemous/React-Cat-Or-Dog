import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import API from "../utils/API.js";
import { Link } from "react-router-dom";
import { Container, Row, Modal, Button, Image } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";
import "./swipingPage.css";

function SwipingPage({ user })
{
    const [animal, setAnimal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalAnimal, setModalAnimal] = useState({});
    
    const queryNewProfile = () => {
        API.randomProfile()
        .then(({data: profileInfo}) => setAnimal(profileInfo))
        .catch(error => console.log(error));
    }

    const addFriend = () => {
        const animalID = uuid();
        setModalAnimal({...animal, _id: animalID});
        const information = {
            _id: user._id,
            "animal": {...animal, _id: animalID}
        }
        API.addFriend(information)
        .then(() => setShowModal(true))
        .catch(error => console.log(error));
    };

    useEffect(() => {
        queryNewProfile();
    }, []);

    const handleClick = ({target}) => {
        if( target.name === "left" || target.getAttribute("data-name") === "left") return queryNewProfile();
        const randomNumber = Math.floor(Math.random() * 5);
        if ( randomNumber === 3){ 
            console.log("%c You've Been Friended!\n", "color:orange;");
            addFriend();
        }
        queryNewProfile();
    };

    return (
        <>
            <Container>
                <Row style={{height: "calc(100vh - 80px)"}}>
                    <ProfileCard animal={animal} handleClick={handleClick} />
                    <Modal
                        style={
                            animal.gender === "male"? {background: "#6ca0dc"}
                            : animal.gender === "female"? {background: "#f8b9d4"}
                            : {background: "white"}
                        } 
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                You've Got A New Friend!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image className="modalImage" src={modalAnimal.imageUrl || "https://via.placeholder.com/450?text=Profile+Image"} roundedCircle />
                            <h4 style={{textAlign: "center"}}>{modalAnimal.title || ""}. {modalAnimal.first} {modalAnimal.last}</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setShowModal(false)}>Yay!</Button>
                            <Button as={Link} to={`/profile/friends/${modalAnimal._id}`} >Got To Profile</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;