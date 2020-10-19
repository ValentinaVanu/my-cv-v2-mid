import React from 'react';
import { StyledColumn } from './column.style';

const Column = ({ children, display, height }) => {
  return (
    <StyledColumn display={display} height={height} >
      {children}
    </StyledColumn>
  )
}

export { Column }