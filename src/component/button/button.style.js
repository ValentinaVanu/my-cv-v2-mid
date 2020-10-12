import styled from 'styled-components';

const getBackgroundValue = string => {
  const defaultValue  = '#1875F0';
  const backList = {
    green: '#0f0',
    red: '#d52027'
  }

  return backList.hasOwnProperty(string)
    ? backList[string]
    : defaultValue
}

export const StyledButton = styled.div `
  background-color: ${({ backgroundColor }) => getBackgroundValue(backgroundColor)};
  font-size: 12px;
  font-weight: bolder;
  color: #fff;
  border-radius: 20px;
  height: 40px;
  border: 0;
  padding: 0 ${({icon}) => icon ? 12 : 26}px;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-items: center;
`