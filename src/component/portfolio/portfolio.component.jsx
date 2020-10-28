import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import CvJunior from '../../assets/image/portfolio-img/cv-v2-junior.png'
import CvStarter from '../../assets/image/portfolio-img/cv-v2-starter.png'
import PugStarter from '../../assets/image/portfolio-img/pug-starter.png'

const imgList = [CvJunior, CvStarter, PugStarter]

const Portfolio = () => {
  const [portfolio, updatePortfolio] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ('http://localhost:4567/portfolio')
          updatePortfolio(data)
        }
        getResult()
        
      } catch (error) {
        console.log('Error:', error )
      }
    },
    []
  )
  const {
    sectionTitle = ""
  } = portfolio
  return (
    <>
      <Column>
        <SectionTitle>
          {sectionTitle}
        </SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
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

export { Portfolio }