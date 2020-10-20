import React from 'react'
import { Icon } from '../icomoon'
import { StyledChevron } from './chevron.style'

const Chevron = ({ onClick }) => {
  return (
    <StyledChevron onClick={onClick}>
      <Icon icon="arrow-down"/>
    </StyledChevron>
  )
}

export { Chevron }