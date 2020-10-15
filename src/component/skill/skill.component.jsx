import React, { useEffect } from 'react';
import { useState } from 'react';
import { get } from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';

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
      <Column>
        {skill.loading && (
          <div>Loading Amazing Data</div>
        )}
        {!skill.loading && (
          <div>
            {title}
          </div>
        )}
      </Column>
      <Column>
          {itemList.map(item => {
            return (<div key={item.icon}>{item.icon}</div>)})}
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