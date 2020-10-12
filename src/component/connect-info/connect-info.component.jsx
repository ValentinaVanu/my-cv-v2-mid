import React from 'react';
import { Icon } from '../icomoon';
import { CrossButton, StyledInfoWrap } from './connect-info.style';

const SocialWrapper = ({title}) => {
  const iconProp = {
    color: "#fff",
    size: 18,
    icon: "cross",
  }
  return (
    <StyledInfoWrap>
      <CrossButton>
        <Icon {...iconProp} />
        {title}
      </CrossButton>
    </StyledInfoWrap>
  )
}
export { SocialWrapper }
