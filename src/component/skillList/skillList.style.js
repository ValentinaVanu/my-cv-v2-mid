import styled from 'styled-components';
import { getBackgroundValue } from '../button/button.style';


export const StyledBullet = styled.div `
  display: flex;
  flex-direction: row;
  background-color:${({ background }) => getBackgroundValue(background)};
  font-size: 12px;
  font-weight: bolder;
  color: #fff;
  line-height: 30px;
  padding: 0 8px;
  border-radius: 15px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
`