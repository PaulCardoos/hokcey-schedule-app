import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import Standings from '../components/Standings'
import Schedule from '../components/Schedule'
import {v4 as uuidv4} from 'uuid'
const Friday = () => {
    const [teams, setTeams] = useState({})

    
    useEffect(() => {
    
        if(Object.keys(teams).length === 0){            
            const getTeams = async () => {
                const { data } = await axios.get("https://tewks-server.herokuapp.com/api/v1/friday/teams/roster")
                setTeams(data)
                
            }
        
            getTeams()
        
        }

    }, [teams]);

    const {Muffins, Coffee, Bagels, Hawks} = teams

    return (
        <div>
        <Container>
            <Row>
            <h1 className='text-center'>
                        FRIDAY ROSTER
                    </h1>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <h2>
                        Muffins
                    </h2>
                    <ul className="mx-auto my-auto" style={{listStyleType : "none", justifyContent: "center"}}>
                    {Muffins && Muffins.map(player => (
                        <li key={uuidv4()}>{player}</li>
                    ))}
                    </ul>

                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <h2 className="text-center">
                        Coffee
                    </h2>
                    <ul style={{listStyleType : "none", justifyContent: "center"}}>
                    {Coffee && Coffee.map(player => (
                        <li key={uuidv4()}>{player}</li>
                    ))}
                    </ul>
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <h2 className="text-center">
                        Bagels
                    </h2>
                    <ul style={{listStyleType : "none", justifyContent: "center"}}>
                    {Bagels && Bagels.map(player => (
                        <li key={uuidv4()}>{player}</li>
                    ))}
                    </ul>
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <h2 className="text-center">
                        Hawks
                    </h2>
                    <ul style={{listStyleType : "none", justifyContent: "center"}}>
                    {Hawks && Hawks.map(player => (
                        <li key={uuidv4()}>{player}</li>
                    ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        FRIDAY STANDINGS
                    </h1>
                    <Standings route="https://tewks-server.herokuapp.com/api/v1/friday/teams/standings"/>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        FRIDAY SCHEDULE
                    </h1>
                    <Schedule route="https://tewks-server.herokuapp.com/api/v1/friday/teams/schedule"/>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Friday