import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media only screen and (min-width: 600px) {
  display: grid;
  grid-row: 5/-1;
}
`