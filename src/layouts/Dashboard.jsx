import React from 'react'
import { Grid } from 'semantic-ui-react'
import Filter from './Filter'
import { Route } from 'react-router'
import CvList from '../pages/CvList'
import JobAdvertisementAdd from '../pages/JobAdvertisements/JobAdvertisementAdd'
import JobAdvertisementList from '../pages/JobAdvertisements/JobAdvertisementList'
import HomePage from '../pages/HomePage'
import ConfirmJobAdvertisement from '../pages/JobAdvertisements/ConfirmJobAdvertisement'
import Footer from './Footer'

export default function Dashboard() {

    return (
     
     
        <Grid   >
          <Grid.Row>
            <Grid.Column >
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/" component={Footer}/>
            </Grid.Column>
  
        
          </Grid.Row>
            <Grid.Row>
                <Grid.Column  mobile={12} tablet={6} computer={4}>
                 
                <Route exact path="/jobadvertisementList" component={Filter}/>
                <Route exact path="/cvList" component={Filter}/>
                <Route exact path="/wayOfWorking" component={Filter}/>
                </Grid.Column>
               
              
                <Grid.Column  mobile={16} tablet={12} computer={12}>
            
               <Route exact path="/cvList" component={CvList}/>
               <Route exact path="/addAdvertisement" component={JobAdvertisementAdd}/>
               <Route exact path="/jobadvertisementList" component={JobAdvertisementList}/>
               <Route exact path="/JobAdvertisementConfirm" component={ConfirmJobAdvertisement}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
  
    
                
         
      
      )
}
