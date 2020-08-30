import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";

function SwipingPage()
{
    const [animal, setAnimal] = useState({});
    const [userAction, setUserAction] = useState(false)
    
    useEffect(() => {
        API.randomProfile()
        .then(({data: profileInfo}) => setAnimal(profileInfo))
        .catch(error => console.log(error));
    }, [userAction]);

    useEffect(() => console.log(animal),[animal]);

    const handleClick = ({target}) => {
        console.log(target.name);
        if( target.name === "left") return setUserAction(true);
    };

    return (
        <>
            <Container>
                <Row>
                    <ProfileCard animal={animal} handleClick={handleClick} />
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;