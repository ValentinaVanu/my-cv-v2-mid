import React from 'react';
import { Icon } from '../icomoon';
import { CrossButton, StyledDescription, StyledInfoWrap, StyledLink, StyledLinkWrap, StyledTitle, StyledTitleWrap } from './connect-info.style';

const SocialWrapper = ({title, handleClose, description, link}) => {
  const iconProp = {
    color: "#fff",
    size: 18,
    icon: "cross",
  }
  return (
    <StyledInfoWrap>
      <StyledTitleWrap>
        <StyledTitle >{title}</StyledTitle>
      <CrossButton onClick={handleClose}>
        <Icon {...iconProp} />
      </CrossButton>
      </StyledTitleWrap>
      <StyledDescription>
        {description}
      </StyledDescription>
      <StyledLinkWrap>
        <StyledLink href={link} target="_blank" >{link}</StyledLink>
      </StyledLinkWrap>
    </StyledInfoWrap>
  )
}
export { SocialWrapper }
