import React, { useEffect, useState } from 'react';
import get from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { EachStats, StatsWrapper, StyledTitle, StatsContent, CenteredIcon, GitTitle, GitLanguages, ColorBarWrap, PinkWrap, EachPink, CommitWrap } from './open-source.styled';
import { Icon } from '../icomoon';

const OpenSource = () => {
  const [openSource, updateOpenSource] = useState ({})
  // const [statsList, updateStatsList] = useState ({})
  
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
    sectionTitle,
    statsTitle,
    statsList = [],
    gitTitle,
    gitList = []
  } = openSource

  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        <StyledTitle>{statsTitle}</StyledTitle>
      </Column>
      <Column>
        <StatsWrapper>
          {statsList.map(stats => {
            return(
              <EachStats key={stats.icon}>
                <CenteredIcon>
                  <Icon icon={stats.icon} />
                </CenteredIcon>
                <div>
                  {stats.content.map( content => {
                  return (
                    <StatsContent>{content}</StatsContent>
                  )
                })}
                </div>
              </EachStats>
            )
          })}
        </StatsWrapper>
      <Column height={10} />
      <Column height={10} />
      <Column height={10} />
      <Column>
          <StyledTitle>{gitTitle}</StyledTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
          <div>
            {gitList.map( git => {
              return (
                <Column>
                <StatsWrapper key={git.title}>
                  <GitTitle>{git.title}</GitTitle>
                  <GitLanguages>{git.languages}</GitLanguages>
                  <div>
                    {Object.values((git.moreDetails || {})).map(details => {
                      return (
                        <div>{details.commits}</div>
                      )
                    })
                    }
                  </div>
                  {/* <CommitWrap>
                    {git.commits.map(each => {
                      return (
                        <CenteredIcon><Icon icon ={each.icon}/>{each.text}</CenteredIcon>
                      )
                    })}
                  </CommitWrap> */}
                    {git.colorBar.map(bar => {
                      return (
                        <ColorBarWrap 
                          background={bar.color}
                          width={bar.percent}
                        />
                        )
                      })}
                </StatsWrapper>
                <PinkWrap>
                  <EachPink> <Icon icon="info"/> </EachPink>
                  <EachPink> <Icon icon="github"/> </EachPink>
                  <EachPink> <Icon icon="youtube"/> </EachPink>
                </PinkWrap>
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
                <Column height={10} />
                </Column>
              )
            })}
          </div>
      </Column>
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

export { OpenSource }