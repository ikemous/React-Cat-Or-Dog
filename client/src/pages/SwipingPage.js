import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";
import "./swipingPage.css";

function SwipingPage()
{
    const [animal, setAnimal] = useState({});
    const [userAction, setUserAction] = useState(false)
    
    useEffect(() => {
        API.randomProfile()
        .then(({data: profileInfo}) => setAnimal(profileInfo))
        .catch(error => console.log(error));
    }, [userAction]);

    const handleClick = ({target}) => {
        console.log(target.name);
        if( target.name === "left") return setUserAction(false);
        setUserAction(true);
    };

    return (
        <>
            <Container>
                <Row style={{height: "calc(100vh - 80px)"}}>
                    <ProfileCard animal={animal} handleClick={handleClick} />
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;