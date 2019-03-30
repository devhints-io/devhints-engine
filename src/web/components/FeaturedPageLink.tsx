import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title: string
  path: string
}

const FeaturedPageLink = (props: Props) => {
  const { title, path } = props
  return <Link to={path}>{title}</Link>
}

export default FeaturedPageLink
