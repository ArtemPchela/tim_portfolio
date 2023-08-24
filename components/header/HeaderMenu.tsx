import React from 'react'
import { mobileMenu } from '@/components/helpers/data/menuData'

const HeaderMenu = ({ handleClickNav }: any) => {
  return (
    <ul>
      {mobileMenu.map((item) => (
        <li key={item.id}>
          <a href={item.href} onClick={handleClickNav}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMenu
