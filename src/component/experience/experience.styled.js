import styled from 'styled-components';



export const Info = styled.div `
  font-size: 14px;
  font-weight: bold;
  grid-row: 4/5;
  padding: 10px;
`

export const MoreInfo = styled.div `
  border-bottom: 2px solid #808080;
  grid-column: 1/-1;
  grid-row: 3/5;
  overflow: hidden;

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
  background-color: #fff;
  border: 1px solid #808080;
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
  justify-items: center;
`

export const JobWrapper = styled.div `
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  line-height: 30px;
  color: #808080;
  border: 2px solid #808080;

`