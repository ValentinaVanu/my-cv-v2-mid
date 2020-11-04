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

  return (
    <>
      <MenuWrap>
        <BurgerMenu>
          <Icon  icon="menu"/>
          <MenuListWrap>
            {menuList.map((section, key) => {
              return (
                <div key={key}>{section}</div>
              )
            })}
          </MenuListWrap>
        </BurgerMenu>

      </MenuWrap>
    </>
  )
}
export { Menu }