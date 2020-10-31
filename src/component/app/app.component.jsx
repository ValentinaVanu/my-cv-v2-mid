import React from 'react'
import { Connect } from '../connect'
import { Experience } from '../experience'
import { OpenSource } from '../open-source/open-source.component'
import { Portfolio } from '../portfolio'
import { Recommendations } from '../recommendations/recommendations.component'
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
      <Portfolio />
      <Recommendations />
    </StyledAppWrapper>
  )
}

// export default App
export { App }
