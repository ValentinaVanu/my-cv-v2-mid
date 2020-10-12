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
    test
  } = skill
  console.log(test)
  return (
    <>
      <Column>
        <SectionTitle>Skills</SectionTitle>
      </Column>
      <Column>
        <div>{test}</div>
      </Column>
    </>
  )
}
export{ Skill }