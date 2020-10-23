import styled from 'styled-components'
import { getBackgroundValue } from '../button/button.style'


export const ColorBarWrap = styled.div `
  display: inline-block;
  background-color: ${({background}) => getBackgroundValue(background)};
  height: 5px;
`

export const GitLanguages = styled.div `
  color: #707070;
  font-style: italic;
  padding: 0px 20px 12px 20px;
`

export const GitTitle = styled.div `
  padding: 20px 0px 0px 20px;
  font-size: 13px;
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
  line-height: 30px;
  border: 2px solid #808080;
`

export const StyledTitle = styled.div `
  font-size: 22px;
  line-height: 30px;
  color: #707070;
  font-weight: bold;
`