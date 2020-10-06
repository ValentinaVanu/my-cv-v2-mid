import React from 'react'
import { Icon } from '../icomoon'
import { StyledButton } from './button.style'


const Button = ({ label, icon, background }) => {
  const getIcon = icon => icon ? icon : "arrow-down"

  const iconPropList = {
    color: "#fff",
    size: 18,
    icon: getIcon(icon)
  }
  return (
    <StyledButton icon={icon} backgroundColor={background}>
      <Icon {...iconPropList} /> {label}
    </StyledButton>
  )
}
export { Button }