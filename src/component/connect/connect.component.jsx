import React from 'react';
import { Button } from '../button';
import { Column } from '../column';
import { ConnectImg } from '../connect-img';
import { SectionTitle } from '../section-title';

const Connect = () => {
  return(
    <>
      <Column>
        <SectionTitle>Let's Connect</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column display="flex">
        <ConnectImg
          img="cv-me"
        />
      </Column>
      <Column height={10} />
      <Column display="flex">
        <Button 
          label= "V"
          icon="arrow"
          background="green"
        />
      </Column>
      <Column height={10} />
    </>
  )
}
export{ Connect }