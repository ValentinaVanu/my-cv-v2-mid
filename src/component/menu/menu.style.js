import styled from 'styled-components'



export const StyledBurger = styled.div `
  padding: 5px 8px;
`

export const CloseSection = styled.div `
  display: flex;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #FF006D;
    color: #fff;
    cursor: pointer;
  }
`

export const StyleMenuIcon = styled.div `
  cursor: pointer;
  padding-right: 50px;
`

export const EachSection = styled.div `
  padding: 4px 14px;
  &:hover {
    background-color: #FF006D;
    color: #fff;
    cursor: pointer;
  }
`
export const MenuListWrap = styled.div `
  /* padding: 10px; */
  direction: rtl;
`
export const BurgerMenu = styled.div `
  position: fixed;
  bottom: 80px;
  right: 40px;
  background-color: #fff;
  border: 2px solid #707070;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
  border-radius: 6px;
  cursor: pointer;

  
  @media only screen and (min-width: 992px) {
    padding: 20px;
    bottom: 150px;
    right: 50px;
    opacity: 0.8;
}
`