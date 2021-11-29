import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
const InfoTable = () => {
    const [teams, setTeams] = useState({})

    
    useEffect(() => {
    
       

        if(Object.keys(teams).length === 0){            
            const getTeams = async () => {
                const { data } = await axios.get("http://127.0.0.1:5000/api/v1/roster/teams/wednesday")
                setTeams(data)
                console.log(data)
            }
        
            getTeams()
        
        }

    }, []);


    const {Bruins, Flyers, Devils, Rangers} = teams
    let allTeams = []
    if (Bruins != null && Flyers != null && Devils != null && Rangers != null){
        allTeams.push(Bruins)
        allTeams.push(Flyers)
        allTeams.push(Devils)
        allTeams.push(Rangers)
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Bruins</th>
                        <th>Rangers</th>
                        <th>Flyers</th>
                        <th>Devils</th>
                    </tr>
                </thead>
                <tbody>
                {allTeams.length > 0 && allTeams.map()}
                </tbody>
            </Table>


        </div>
    )
}

export default InfoTable
