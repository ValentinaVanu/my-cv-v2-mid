import React from 'react'
import { Connect } from '../connect'
import { Experience } from '../experience'
import { OpenSource } from '../open-source/open-source.component'
import { Skill } from '../skill/skill.component'
import { Welcome } from '../welcome'
import { StyledAppWrapper } from './app.style'


const App = () => {
  return (
    <StyledAppWrapper>
      <Welcome />
      <Connect />
      <Skill />
      <Experience />
      <OpenSource />
    </StyledAppWrapper>
  )
}

// export default App
export { App }
