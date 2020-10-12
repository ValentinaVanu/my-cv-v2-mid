import React from 'react';
import { Icon } from '../icomoon';
import {  StyledSocialBtn } from './connect-social.style';

const SocialButton = ({ icon, label }) =>{
  const socialIcon = icon => icon ? icon : "codetap";
  const socialPropList = {
    color: "#fff",
    style: {
      width: 32,
      height: 32,
    },
    icon: socialIcon(icon)
  }
  return(
    <StyledSocialBtn>
      <Icon {...socialPropList}/> {label}
    </StyledSocialBtn>
  )
}
export { SocialButton }