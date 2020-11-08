import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Icon } from '../icomoon'
import {  BurgerMenu, MenuListWrap } from './menu.style'


const Menu = () => {
  const [menu, updateMenu] = useState ({})

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ('http://localhost:4567/menu')
          updateMenu(data)
        }
        getResult()
      } catch (error) {
        console.log('Error:', error)
      }
    },
    []
  )

  const {
    menuList = []
  } = menu

  const handleClick = menuList => {
    updateMenu(menuList)
  }

  const closeMenu = () => {
    updateMenu({})
  }

  return (
    <>
      <BurgerMenu>
        <Icon onClick={() => {handleClick(menu)}} icon="menu"/>
        <MenuListWrap>
          {menuList.map((section, key) => {
            return (
              <div key={key}>{section}</div>
              )
            })}
            <div onClick={closeMenu}><Icon  icon="cross"/><div> Close Menu</div></div>
        </MenuListWrap>
      </BurgerMenu>
    </>
  )
}
export { Menu }