import React, { useEffect, useState } from 'react'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { get } from 'axios'
import { Button } from '../button'

const Recommendations = () => {
  const[recommendations, updateRecommendations] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ('http://localhost:4567/recommendations')
          updateRecommendations(data)
        }
        getResult()
      } catch (error) {
        console.log(`Error:`, error)
      }
    },
    []
  )
  const {
    sectionTitle
  } = recommendations

  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
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
export { Recommendations }