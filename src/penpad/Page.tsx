import React from 'react'
import { Page as PageType } from './types'

interface Props {
  page: PageType
}

const Page = ({ page }: Props) => {
  // Extract the first element if it was defined as a tuple
  const Component = Array.isArray(page) ? page[0] : page

  // @ts-ignore
  return <Component />
}

export default Page
