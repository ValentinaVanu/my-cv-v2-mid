import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import { Avatar, EachContact, RecomContact, RecommText } from '../recommendations/recommendations.styled'
import { ReviewDate, ReviewName } from './reviews.styled'
import Chloe from '../../assets/image/recommendations/chloe.JPG'
import ChloeSecond from '../../assets/image/recommendations/chloe2.jpg'
import ChloeThird from '../../assets/image/recommendations/chloe3.jpg'


const reviewImgList = [Chloe, ChloeSecond, ChloeThird]

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
    sectionTitle,
    reviewList = []
  } = reviews
  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        {reviewList.map((review, key )=> {
          return (
            <div>
              <EachContact>
                <Avatar src={reviewImgList[key]} alt="img" width="50" />
                <RecomContact>
                  <ReviewName>{review.name}</ReviewName>
                  <ReviewDate>{review.date}</ReviewDate>
                </RecomContact>
              </EachContact>
              <RecommText>{review.text}</RecommText>
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
export { Reviews }