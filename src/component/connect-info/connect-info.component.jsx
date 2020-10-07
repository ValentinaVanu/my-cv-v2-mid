import React from 'react';
import { Icon } from '../icomoon';
import { CrossButton, StyledInfoWrap } from './connect-info.style';

const SocialWrapper = () => {
  const iconProp = {
    color: "#fff",
    size: 18,
    icon: "cross",
  }
  return (
    <StyledInfoWrap>
      <CrossButton>
        <Icon {...iconProp} />asdads
      </CrossButton>
    </StyledInfoWrap>
  )
}
export { SocialWrapper }
