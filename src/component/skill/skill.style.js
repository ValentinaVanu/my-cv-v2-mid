import styled from 'styled-components'




export const LegendListGrid = styled.div`
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

}
`

export const Description = styled.div `
  padding: 20px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 30px;
  color: #808080;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`

export const SkillTitle = styled.div `
  color: #808080;
  font-size: 22px;
  line-height: 30px;

`

export const StyledNumber = styled.span`
  float: right;
`

export const LegendList = styled.div `
  border-radius: 6px;
  border: 2px solid #707070;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`

// export const StyledUl = styled.ul `
  

//   & :nth-last-child(){
//     border-bottom: none;
//   }
// `
export const StyledLi = styled.li `
  list-style-type: none;
  border-bottom: 2px solid #707070;
  color: #808080;
  margin: 0;
  padding: 0;
  padding: 10px;

`

export const StyledIcon = styled.span `
  margin-right: 10px;
`
export const StyledLabel = styled.span `
  font-size: 13px;
  line-height: 22px;
  font-weight: bold;
  margin-left: 10px;
`
