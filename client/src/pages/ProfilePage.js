import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard.js";
import API from "../utils/API.js";
import { useParams, withRouter } from "react-router-dom";
import { Row, Container } from "react-bootstrap";

function ProfilePage({ user, history }) {
    let animalID = useParams();
    const [animal, setAnimal] = useState({});

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
                <ProfileCard animal={animal} handleClick={handleClick} userFriend={true} />
            </Row>
        </Container>
    );
}

export default withRouter(ProfilePage);