import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import { useParams } from "react-router-dom";

function ProfilePage({ user }) {
    let animalID = useParams();
    const [animal, setAnimal] = useState({});

    useEffect(() => {
        API.getFriend({_id: user._id, "animalId": animalID})
        .then(result => setAnimal(result.data))
        .catch(error => console.log(error));
    },[]);
    useEffect(() => console.log(animal), [animal]);
    useEffect(() => console.log(animalID), [animalID]);
    

    return (
        <>
        </>
    );
}

export default ProfilePage;