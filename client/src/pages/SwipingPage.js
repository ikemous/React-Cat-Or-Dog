import React, { useEffect, useState } from "react";
import API from "../utils/API.js";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard.js";

function SwipingPage()
{
    const [animal, setAnimal] = useState({});
    
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 2);
        console.log(randomNumber);
        if(randomNumber === 0)
        {
            API.randomCat()
            .then(({ data:cat }) => console.log(cat))
            .catch(error => console.log(error));    
        }
        else
        {
            API.randomDog()
            .then(({data:dog}) => console.log(dog))
            .catch(error => console.log(error));
        }

    }, [animal]);

    return (
        <>
            <Container>
                <Row>
                    <ProfileCard animal={animal} setAnimal={setAnimal} />
                </Row>
            </Container>
        </>
    )
}

export default SwipingPage;