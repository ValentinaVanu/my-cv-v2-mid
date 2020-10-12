import React, { useEffect } from 'react';
import { useState } from 'react';
import { get } from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';

const Skill = () => {
  const[skill, updateSkill] = useState({})

  useEffect(
    () => {
      const getResult = async() => {
        const { data } = await get ("http://localhost:4567/skill")
        updateSkill(data)
      }
      getResult()
    },
    []
  )
  const {
    test,
    description,
    legend,
    itemList,
    icon,
    color,
    label
  } = skill
  console.log(legend && legend.title)
  return (
    <>
      <Column>
        <SectionTitle>Skills</SectionTitle>
      </Column>
      <Column>
        <div>{test}</div>
      </Column>
      <Column>
        <div>{legend && legend.title}</div>
      </Column>
    </>
  )
}
export{ Skill }