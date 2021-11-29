import React from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap'
import TeamPic from "../images/HockeyLeaguePhoto.jpeg"
const Home = () => {
    return (
        <div>
            <h1>
                TEWKSBURY MENS ICE HOCKEY
            </h1>
            <Container>
                <Row>
                    <Col>
                        <Image fluid style={{padding : "5px", border : "1px solid black"}}src={TeamPic}/>
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}

export default Home
