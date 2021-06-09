import React from 'react'
import { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService.jsx"
import { Item, Image, Container } from 'semantic-ui-react'

export default function JobAdvertisementList() {
  const [jobadvertisements, setjobAdvertisements] = useState([])
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getAll().then(result => setjobAdvertisements(result.data.data))
  }, [jobadvertisements])
  return (
  <Container style={{marginTop:20}}> 
    <Item.Group>
      {
        jobadvertisements.map(adver =>(
<Item>
        
        <Item.Image size='tiny' src='https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/07/24/427231-1549240246.jpg?itok=RaG0fSyf' />

        <Item.Content>
          <Item.Header as='a'>{adver.jobName}</Item.Header>
          <Item.Meta>{adver.cityName}</Item.Meta>
          <Item.Meta >{adver.endDate}</Item.Meta>
          <Item.Meta> {adver.createdDate}</Item.Meta>
          <Item.Description>
            
          </Item.Description>
          <Item.Extra></Item.Extra>
        </Item.Content>
      </Item>

        ))
      }
      
    </Item.Group>
</Container>
  )
}
