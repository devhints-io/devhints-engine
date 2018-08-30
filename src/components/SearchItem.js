// @flow

import React from 'react'
import Link from 'gatsby-link'

import type { SearchPageItem } from '../types'

export type Props = {
  page: SearchPageItem
}

const SearchItem = ({ page }: Props) => {
  return (
    <li>
      <Link to={page.nodePath}>
        <strong>{page.nodePath}</strong>
        <small>{page.title}</small>
        <small>{page.category}</small>
      </Link>
    </li>
  )
}

export default SearchItem
