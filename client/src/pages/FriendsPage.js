import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import API from "../utils/API.js";
import { ListGroup, Image, Container, Col, Row } from "react-bootstrap";

function FriendsPage({ user }) {
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        console.log(user);
        API.getFriends({_id: user._id})
        .then(({data}) => {console.log(data);setFriends(data)})
        .catch(error => console.log(error));
    }, [])

    return (
        <Container>
            <Row>
                <ListGroup style={{textAlign: "center"}}>
                    {friends.map(friend =>
                        <ListGroup.Item key={uuid()}>
                            <Row>
                                <Col sm={12} md={4} lg={4}>
                                    <Image 
                                        style={{maxWidth: "100%", minWidth: "100%"}} 
                                        src={friend.imageUrl} 
                                        roundedCircle     
                                    />
                                </Col>
                                <Col sm={12} md={4} lg={4}>
                                    <h2>{friend.title}.{friend.first}</h2>
                                </Col>
                                <Col sm={12} md={4} lg={4}>
                                    <h2>{friend.city}, {friend.country}</h2>
                                </Col>
                            </Row>
                        </ListGroup.Item>)
                    }
                </ListGroup>
            </Row>
        </Container>
    )
};

export default FriendsPage;