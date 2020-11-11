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
  console.log(menuList)
  debugger

  const handleClick = menuList => {
    updateMenu(menuList)
  }
  
  const closeMenu = () => {
    updateMenu({})
  }
  console.log(closeMenu)
  return (
    <>
      <BurgerMenu onClick={() => handleClick(menuList)}>
        <Icon icon="menu"/>
        {menu.hasOwnProperty('Welcome') && <MenuListWrap>
          {menuList.map((section, key) => {
            return (
              <div key={key}>{section}</div>
              )
            })}
            <div >
              <div> Close Menu</div>
              <Icon handleClose={closeMenu} icon="cross"/>
            </div>
        </MenuListWrap>}
      </BurgerMenu>
    </>
  )
}
export { Menu }