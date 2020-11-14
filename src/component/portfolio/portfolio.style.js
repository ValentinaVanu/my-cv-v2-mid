import styled from 'styled-components'



export const EachProjectWrap = styled.div`
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
`

export const ProjectImage = styled.div `
  border: 2px solid #707070 ;
  padding: 5px;
`

export const EachProject = styled.div `
  border: 2px solid #707070 ;
  padding: 10px 20px;
`

export const RecentLanguages =styled.div `
  padding-bottom: 20px;
  font-style: italic;
  font-size: 12px;
  color: #070707;

`

export const RecentTitle = styled.div `
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  color: #808080;
`

export const PortfolioTitle = styled.div `
  color: #707070;
  font-size: 22px;
  font-weight: medium;
  line-height: 30px;
`
