import React from 'react';
import { StyledColumn } from './column.style';

const Column = ({ children }) => {
  return (
    <StyledColumn>
      {children}
    </StyledColumn>
  )
}

export { Column }