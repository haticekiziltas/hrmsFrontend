import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService"
import { Select} from 'evergreen-ui'
export default function City(props) {
    
    const [city, setCities] = useState([])
    
    const handleClick = (e) => {
        const newFilter = e.target.value
        console.log(newFilter);
        props.handleFilters(newFilter);
    }
     
        useEffect(() => {

    let cityService = new CityService();
    cityService.getAll().then(result => setCities(result.data.data))
    }, [])

    return (
        <div  style={{display:"flex",alignContent:"center",justifyContent:"center",marginTop:10}}>
            

        <Select  search onChange={event => handleClick(event)}>
            {
                city.map(c => (
                    <option key={c.cityId} defaultValue="0" value={c.cityName} data-key={c.cityId}  >
                        {c.cityName}
                    </option>


                ))
            }
          
        </Select>

</div>
    )
        }
