import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API.js";
import { ListGroup, Image, Container, Row } from "react-bootstrap";
import "./friendsPage.css";

function FriendsPage({ user }) {
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        API.getFriends({_id: user._id})
        .then(({data}) => {console.log(data);setFriends(data)})
        .catch(error => console.log(error));
    }, [])

    return (
        <Container>
            {friends.length > 0? 
                <Row className="mainRow md-auto ">
                    <ListGroup style={{width: "100%"}}>
                        {friends.map(friend =>
                            <Link to={`/profile/friends/${friend._id}`} key={friend._id}>
                                <ListGroup.Item 
                                    style={
                                        friend.gender === "male"? {background: "#6ca0dc"}
                                        : friend.gender === "female"? {background: "#f8b9d4"}
                                        : {background: "white"}
                                    } 
                                    className="friendItem"
                                >
                                    <Image 
                                        className="friendImage"
                                        src={friend.imageUrl} 
                                        roundedCircle     
                                    />
                                    <h2 className="friendName">{friend.first}</h2>
                                </ListGroup.Item>
                            </Link>
                        )}
                    </ListGroup>
                </Row>
                :
                <Row className="mainRow md-auto align-items-center justify-content-center ">
                    <div className="friendless col-sm-8" style={{width: "100%", height: "inherit", textAlign: "center"}}>
                        <h1>😭 No Friends Found 😭</h1>
                        <h2>Click <Link to="/swipe">here</Link> to find some friends!</h2>
                    </div>
                </Row>
            }
        </Container>
    )
};

export default FriendsPage;