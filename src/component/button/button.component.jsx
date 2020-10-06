import React from 'react'
import { Icon } from '../icomoon'
import { StyledButton } from './button.style'

const Button = ({ label, icon, background }) => {
  const getIcon = icon => icon ? icon : "download"
  const iconPropList = {
    color: "#fff",
    size: 16,
    icon: getIcon(icon)
  }
  return (
    <StyledButton icon={icon} backgroundColor={background}>
      <Icon {...iconPropList} /> {label}
    </StyledButton>
  )
}
export { Button }