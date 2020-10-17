import React, { useEffect, useState } from 'react';
import { get } from 'axios' 
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { Chevron, CompanyName, EachJob, Info, JobDate, JobPic, JobTitle, JobWrapper, MoreInfo } from './experience.styled';


const Experience = () => {
  const [experience, updateExp] = useState ({
    loading: true
  })

  useEffect(
    ()=> {
      const getResult = async() => {
        const { data } = await get ("http://localhost:4567/experience")
        updateExp({
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
    jobList = [],
  } = experience
  return (
    <>
    <Column>
      <SectionTitle>{sectionTitle}</SectionTitle>
    </Column>
    <Column height={10} />
    <Column height={10} />
    <Column>
      <div>Hello</div>
    </Column>
    <Column height={10} />
    <Column>
      <JobWrapper >
        {jobList.map(job => {
          return (
            <EachJob>
              <JobPic><img src={job.iconPath}/></JobPic>
              <JobTitle>{job.jobTitle}</JobTitle>
              <Chevron>V</Chevron>
              <CompanyName>{job.companyName}</CompanyName>
              <MoreInfo>
                <JobDate>{job.startDate} - {job.endDate}</JobDate>
                <Info>moreInfoList</Info>
              </MoreInfo>
            </EachJob>
              )
            })}
      </JobWrapper>
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

export { Experience }