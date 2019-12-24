import cn from 'classnames'
import React from 'react'
import { facebook, twitter } from '../web-icons'
import CSS from './SocialList.module.css'

/**
 * Props
 */

export interface Props {
  className?: string

  // Page description; not available for home page
  description?: string

  // URL of the current page
  permalink?: string | null
}

/**
 * List of social media links (Facebook, Twitter).
 *
 * @example
 *     <SocialList
 *       permalink='https://my.page.com/'
 *       description='Vim' />
 */

export const SocialList = ({ className, description, permalink }: Props) => {
  const e = encodeURIComponent
  const url = permalink

  // Don't draw anything in server-side rendering
  if (!url) {
    return null
  }

  if (!description) {
    description = 'The ultimate search tool'
  }

  const tweetText = `${description} ${url}`

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`
  const twitterURL = `https://www.twitter.com/intent/tweet?text=${e(tweetText)}`

  return (
    <ul className={cn(CSS.root, className || '')}>
      <li
        className={cn(CSS.item, 'Facebook', 'hint--bottom')}
        data-hint='Share on Facebook'
      >
        <a href={facebookURL} className={CSS.link} target='share'>
          <i
            className={CSS.icon}
            dangerouslySetInnerHTML={{ __html: facebook }}
          />
          <span className={CSS.text}>Facebook</span>
        </a>
      </li>

      <li
        className={cn(CSS.item, 'twitter', 'hint--bottom')}
        data-hint='Share on Twitter'
      >
        <a href={twitterURL} className={CSS.link} target='share'>
          <i
            className={CSS.icon}
            dangerouslySetInnerHTML={{ __html: twitter }}
          />
          <span className={CSS.text}>Twitter</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialList
