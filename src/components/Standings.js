import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

const Standings = ({route}) => {
    const [standings, setStandings] = useState([])

    useEffect(() => {
        if(standings.length === 0){
            const getStandings = async () => {
                const { data } = await axios.get(route)
                setStandings(data)
           
            }
        
            getStandings()
        }
    }, [route])

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Teams</th>
            <th>Win</th>
            <th>Loss</th>
            <th>Tie</th>
          </tr>
        </thead>
        <tbody>
          {standings && standings.map(t => (
              <tr key={uuidv4()}>
              <th>{t["Team"]}</th>
              <td>{t["Wins"]}</td>
              <td>{t["Loses"]}</td>
              <td>{t["Ties"]}</td>
              </tr>
          ))}
        </tbody>
      </Table>
    )
}

export default Standings
