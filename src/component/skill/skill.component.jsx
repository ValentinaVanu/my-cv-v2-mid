import React, { useEffect } from 'react';
import { useState } from 'react';
import { get } from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { LegendList, StyledIcon, StyledLabel, StyledLi, SkillTitle, StyledNumber, Description, LegendListGrid } from './skill.style';
import { Icon } from '../icomoon';
import { SkillList } from '../skillList';

const Skill = () => {
  const [skill, updateSkill] = useState({
    sectionTitle: "",
    legend: {},
    frontEnd: {},
    backEnd: {},
    Others: {},
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
    },
    frontEnd: {
      frontTitle = "",
      skillList = []
    },
    backEnd: {
      backTitle = "",
      backSkillList = []
    },
    Others: {
      othersTitle = "",
      otherSkillList = []
    },
    description
  } = skill
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
          <LegendListGrid>
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
          </LegendListGrid>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        <SkillTitle>{frontTitle}</SkillTitle>
      </Column>
      <Column height={10} />
      <Column>
        <div>
          {skillList.map(skill => {
            return (
            <SkillList key={skill.label} background={skill.color} label={skill.label} />
            )
          })}
        </div>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column>
        <SkillTitle>{backTitle}</SkillTitle>
      </Column>
      <Column height={10} />
      <Column>
          <div>
            {backSkillList.map(back => {
              return (
              <SkillList key={back.label} background={back.color} label={back.label} />
            )})}
          </div>
      </Column>
      <Column height={10} />
      <Column>
        <SkillTitle>{othersTitle}</SkillTitle>
      </Column>
      <Column height={10} />
      <Column>
        {
          otherSkillList.map(other => {
            return (
              <SkillList key={other.label} background={other.color} label={other.label}/>
            )
          })
        }
      </Column>
      <Column height={10} />
      <Column>
        <Description>
          {description}
        </Description>
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
export{ Skill }