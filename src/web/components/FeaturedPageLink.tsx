import { Link } from 'gatsby'
import React from 'react'

const FeaturedPageLink = props => {
  const { path, title } = props

  return <Link to={path}>{title}</Link>
}

export default FeaturedPageLink
