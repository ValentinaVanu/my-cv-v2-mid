import React from 'react';
import { StyledBullet } from './skillList.style';

const SkillList = ({label, background}) => {
  return (
    <StyledBullet background={background}>{label}</StyledBullet>
  )
}

export { SkillList }