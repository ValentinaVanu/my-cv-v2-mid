import styled from 'styled-components';


export const StyledInfoWrap = styled.div `
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  color: #808080;
`
export const CrossButton = styled.div `
  background-color: #1875F0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledTitleWrap = styled.div `
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`
export const StyledTitle = styled.div `
  display: flex;
  line-height: 30px;
  flex-grow: 1;
  font-size: 22px;
  padding-top: 10px;

`
export const StyledDescription = styled.div `
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 14;
  line-height: 30px;
  color: #707070;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`
export const StyledLinkWrap = styled.div `
  margin-top: 20px;
  background-color: #1875F0;
  color: #fff;
  border-radius: 20px;
  text-align: center;
`
export const StyledLink = styled.a `
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`