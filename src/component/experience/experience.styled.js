import styled from 'styled-components';


export const CompanyName = styled.div `
  grid-column: 2/4;
  grid-row: 2/2;
`

export const JobTitle = styled.div `
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  grid-column: 2/4;
  grid-row: 1/2;
`

export const JobPic =styled.div `
  grid-column: 1/2;
  grid-row: 1/3;
  background-color: #808080;
  width: 40px;
  height: 40px;
  border-radius: 50%;

`

export const EachJob = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  border-bottom: 2px solid #808080;
  align-items: center;
`

export const JobWrapper = styled.div `
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  line-height: 30px;
  color: #808080;
  border: 2px solid #808080;

`