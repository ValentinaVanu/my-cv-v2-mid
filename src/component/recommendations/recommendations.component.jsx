import React, { useEffect, useState } from 'react'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { get } from 'axios'
import { Button } from '../button'
import { Avatar, EachContact, EachRecom, RecommText, RecomContact, RecommName, RecommJob } from './recommendations.styled'
import Chloe from '../../assets/image/recommendations/chloe.JPG'
import ChloeSecond from '../../assets/image/recommendations/chloe2.jpg'
import Marian from '../../assets/image/recommendations/marian.jpg'


const avatarList = [Chloe, ChloeSecond, Marian]

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
    sectionTitle,
    recommendationsList = []
  } = recommendations

  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        {recommendationsList.map((each, key) => {
          return (
            <div>
              <EachRecom>
                <EachContact>
                  <Avatar src={avatarList[key]} alt='img' width="50"/>
                  <RecomContact>
                    <RecommName>{each.name}</RecommName>
                    <RecommJob>{each.jobTitle}</RecommJob>
                  </RecomContact>
                </EachContact>
                <RecommText>{each.recomText}</RecommText>
              </EachRecom>
              <Column height={10} />
              <Column height={10} />
              <Column height={10} />
            </div>
            )
        })}
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
export { Recommendations }