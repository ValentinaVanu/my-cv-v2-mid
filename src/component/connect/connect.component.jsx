import React, { useEffect, useState } from 'react';
import { Button } from '../button';
import { Column } from '../column';
import { ConnectImg } from '../connect-img';
import { SectionTitle } from '../section-title';
import { get } from 'axios';
import { ButtonWrapper } from './connect.style';
import { SocialButton } from '../connect-social'
import { SocialWrapper } from '../connect-info';

const Connect = () => {
  const[connect, updateConnect] = useState({})

  useEffect(
    ()=> {
      const getResult = async() => {
        const { data } = await get ("http://localhost:4567/connect")
        updateConnect(data)
      }
      getResult()
    },
    []
  )

  const {
    test,
    socialList,
    // codetap,
    // title,
    // closeIcon,
    // description,
    // link,
    // github,
    // linkedin,
    // stackoverflow,
    // codewars,
    // udemy,
    // facebook,
    // skype,
    // instagram,
    // twitter
  } = connect
  console.log(socialList && socialList.codetap.title)
  return(
    <>
      <Column>
        <SectionTitle>Let's Connect</SectionTitle>
      </Column>
      <Column height={10} />
      <Column>
        <div>{test}</div>
      </Column>
      <Column height={10} />
      <Column display="flex">
        <ConnectImg />
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column span={1}>
        <ButtonWrapper>
          <SocialButton icon="codetap" />
          <SocialButton icon="github" />
          <SocialButton icon="linkedin" />
          <SocialButton icon="stackoverflow" />
          <SocialButton icon="codewars" />
          <SocialButton icon="udemy" />
          <SocialButton icon="facebook" />
          <SocialButton icon="skype" />
          <SocialButton icon="instagram" />
          <SocialButton icon="twitter" />
        </ButtonWrapper>
      </Column>
      <Column height={10} />
      <Column>
        <SocialWrapper>{socialList && socialList.codetap.title}</SocialWrapper>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column display="flex">
        <Button 
          icon="arrow-down"
          background="green"
        />
      </Column>
      <Column height={10} />
    </>
  )
}
export{ Connect }