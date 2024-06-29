import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/create'}>Add new image</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
