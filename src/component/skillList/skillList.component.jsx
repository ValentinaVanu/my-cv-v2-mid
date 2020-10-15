import React from 'react';
import { StyledBullet } from './skillList.style';

const Front = ({label, background}) => {
  return (
    <StyledBullet background={background}>{label}</StyledBullet>
  )
}

export { Front }