import React from 'react';
import { Info, JobDate } from './expInfo.style';

const MoreInfo = (startDate, endDate) => {
  return (
    <div>
      <JobDate>{startDate} - {endDate}</JobDate>
      <Info>job.moreinfoList.map()</Info>
    </div>
  )
}
export { MoreInfo }