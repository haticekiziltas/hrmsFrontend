import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Item, Container,Segment,Label, Pagination} from 'semantic-ui-react'
import {Select} from 'evergreen-ui'
import City from '../City'
import JobPosition from '../JobPosition'

export default function JobAdvertisementList() {

  function calculateDay(value) {

    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // 30 saniyeden önceyse 'şimdi' yazar
          return 'Şimdi';
      const intervals = {
          'yıl': 31536000,
          'ay': 2592000,
          'hafta': 604800,
          'gün': 86400,
          'saat': 3600,
          'dakika': 60,
          'saniye': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' önce'; // tekil (1 gün önce)
              } else {
                  return counter + ' ' + i + ' önce'; // çoğul (2 veya daha fazla gün öncesi)
              }
      }
  }
  return value;
  }


  const [jobAdvertisement, setJobAdvertisements] = useState([])
  const [filters, setFilters] = useState('')

  const handleFilters = (filters) => {
  setFilters(filters)
}

  // const handleClick = function (e) {
  //   console.log(e.target.value);

  // };

 
  const [pageNo, setActivePage] = useState(1);
  const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getPageable(pageNo, pageSize).then(result => setJobAdvertisements(result.data.data))
  }, [jobAdvertisement])

  const itemStyle = {
    borderRadius:20,
    border:"1px solid #a2dec2",
    background:"#a2dec2",
    maxWidth:850,
   fontFamily:"Mukta",
   

  }

  return (

    <Segment basic style={{maxWidth:850,}}>
        <JobPosition handleFilters={filters => handleFilters(filters, "continents")}></JobPosition>
      <City handleFilters={filters => handleFilters(filters, "continents")}></City>
  
{
    jobAdvertisement.filter(value => {
      if (setFilters=== '') {
          return value
      } else if (value.jobName.toLocaleLowerCase().includes(filters.toLocaleLowerCase()) || value.cityName.toLocaleLowerCase().includes(filters.toLocaleLowerCase())){

          return value
    }
      }).map(jobAdvertisement => (
  
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
        {jobAdvertisement.jobDescription}
      </Item.Description>
      <Container style={{display:"flex",justifyContent:"space-between",alignItems:"left",right:30}}>
      <Item.Extra>
      <Label style={{borderRadius:10, margin: "auto",
    marginRight: "30px",marginBottom:10,fontWeight:600}}   content={jobAdvertisement.workingTimeTitle} />
      </Item.Extra>

      <Item.Extra >
      <Label style={{borderRadius:20, margin: "auto",
    marginLeft: "30px",fontWeight:600}} icon='time' content={calculateDay(jobAdvertisement.createdAt)}/>
       
      </Item.Extra>
      </Container>
    </Item.Content>
  </Item>

</Item.Group>

 ))}
  <Select onChange={e => setPageSize(e.target.value)} width={240} height={40}>
        <option  value="10" selected>
          10
        </option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
      <Pagination

        activePage={pageNo}
        onPageChange={handlePaginationChange}
        totalPages={pageSize}
        ellipsisItem={null}
      />
             
 </Segment>

  )
}
