import { Link } from 'gatsby'
import React from 'react'

interface Props {
  path: string
  title: string
}

const FeaturedPageLink = (props: Props) => {
  const { path, title } = props

  return <Link to={path}>{title}</Link>
}

export default FeaturedPageLink
