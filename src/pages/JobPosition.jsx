import React, { useEffect, useState } from 'react'
import JobPositionService from "../services/jobPositionService"
import { Checkbox,Item } from 'semantic-ui-react'
import { SearchInput } from 'evergreen-ui';

export default function JobPosition(props) {
    const [position, setPosition] = useState([])
    
    const handleClick = (e) => {
        const newFilter = e.target.firstChild?.data
        console.log(newFilter);
        props.handleFilters(newFilter);
             }

    useEffect(() => { 
        let jobPositionService = new JobPositionService();
        jobPositionService.getAllPositions().then(result => setPosition(result.data.data))
    }, [])

    return (
          <div style={{position:"relative", overflowX:"hidden",overflowY:"auto",maxWidth:"250px", alignContent: "center", justifyContent: "center", marginTop: 10,fontFamily:"Poppins",fontWeight:"500",fontSize:"2",maxHeight:"200px"}}>

            <Item.Group >
            <div style={{display:"flex",alignItems:"center",alignContent:"center",marginTop:10,marginBottom:10,maxWidth:"250px"}}>
            <SearchInput   placeholder="Pozisyon Ara..." />
            </div>
                {
                    position.map(position => (
                        <Checkbox onClick={event => {handleClick(event)}}   style={{marginTop:10}} key={position.id} label={position.jobName}  value={position.jobName} />
                    ))
                }




            </Item.Group>

        </div>
    )
} 