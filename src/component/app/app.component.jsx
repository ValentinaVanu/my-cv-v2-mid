import React from 'react'
import { Connect } from '../connect'
import { Welcome } from '../welcome'
import { StyledAppWrapper } from './app.style'


const App = () => {
  return (
    <StyledAppWrapper>
      <Welcome />
      <Connect />
    </StyledAppWrapper>
  )
}

// export default App
export { App }
