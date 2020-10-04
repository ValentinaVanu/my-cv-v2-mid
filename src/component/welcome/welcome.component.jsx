import React from 'react';
import { Button } from '../button';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import * as WS from './welcome.style'

const Welcome = () => {
  return (
    <>
      <Column>
        <SectionTitle>Welcome to My CV</SectionTitle>
      </Column>
      <Column height={10} />
      <Column>
        <WS.StyledH1>Valentina Vanu</WS.StyledH1>
      </Column>
      <Column>
        <WS.StyledH2>Junior Web Developer</WS.StyledH2>
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
          label="Download CV"
        />
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
