import styled from 'styled-components'


export const RecommWrap = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const RecommJob = styled.div `
  font-size: 14px;
  color: #808080;
`

export const RecommName = styled.div `
  font-size: 22px;
  color: #808080;
  line-height: 30px;
  font-weight: normal;
`

export const EachContact = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 21px;
`

export const RecommText = styled.div `
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 14px;
  color: #808080;
  padding: 20px;
  line-height: 30px;
  background-color: #fff;
  font-weight: medium;
  position: relative;
  border-radius: 6px;

  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
    width: 15px;
    height: 15px;
    top: -7px;
    left: 15px;
    clip-path: polygon(-6px -6px,100% 0, 0 100%);
    transform: rotate(45deg);
  }
`

export const RecomContact = styled.div `
  display: flex;
  flex-direction: column;
  padding: 10px;

`

export const Avatar = styled.img `
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 2px solid rgba(0, 0, 0, 0.06);
`
export const EachRecom = styled.div `
  padding: 10px;

`