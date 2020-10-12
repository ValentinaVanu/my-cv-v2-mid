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
  console.log(connect)
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

  // const title = "github"

  const {
    test,
    socialList 
  } = connect
  // console.log(Object.values((socialList || {})))
  // if(socialList){
  //   console.log(Object.keys(socialList))
  // }


      // WORK ON SET AND USE EFFECT

  // const HandleClick = () => {
  //   const [click, setClick] = useState({})

  //   useEffect(

  //   )
  // }





  const handleClick = (title) => console.log("hello", title)
  const title = Object.keys((socialList || {}))
  // console.log(Object.keys((socialList || {})))
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
          {Object.values((socialList || {})).map(({icon, description, link, title}, key) => {
            // console.log( description, link, title, key)
            return <SocialButton onClick={() => handleClick(title)} icon={icon} />
          } ) }
        </ButtonWrapper>
      </Column>
      <Column height={10} />
      <Column>
        <SocialWrapper title={title}>
          
        </SocialWrapper>
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