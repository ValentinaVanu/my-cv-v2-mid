import React from 'react'
import { StyledButton } from './button.style'
import iconSet from '../../assets/font/selection.json';
import IcomoonReact from 'icomoon-react';


const Button = ({ label, icon, background }) => {
  return (
    <StyledButton icon={icon} backgroundColor={background}>
      <IcomoonReact iconSet={iconSet} color="#fff" size={16} icon="arrow-down" />{label}
    </StyledButton>
  )
}
export { Button }