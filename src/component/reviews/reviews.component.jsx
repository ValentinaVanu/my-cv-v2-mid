import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { Button } from '../button'

const Reviews = () => {
  const[reviews, updateReviews] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ('http://localhost:4567/reviews')
          updateReviews(data)
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
  } = reviews
  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
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
export { Reviews }