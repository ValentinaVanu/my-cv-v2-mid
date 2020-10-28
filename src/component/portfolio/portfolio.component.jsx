import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Column } from '../column'
import { SectionTitle } from '../section-title'

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
    </>
  )
}

export { Portfolio }