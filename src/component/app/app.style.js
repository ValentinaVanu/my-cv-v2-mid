import styled from 'styled-components'


export const StyledAppWrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0 36px;

  @media only screen and (min-width: 600px) {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  margin: 0 36px;
}

@media only screen and (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  margin: 0 36px;
}
`