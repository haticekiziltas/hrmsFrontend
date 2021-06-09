  
import React, { useState, useEffect } from 'react'
import CvService from '../services/cvService'
import { Grid, Accordion, Image, Card, Label } from 'semantic-ui-react'

export default function CvList() {
  const [cvs, setCvs] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {

    let cvService = new CvService();
    cvService.getAll().then(result => setCvs(result.data.data))


  }, [cvs])

  const handleClick = (e, titleProps) => {
    const { index } = titleProps

    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex)
  }


  let level2Panels
  let Level2Content
  let rootPanels2

  let level3Panels
  let Level3Content
  let rootPanels3

  let level4Panels
  let Level4Content
  let rootPanels4

 


  const handlePanels = function (education) {
    level2Panels = []

    education.map(abc => {
      level2Panels.push({ key: abc.id, title: abc.schoolName, content: abc.schoolDepartment })

    })
    Level2Content = (
      <div>
        Eğitimler
        <Accordion.Accordion panels={level2Panels} />
      </div>
    )
    rootPanels2 = [

      { key: 'panel-2', title: 'Eğitimler', content: { content: Level2Content } },
    ]
  }
  const handlePanels2 = function (talents) {
    level3Panels = []

    talents.map(talent => {
      level3Panels.push({ key: talent.id, title: talent.talentTitle, content: talent.talentTitle })

    })
    Level3Content = (
      <div>
        Yetenekler
        <Accordion.Accordion panels={level3Panels} />
      </div>
    )
    rootPanels3 = [

      { key: 'panel-3', title: 'Yetenekler', content: { content: Level3Content } },
    ]
  }
  const handlePanels3 = function (jobExperiences) {
    level4Panels = []

    jobExperiences.map(jobExperience => {

      level4Panels.push({ key: jobExperience.id, title: jobExperience.workPlaceName, content: jobExperience.job.jobName })

    })
    Level4Content = (
      <div >
        Yetenekler
        <Accordion.Accordion panels={level4Panels} />
      </div>
    )
    rootPanels4 = [

      { key: 'panel-3', title: 'İş Deneyimleri', content: { content: Level4Content } },
    ]

  }
  return (
    <div >

      {
        cvs.map(cv => (
          <Grid>
            <Grid.Row>
              <Grid.Column>

                <Card style={{ width: "auto", position: "relative", alignItems: "center" }} background="black" key={cv.id}>
                  <Card.Content>


                    {cv.photo === null || cv.photo == "string" ?

                      <div style={{ marginBottom: 20 }}>
                        <Label content='Resim Bulunamadı!' icon='warning' />
                        <span></span>
                      </div> :

                      <div style={{ marginBottom: 20 }}>
                        <Image src={cv.photo} size="medium" rounded verticalAlign='top' />
                        <span></span>
                      </div>
                    }

                    {handlePanels(cv.educations)}
                    {handlePanels2(cv.talents)}
                    {handlePanels3(cv.jobExperiences)}
                    <Accordion defaultActiveIndex={0} panels={rootPanels2} styled />
                    <Accordion defaultActiveIndex={0} panels={rootPanels3} styled />
                    <Accordion defaultActiveIndex={0} panels={rootPanels4} styled />


                  </Card.Content>
                  <Card.Content>
                    <h1>{cv.educations.schoolName}</h1>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        ))
      }


    </div>
  )
}