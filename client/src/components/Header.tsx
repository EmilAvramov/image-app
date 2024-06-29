import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '../forms/SearchForm'

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <SearchForm />
      </div>
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
