import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Icon } from '../icomoon'
import {  BurgerMenu, CloseSection, EachSection, MenuListWrap, StyleMenuIcon } from './menu.style'


const Menu = () => {
  const [menu, updateMenu] = useState ({})

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ('http://localhost:4567/menu')
          updateMenu({
            ...data,
            showMenu: false
          })
        }
        getResult()
      } catch (error) {
        console.log('Error:', error)
      }
    },
    []
  )

  const {
    menuList = [],
    showMenu
  } = menu
  console.log(menuList)

  const handleClick = () => {
    updateMenu({
      menuList,
      showMenu: true
    })

  }
  
  const closeMenu = () => {
    console.log('closeMenu')
    updateMenu({
      menuList,
      showMenu: false
    })
  }

  return (
    <>
      <BurgerMenu >
        <><Icon onClick={handleClick} icon="menu"/></>
        {showMenu && <MenuListWrap>
          {menuList.map((section, key) => {
            return (
              <EachSection key={key}>{section}</EachSection>
              )
            })}
            <CloseSection onClick={closeMenu}>
              <div> Close Menu</div>
              <StyleMenuIcon><Icon icon="cross"/></StyleMenuIcon>
            </CloseSection>
        </MenuListWrap>}
      </BurgerMenu>
    </>
  )
}
export { Menu }