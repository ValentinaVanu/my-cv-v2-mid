import React from 'react';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import * as WS from './welcome.style'

const Welcome = () => {
  return (
    <>
      <Column>
        <SectionTitle>Welcome</SectionTitle>
      </Column>
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
    </>
  )
}

export { Welcome }
