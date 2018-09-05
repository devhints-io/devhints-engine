// @flow
import React from 'react'
import css from 'styled-jsx/css'
import { facebook, twitter } from 'devhints-icons'

/**
 * Props
 */

export type Props = {
  className?: string,

  // Page description; not available for home page
  description?: string,

  // URL of the current page
  permalink?: ?string
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
  if (!url) return null

  if (!description) description = 'The ultimate search tool'

  const tweetText = `${description} ${url}`

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`
  const twitterURL = `https://www.twitter.com/intent/tweet?text=${e(tweetText)}`

  return (
    <ul className={`social-list ${className || ''}`}>
      <style jsx>{STYLE}</style>

      <li className='facebook item hint--bottom' data-hint='Share on Facebook'>
        <a href={facebookURL} className='link' target='share'>
          <i className='icon' dangerouslySetInnerHTML={{ __html: facebook }} />
          <span className='text'>Facebook</span>
        </a>
      </li>

      <li className='twitter item hint--bottom' data-hint='Share on Twitter'>
        <a href={twitterURL} className='link' target='share'>
          <i className='icon' dangerouslySetInnerHTML={{ __html: twitter }} />
          <span className='text'>Twitter</span>
        </a>
      </li>
    </ul>
  )
}

/**
 * CSS
 */

export const STYLE = css`
  @import 'src/styles/common';

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .item {
    display: inline;
  }

  .icon :global(svg) {
    width: 16px;
    height: 16px;
  }

  a.link {
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-decoration: none;
  }

  .link,
  .link:visited {
    color: var(--text-mute);
  }

  .link:hover,
  .link:focus {
    color: var(--brand-a);
  }

  .text {
    display: none;
  }
`

export default SocialList
