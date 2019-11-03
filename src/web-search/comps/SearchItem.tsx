import { Link } from 'gatsby'
import React from 'react'
import CSS from './SearchItem.module.css'

import { SearchPageItem } from '../../types/types'

export interface Props {
  page: SearchPageItem
}

const SearchItem = ({ page }: Props) => {
  return (
    <li className={CSS.root}>
      <Link to={page.nodePath} className={CSS.link}>
        <strong className={CSS.path}>{page.nodePath}</strong>
        <small className={CSS.title}>{page.title}</small>
        <small className={CSS.category}>{page.category}</small>
      </Link>
    </li>
  )
}

export default SearchItem
