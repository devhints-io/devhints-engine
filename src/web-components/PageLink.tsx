import { Link } from 'gatsby'
import React from 'react'
import { unpath } from '../helpers'
import { SiteLink } from '../types/types'
import AttributePeg from './AttributePeg'
import CSS from './PagesList.module.css'

const PageLink = ({
  link,
  updatedLabel
}: {
  link: SiteLink
  updatedLabel: string
}) => (
  <Link to={link.path} key={link.path} className={CSS.article + ' ' + CSS.item}>
    <span className={CSS.info}>
      <code className={CSS.slug}>{unpath(link.path)}</code>{' '}
      <AttributePeg hint={updatedLabel} />
      <span className={CSS.title}>{link.title}</span>
    </span>
  </Link>
)

export default PageLink
