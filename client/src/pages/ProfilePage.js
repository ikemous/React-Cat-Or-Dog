import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard.js";
import API from "../utils/API.js";
import { useParams, withRouter } from "react-router-dom";
import { Row, Container, Modal, Button } from "react-bootstrap";

function ProfilePage({ user, history }) {
    let animalID = useParams();
    const [animal, setAnimal] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        API.getFriend({_id: user._id, "animalId": animalID.id})
        .then(result => setAnimal(result.data))
        .catch(error => console.log(error));
    },[]);
    
    useEffect(() => console.log(animal), [animal]);
    useEffect(() => console.log(animalID), [animalID]);
    
    const handleClick = () => {
        API.deleteFriend({_id: user._id, "animalId": animalID.id})
        .then(() => history.push("/swipe"))
        .catch(error => console.log(error));
    };

    return (
        <Container>
            <Row style={{height: "calc(100vh - 80px)"}}>
                <ProfileCard animal={animal} handleClick={() => setShowModal(true)} userFriend={true} />
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    style={
                        animal.gender === "male"? {background: "#6ca0dc"}
                        : animal.gender === "female"? {background: "#f8b9d4"}
                        : {background: "white"}
                    } 
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h2 style={{textAlign: "center"}}>You're About To Delete A Friend!</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="success" onClick={() => setShowModal(false)}>Take Me Back! :(</Button>
                        <Button variant="danger" onClick={handleClick}>DELETE {`>:D`}</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    );
}

export default withRouter(ProfilePage);