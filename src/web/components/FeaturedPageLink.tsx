import { Link } from 'gatsby'
import React from 'react'
import CSS from './FeaturedPagesLink.module.css'

interface Props {
  path: string
  title: string
}

const FeaturedPageLink = (props: Props) => {
  const { path, title } = props

  return (
    <Link to={path} className={CSS.root}>
      {title}
    </Link>
  )
}

export default FeaturedPageLink
