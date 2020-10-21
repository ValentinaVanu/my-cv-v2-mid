import React, { useEffect, useState } from 'react';
import get from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';

const OpenSource = () => {
  const [openSource, updateOpenSource] = useState ({})
  
  useEffect(
    () => {
      try {
        const getResult = async() => {
          const{ data } = await get ('http://localhost:4567/openSource')
          updateOpenSource(data)
        }
        getResult()
      } catch (error) {
        console.log(`Error:`, error)
      }
    },
    []
  )
  const {
    sectionTitle = ""
  } = openSource

  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Column>
    </>
  )
}

export { OpenSource }