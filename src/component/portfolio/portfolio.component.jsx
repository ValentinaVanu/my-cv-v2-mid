import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Column } from '../column'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import CvJunior from '../../assets/image/portfolio-img/cv-v2-junior.png'
import CvStarter from '../../assets/image/portfolio-img/cv-v2-starter.png'
import PugStarter from '../../assets/image/portfolio-img/pug-starter.png'
import { EachProject, PortfolioTitle, ProjectImage, RecentLanguages, RecentTitle } from './portfolio.style'
import { Icon } from '../icomoon'
import { EachPink, PinkWrap } from '../open-source/open-source.styled'

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
    sectionTitle = "",
    recentTitle = "",
    recentList,
    olderTitle,
    olderList = []
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
        <PortfolioTitle>
          {recentTitle}
        </PortfolioTitle>
      <Column height={10} />
      <Column height={10} />
      </Column>
      <Column>
        {Object.values((recentList || {})).map((recent, key ) => {
          return (
            <div>
              <EachProject key={recent.title}>
                <RecentTitle>{recent.title}</RecentTitle>
                <RecentLanguages>{recent.languages}</RecentLanguages>
              </EachProject>
              <ProjectImage>
                <img src={imgList[key]} alt='img' width='100%' />
              </ProjectImage>
              <PinkWrap>
                <EachPink>
                  <Icon icon="earth" />
                </EachPink>
                <EachPink>
                  <Icon icon="github"/>
                </EachPink>
              </PinkWrap>
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
            </div>
          )
        })}
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column height={10} />
      <Column>
        <PortfolioTitle>{olderTitle}</PortfolioTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        {olderList.map((older, key) =>{
            return (
              <div>
                <EachProject key={key}>
                  <RecentTitle>{older.title}</RecentTitle>
                  <RecentLanguages>{older.languages}</RecentLanguages>
                </EachProject>
                <ProjectImage>
                  <img src={imgList[key]} alt='Img' width='100%' />
                </ProjectImage>
                <PinkWrap>
                  <EachPink>
                    <Icon icon = "earth" />
                  </EachPink>
                  <EachPink>
                    <Icon icon = "github" />
                  </EachPink>
                </PinkWrap>
              </div>
            )
          })}
      </Column>
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