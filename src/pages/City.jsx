import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService"
import { Select } from 'evergreen-ui'
export default function City() {
    const [city, setCities] = useState([])

  useEffect(() => {

    let cityService = new CityService();
    cityService.getAll().then(result => setCities(result.data.data))
}, [])

    return (
        <div  style={{display:"flex",alignContent:"center",justifyContent:"center",marginTop:10}}>
            

        <Select  onChange={event => console.log(event.target.value)}>
            {
                city.map(c =>(
                    <option key={c.cityId} defaultValue="0" value={c.cityId} data-key={c.cityId}  >
                    {c.cityName}
                </option>

                ))
            }
          
        </Select>

</div>
    )
}
