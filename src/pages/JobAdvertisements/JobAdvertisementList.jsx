import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Item, Container,Segment,Label } from 'semantic-ui-react'

export default function JobAdvertisementList() {


  const [jobAdvertisements, setJobAdvertisements] = useState([])
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
  }, [])

  const itemStyle = {
    borderRadius:20,
    border:"1px solid #a2dec2",
    background:"#a2dec2",
    maxWidth:850,
   fontFamily:"Mukta",
   

  }


  return (

  
    
    <Segment basic style={{maxWidth:850,}}>
     
{
 jobAdvertisements.map(jobAdvertisement => (
  
  <Item.Group key={jobAdvertisement.id}  divided>
 
  <Item as='a'   style ={itemStyle}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:5}}>
   <div style={{padding:".25rem",background:"#fff",border:"1px solid #dee2e6",width:"58px",height:"58px",alignItems:"center",display:"flex"}}> 
    <Item.Image rounded size="medium"  src='https://www.forumistanbul.com.tr/media/image/vatancomputer.jpg' />
    
    </div>
    </div>
    <Item.Content  style={{ 
 
  marginLeft:20,
  paddingTop:20
            }}  >
      <Item.Header style={{fontFamily:"Poppins",fontWeight:"bolder",fontSize:17}} >{jobAdvertisement.jobName}</Item.Header>
      <Item.Meta>
        <span>{jobAdvertisement.employerCompanyName}</span>

      </Item.Meta>
      <Item.Description style={{fontFamily:"Segoe UI",fontWeight:500}}>
        {jobAdvertisement.cityName}
      </Item.Description>
      <Item.Description>
        {jobAdvertisement.description}
      </Item.Description>
      <Container style={{display:"flex",justifyContent:"space-between",alignItems:"left",right:30}}>
      <Item.Extra>
      <Label style={{borderRadius:10, margin: "auto",
    marginRight: "30px",marginBottom:10,fontWeight:600}}   content={jobAdvertisement.workingTimeTitle} />
      </Item.Extra>

      <Item.Extra >
      <Label style={{borderRadius:20, margin: "auto",
    marginLeft: "30px",fontWeight:600}} icon='time' content="7 gün önce"/>
       
      </Item.Extra>
      </Container>
    </Item.Content>
  </Item>

</Item.Group>

 ))
}
             
    </Segment>

  )
}
