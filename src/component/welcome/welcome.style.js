import styled from 'styled-components'



export const DesktopWrap = styled.div `
  display: grid;
  grid-column: 1/-1;
  
  @media only screen and (min-width: 992px){
    grid-gap: 10px;
    grid-column: 1/9;
  }
`

export const StyledH1 = styled.h1 `
  text-align: center;
  font-size: 48px;
  color: #707070;
`

export const StyledH2 = styled.h2 `
  text-align: center;
  font-size: 36px;
  color: #707070;
`
export const StyledH3 = styled.h3 `
  font-size: 22px;
  color: #808080;
  line-height: 30px;
  
  `
export const StyledP = styled.p `
  text-align: center;
  font-size: 14px;
  color: #808080;
  line-height: 30px;
`
export const StyledDiv = styled.div `
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`