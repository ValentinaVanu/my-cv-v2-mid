import styled from 'styled-components';

export const Info = styled.div `
  font-size: 14px;
  font-weight: bold;
  grid-column: 2/4;
`

export const MoreInfo = styled.div `
  grid-column: 1/-1;

`
export const JobDate = styled.div `
  font-size: 12px;
  font-style: italic;
  text-align: center;

`
export const CompanyName = styled.div `
  grid-column: 2/4;
  grid-row: 2/2;

`
export const Chevron = styled.div `
  color: #fff;
  text-align: center;
  grid-column: 4/5;
  grid-row: 1/3;
  background-color: #808080;
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
  border-bottom: 2px solid #808080;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
`

export const JobWrapper = styled.div `
  border-radius: 6px;
  font-size: 14px;
  line-height: 30px;
  color: #808080;
  border: 2px solid #808080;

`