import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import Standings from '../components/Standings'
import Schedule from '../components/Schedule'
import { v4 as uuidv4 } from 'uuid';


const Wednesday = () => {
    const [teams, setTeams] = useState({})

    
    useEffect(() => {
    
        if(Object.keys(teams).length === 0){            
            const getTeams = async () => {
                const { data } = await axios.get("https://tewks-server.herokuapp.com/api/v1/wednesday/teams/roster")
                setTeams(data)
            }
        
            getTeams()
        
        }

    }, [teams]);

    const {Bruins, Rangers, Flyers, Devils} = teams
    
    return (
        <div>
            <Container>
                <Row>
                <h1 className='text-center'>
                            WEDNESDAY ROSTER
                        </h1>
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <h2>
                            Bruins
                        </h2>
                        <ul className="mx-auto my-auto" style={{listStyleType : "none", justifyContent: "center"}}>
                        {Bruins && Bruins.map(player => (
                            <li key={uuidv4()}>{player}</li>
                        ))}
                        </ul>

                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <h2 className="text-center">
                            Flyers
                        </h2>
                        <ul style={{listStyleType : "none", justifyContent: "center"}}>
                        {Flyers && Flyers.map(player => (
                            <li key={uuidv4()}>{player}</li>
                        ))}
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <h2 className="text-center">
                            Devils
                        </h2>
                        <ul style={{listStyleType : "none", justifyContent: "center"}}>
                        {Devils && Devils.map(player => (
                            <li key={uuidv4()}>{player}</li>
                        ))}
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <h2 className="text-center">
                            Rangers
                        </h2>
                        <ul style={{listStyleType : "none", justifyContent: "center"}}>
                        {Rangers && Rangers.map(player => (
                            <li key={uuidv4()}>{player}</li>
                        ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            WEDNESDAY STANDINGS
                        </h1>
                        <Standings route="https://tewks-server.herokuapp.com/api/v1/wednesday/teams/standings"/>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            WEDNESDAY SCHEDULE
                        </h1>
                        <Schedule route="https://tewks-server.herokuapp.com/api/v1/wednesday/teams/schedule"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Wednesday
