import React from "react";
import { ButtonGroup, Button, Row, Col } from "react-bootstrap";

function LikeOrDislikeForm()
{
    return(
        <Row>
            <Col>
                <Button>Left</Button>
            </Col>
            <Col></Col>
            <Col>
                <Button>Right</Button>
            </Col>
        </Row>
    )
}

export default LikeOrDislikeForm;