import React, { useEffect, useState } from 'react';
import { get } from 'axios' 
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { CompanyName, EachJob, Info, JobDate, JobPic, JobTitle, JobWrapper, MoreInfo } from './experience.styled';
import { Chevron } from '../chevron'


const Experience = () => {
  const [isToggled, setToggled] = useState({})
  const [experience, updateExp] = useState ({
    loading: true
  })

  useEffect(
    ()=> {
      const getResult = async() => {
        const { data } = await get ("http://localhost:4567/experience")
        updateExp({
          ...data ,
          loading: false
        })
      }
      getResult()
    },
    []
  )
  const {
    sectionTitle,
    jobList = [
      moreInfoList = []
    ],
  } = experience

  const toggle = (job) => {
    setToggled(job)
  }
//   const chevronClick = job =>{
//     selected ? updateSelected(job) : updateSelected({});
// }
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
            <div>
              <EachJob key={job.companyName}>
                <JobPic><img src={job.iconPath} alt='img' /></JobPic>
                <JobTitle>{job.jobTitle}</JobTitle>
                <Chevron onClick={() => { toggle(job)} } />
                <CompanyName>{job.companyName}</CompanyName>
              </EachJob>
              <div>
                {isToggled.hasOwnProperty('startDate') &&
                  <MoreInfo>
                    <JobDate>{job.startDate} - {job.endDate}</JobDate>
                    <Info>
                      {moreInfoList.map(moreInfo => {
                        return (
                          <div>{moreInfo}</div>
                        )
                      })}
                    </Info>
                  </MoreInfo> }
              </div>
            </div>
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