import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Icon } from '../icomoon'
import { MenuWrap, BurgerMenu, MenuListWrap } from './menu.style'


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

  const handleClick = menuList  => {
    updateMenu(menuList)
  }

  const closeMenu = () => {
    updateMenu([])
  }

  return (
    <>
      <MenuWrap>
        <BurgerMenu onClick={() => {handleClick(menuList)}}>
          <Icon  icon="menu"/>
          <MenuListWrap>
            {menuList.map((section, key) => {
              return (
                <div key={key}>{section}</div>
                )
              })}
              <div><Icon icon="cross"/> Close Menu</div>
          </MenuListWrap>
        </BurgerMenu>

      </MenuWrap>
    </>
  )
}
export { Menu }