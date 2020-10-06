import React, { useEffect, useState } from 'react';
import { Button } from '../button';
import { Column } from '../column';
import { Icon } from '../icomoon';
import { SectionTitle } from '../section-title';
import * as WS from './welcome.style'
import { get } from 'axios'


const Welcome = () => {
  const [welcome, updateWelcome] = useState({})

  useEffect(
    () => {
      // get("http://localhost:3456/welcome")
      //   .then(({ data }) => {
      //     console.log(data)
      //     updateWelcome(data)
      //   })

      // async await
      const getResult = async() => {
        const { data } = await get("http://localhost:3456/welcome")
        updateWelcome(data)
      }
      getResult()
    },
    []
  )

  const {
    person,
    jobTitle,
    sectionDescription,
    sectionTitle
  } = welcome
  console.log(jobTitle)
  debugger
  return (
    <>
      <Column>
        <SectionTitle>Welcome to My CV</SectionTitle>
      </Column>
      <Column height={10} />
      <Column>
        <WS.StyledH1>{person && person.firstName} {person && person.lastName} </WS.StyledH1>
      </Column>
      <Column>
        <WS.StyledH2>{jobTitle}</WS.StyledH2>
      </Column>
      <Column>
        <WS.StyledH3>About Me</WS.StyledH3>
      </Column>
      <Column>
        <WS.StyledDiv>
          <WS.StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique aliquam aut obcaecati facilis reprehenderit cupiditate error nobis illo eveniet, quae voluptatibus ipsam officia unde, molestiae, voluptates alias nihil culpa.</WS.StyledP>
        </WS.StyledDiv>
      </Column>
      <Column height={10} />
      <Column display="flex">
        <Button
        icon="download"
        label="Download CV">
        </Button>
      </Column>
      <Column height={10} />
      <Column display="flex">
        <Button 
          icon="arrow-down"
          background="green"
        />
      </Column>
      <Column height={10} />
    </>
  )
}

export { Welcome }
