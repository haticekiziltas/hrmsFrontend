import React, { useEffect,useState } from 'react'
import WayOfWorkingService from '../services/wayOfWorkingService'
import { Checkbox,Item } from 'semantic-ui-react'
import { SearchInput } from 'evergreen-ui';

export default function WayOfWorking() {
    const [wayOfWorking, setWayOfWorking]= useState([])
    useEffect(()=>{
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getAllWayOfWorkings().then(result => setWayOfWorking(result.data.data))
    },[])
    return (
        <div style={{position:"relative", overflowX:"hidden",overflowY:"auto",maxWidth:"250px", alignContent: "center", justifyContent: "center", marginTop: 10,fontFamily:"Poppins",fontWeight:"500",fontSize:"2",maxHeight:"200px"}}>
              <Item.Group >
                <div style={{display:"flex",alignItems:"center",alignContent:"center",marginTop:10,marginBottom:10,maxWidth:"250px"}}>
            <SearchInput  placeholder="Çalışma Şekli Ara..." />
            </div>
                {
                    wayOfWorking.map(wayOfWorking => (
                        <Checkbox style={{marginTop:10}} key={wayOfWorking.id} label={wayOfWorking.wayOfWorkingTitle}  value={wayOfWorking.wayOfWorkingTitle} />
                    ))
                }




            </Item.Group>

        </div>
    )
}
