import styled from 'styled-components';


export const ConnectWrap = styled.div `
  @media only screen and (min-width: 600px) {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media only screen and (min-width: 600px) {
  grid-column: 5/-1;
}
`

