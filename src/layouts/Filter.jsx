import React, { useState } from 'react'
import { Accordion, Menu } from 'semantic-ui-react'
import City from '../pages/City'
import JobPosition from '../pages/JobPosition'


export default function Filter() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {
        const { index } = titleProps

        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    return (



        <div style={{margin:20,display:"flex",flexDirection:"row",justifyContent:"center"}}>
   
         
        <Accordion as={Menu} vertical style={{width:"70%"}}>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 0}
            content='Pozisyonlar'
            index={0}
            onClick={handleClick}
          />
          <Accordion.Content active={activeIndex === 0}  >
            <JobPosition></JobPosition>
          </Accordion.Content>
        </Menu.Item>
  
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 1}
            content='Şehirler'
            index={1}
            onClick={handleClick}
          />
          <Accordion.Content active={activeIndex === 1}  > 
          <City></City>
          </Accordion.Content>
        </Menu.Item>
      </Accordion>
      
     
      </div>

    )
}