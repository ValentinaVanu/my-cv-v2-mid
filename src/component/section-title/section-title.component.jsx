import React from 'react';
import { StyledSectionText, StyledSectionTitle } from './section-title.style';

const SectionTitle = ({ children }) => {
  return (
    <StyledSectionTitle>
      <StyledSectionText>{children}</StyledSectionText>
    </StyledSectionTitle>
  )
}

export { SectionTitle }