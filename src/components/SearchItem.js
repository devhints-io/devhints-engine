// @flow

import React from 'react'

import type { SearchPageItem } from '../types'

export type Props = {
  page: SearchPageItem
}

const SearchItem = ({ page }: Props) => {
  return (
    <li>
      <a href='#'>{page.title}</a>
      <span>{JSON.stringify(page)}</span>
    </li>
  )
}

export default SearchItem
