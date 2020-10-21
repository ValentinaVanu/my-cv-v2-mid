import React, { useEffect, useState } from 'react';
import get from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { StyledTitle } from './open-source.styled';
import { Icon } from '../icomoon';

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
    sectionTitle,
    statsTitle,
    statsList = []
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
        {statsList.map(stats => {
          return(
            <div>
              <Icon icon={stats.icon} />
              <div>{stats.content.map( content => {
                return (
                  <div>{content}</div>
                )
              })}</div>
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

export { OpenSource }