import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";

function SwipingPage()
{
    const [animal, setAnimal] = useState({});
    const [userAction, setUserAction] = useState(false)
    
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 2);
        console.log(randomNumber);
        if(randomNumber === 0)
        {
            API.randomCat()
            .then(({ data:cat }) => setAnimal(cat))
            .catch(error => console.log(error));    
        }
        else
        {
            API.randomDog()
            .then(({data:dog}) => setAnimal(dog))
            .catch(error => console.log(error));
        }

    }, [userAction]);

    return (
        <>
            <Container>
                <Row>
                    <ProfileCard animal={animal} setUserAction={setUserAction} />
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;