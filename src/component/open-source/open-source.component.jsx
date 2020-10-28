import React, { useEffect, useState } from 'react';
import get from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { EachStats, StatsWrapper, StyledTitle, StatsContent, CenteredIcon, GitTitle, GitLanguages, ColorBarWrap, PinkWrap, EachPink, CommitWrap, PercentWrap } from './open-source.styled';
import { Icon } from '../icomoon';

const OpenSource = () => {
  const [openSource, updateOpenSource] = useState ({})
  
  useEffect(
    () => {
      try {
        const getResult = async() => {
          const{ data } = await get ('http://localhost:4567/openSource')
          updateOpenSource({
            ...data,
            gitList: data.gitList.map(item => ({
              ...item,
              showMoreDetails: false,
            }))
          })
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

  // const toggleInfo = (title) => {
  //   updateOpenSource({
  //     ...openSource,
  //     gitList: openSource.gitList.map(item => ({
  //       ...item,
  //       showMoreDetails: item.title === title 
  //     }))
  //   })
  // }

  const toggleInfo = (title) => {
    updateOpenSource({
      ...openSource,
      gitList: openSource.gitList.map(item => ({...item, showMoreDetails: item.title !== title ? false : item.showMoreDetails ? false : true}))
    })
  }
  
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
                  {git.showMoreDetails && <div>
                    <PercentWrap>
                      {git.moreDetails.percentage.map(percent => {
                        return (
                          <div>
                            <ul>
                              <li>{percent}</li>
                            </ul>
                          </div>
                        )
                      })}
                    </PercentWrap>
                    <CommitWrap>
                      {git.moreDetails.commits.map(commit => {
                        return (
                          <CenteredIcon><Icon icon={commit.icon}/>{commit.text}</CenteredIcon>
                        )
                      })
                      }
                    </CommitWrap>
                  </div>}
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
                  <EachPink onClick={()=> toggleInfo(git.title)}>
                    <Icon icon="info"/>
                  </EachPink>
                  <EachPink><Icon icon="github"/> </EachPink>
                  <EachPink><Icon icon="youtube"/> </EachPink>
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