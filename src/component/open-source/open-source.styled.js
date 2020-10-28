import styled from 'styled-components'
import { getBackgroundValue } from '../button/button.style'


export const LinkWrap = styled.div `
  background-color: #1875F0;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  border-radius: 20px;
`

export const DescriptionWrap = styled.div `
  border-top: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #808080;
  padding: 22px;
`

export const PercentWrap = styled.div `
  border-top: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #808080;
  /* padding: 10px; */

`

export const CommitWrap = styled.div `
  border-top: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #808080;
`

export const EachPink =styled.div `
  background-color: #FF006D;
  color: #fff;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`

export const PinkWrap = styled.div `
  display: flex;
  float: right;
`

export const getWidthValue = string => {
  const defaultValue = '100%';
  const widthList = {
    Rhtml: "5%",
    Rcss: "7%",
    Rscss: "10%",
    RjavaScript: "78%",
    PjavaScript : "49%",
    Phtml: "41%",
    Pcss: "10%",
    Jhtml: "25%",
    Jcss: "5%",
    Jscss: "26%",
    JjavaScript: "31%",
    Jpug: "13%"
  }
  return widthList.hasOwnProperty(string)
    ? widthList[string]
    : defaultValue
} 

export const ColorBarWrap = styled.div `
  display: inline-block;
  background-color:${({ background }) => getBackgroundValue(background)};
  height: 5px;
  width: ${({width}) => getWidthValue(width)};
`

export const GitLanguages = styled.div `
  color: #707070;
  font-style: italic;
  padding: 0px 20px 12px 20px;
`

export const GitTitle = styled.div `
  padding: 20px 0px 0px 20px;
  font-size: 13px;
  line-height: 30px;
  font-weight: bold;
  color: #707070;
`

export const CenteredIcon = styled.div `
  padding: 5px 10px;
`

export const StatsContent = styled.div `
  padding: 5px 10px;
  font-size: 13px;
  color: #808080;
  font-weight: bold;
  line-height: 22px;
`

export const EachStats = styled.div `
  border-bottom: 2px solid #808080;
  display: flex;
  align-items: center;
`

export const StatsWrapper = styled.div `
  border-radius: 6px;
  font-size: 14px;
  border: 2px solid #808080;
`

export const StyledTitle = styled.div `
  font-size: 22px;
  line-height: 30px;
  color: #707070;
  font-weight: bold;
`