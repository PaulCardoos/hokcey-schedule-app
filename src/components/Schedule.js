import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const Schedule = ({route}) => {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        if(schedule.length === 0){
            const getSchedule = async () => {
                const { data } = await axios.get(route)
                setSchedule(data)
               
            }
        
            getSchedule()
        }
    }, [route])

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Home</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody>
        {schedule && schedule.map(game =>(
            <tr key={uuidv4()}>
                <td>{game[0]}</td>
                <td>{game[1]}</td>
                <td>{game[2]}</td>
                <td>{game[3]}</td>

            </tr>    
        ))}
        </tbody>
      </Table>
    )
}

export default Schedule
