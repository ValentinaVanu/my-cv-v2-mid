import React, { useEffect } from 'react';
import { useState } from 'react';
import { get } from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { LegendList, StyledIcon, StyledLabel, StyledLi, SkillTitle, StyledNumber } from './skill.style';
import { Icon } from '../icomoon';

const Skill = () => {
  const [skill, updateSkill] = useState({
    sectionTitle: "",
    legend: {},
    loading: true,
  })

  useEffect(
    ()=> {
      const getResult = async() => {
        const { data } = await get ("http://localhost:4567/skill")
        updateSkill({
          ...data,
          loading: false
        })
      }
      getResult()
    },
    []
  )
  const {
    sectionTitle,
    legend: {
      title = "",
      itemList = [],
    }
  } = skill
  console.log(itemList, skill)
  return (
    <>
      <Column>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        {skill.loading && (
          <div>Loading Amazing Data</div>
        )}
        {!skill.loading && (
          <SkillTitle>
            {title}
          </SkillTitle>
        )}
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
          <LegendList>
            {itemList.map(item => {
              return (
                // <StyledUl key={item.icon}>
                  <StyledLi key={item.icon}>
                    <StyledIcon >
                      <Icon color={item.color} icon={item.icon} />
                    </StyledIcon>< StyledLabel>{item.label}</ StyledLabel><StyledNumber>{item.number}</StyledNumber>
                  </StyledLi>
                // </StyledUl>
              )})}
          </LegendList>
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
export{ Skill }