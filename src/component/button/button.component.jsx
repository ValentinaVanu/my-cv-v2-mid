import React from 'react'
import { StyledButton } from './button.style'

const Button = ({ label, icon, background }) => {
  return (
    <StyledButton icon={icon} backgroundColor={background}>
      {label}
    </StyledButton>
  )
}
export { Button }