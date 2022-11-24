import React from 'react'
import { mobileMenu } from '@/components/helpers/data/menuData'
import Theme from '@/components/theme/Theme'

const HeaderMenu = ({ handleClickNav, closeOnClick }: any) => {
  return (
    <ul>
      {mobileMenu.map((item) => (
        <li key={item.id}>
          <a href={item.href} onClick={handleClickNav}>
            {item.title}
          </a>
        </li>
      ))}
      <li onClick={closeOnClick}>
        <Theme />
      </li>
    </ul>
  )
}

export default HeaderMenu
