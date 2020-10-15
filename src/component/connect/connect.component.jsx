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
  const [connect, updateConnect] = useState({})
  const [selected, updateSelected] = useState({})

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
    socialList = {}
  } = connect

  const handleClick = social => { 
    updateSelected(social) 
  }

  const closeTheModal = () => {
    updateSelected({})
  }
  
  return(
    <>
      <Column>
        <SectionTitle>Let's Connect</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column height={10} />
      <Column display="flex">
        <ConnectImg />
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column height={10} />
      <Column span={1}>
        <ButtonWrapper>
          {Object.values((socialList || {})).map(social => {
            return <SocialButton key={social.icon}  onClick={() =>{ handleClick(social)} }
             icon={social.icon} />
          } ) }
        </ButtonWrapper>
      </Column>
      <Column height={10} />
      <Column>
        {selected.hasOwnProperty('title') && <SocialWrapper
          { ...selected }
          handleClose={closeTheModal}
        />}
      </Column>
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