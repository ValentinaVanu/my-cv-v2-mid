import React from 'react'
import { Connect } from '../connect'
import { Skill } from '../skill/skill.component'
import { Welcome } from '../welcome'
import { StyledAppWrapper } from './app.style'


const App = () => {
  return (
    <StyledAppWrapper>
      <Welcome />
      <Connect />
      <Skill />
    </StyledAppWrapper>
  )
}

// export default App
export { App }
