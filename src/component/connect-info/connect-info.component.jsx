import React from 'react';
import { Icon } from '../icomoon';
import { CrossButton, StyledInfoWrap, StyledTitle } from './connect-info.style';

const SocialWrapper = ({title}) => {
  const iconProp = {
    color: "#fff",
    size: 18,
    icon: "cross",
  }
  return (
    <StyledInfoWrap>
      <StyledTitle>
        {title}
      </StyledTitle>
      <CrossButton>
        <Icon {...iconProp} />
      </CrossButton>
    </StyledInfoWrap>
  )
}
export { SocialWrapper }
