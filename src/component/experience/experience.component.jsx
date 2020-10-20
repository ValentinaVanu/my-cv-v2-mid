import React, { useEffect, useState } from 'react';
import { get } from 'axios' 
import { Column } from '../column';
import { SectionTitle } from '../section-title';
import { Button } from '../button';
import { CompanyName, EachJob, Info, JobDate, JobPic, JobTitle, JobWrapper, MoreInfo } from './experience.styled';
import { Chevron } from '../chevron'
import CodeTapPng from '../../assets/image/company-logo/codetap.png'
import ITSchoolPng from '../../assets/image/company-logo/it-schooll.png'

const imageList = [CodeTapPng, ITSchoolPng]

const Experience = () => {
  const [sectionTitle, updateSectionTitle] = useState("");
  const [jobList, updateJobList] = useState([])
  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ("http://localhost:4567/experience")
          updateSectionTitle(data.sectionTitle)
          updateJobList(data.jobList)
        }
        getResult()
      } catch (error) {
        console.log(`Error:`, error)
      }
    },
    []
  )

  const toggleThis = key => {
    updateJobList(
      jobList.map((job, cheie) => ({ ...job, isToggled: cheie !== key ? false : job.isToggled ? false : true }))
      // jobList.map((job, cheie) => ({ ...job, isToggled: cheie === key ? true : false }))
      // jobList.map((job, cheie) => cheie === key
      //   ? ({ ...job, isToggled: true })
      //   : ({ ...job, isToggled: false})
      // )
    )
  }
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
        {jobList.map(({ companyName, iconPath, jobTitle, startDate, endDate, isToggled = false }, key) => {
          return (
            <div>
              <EachJob key={companyName}>
                <JobPic><img src={imageList[key]} alt='img' width="40" /></JobPic>
                <JobTitle>{jobTitle}</JobTitle>
                <Chevron onClick={() => toggleThis(key) } />
                <CompanyName>{companyName}</CompanyName>
              </EachJob>
              {isToggled && (
                <div>
                  <MoreInfo>
                    <JobDate>{startDate} - {endDate}</JobDate>
                    <Info>
                      {/* {job.moreInfoList.map(moreInfo => {
                        return (
                          <div>{moreInfo}</div>
                        )
                      })} */}
                    </Info>
                  </MoreInfo>
                </div>
              )}
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