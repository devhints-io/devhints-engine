/* @flow */
import Link from 'gatsby-link'
import React from 'react'
import css from 'styled-jsx/css'
import { mdArrowBack as arrowLeft } from 'devhints-icons'

export const BackButton = () => {
  return (
    <span>
      <Link className='home back-button' to='/'>
        <i className='icon' dangerouslySetInnerHTML={{ __html: arrowLeft }} />
      </Link>
      <style jsx>{STYLE}</style>
    </span>
  )
}

export const STYLE = css`
  @import 'src/web/styles/common';

  :global(.back-button) {
    text-decoration: none;
    width: 48px;
    height: 48px;
    line-height: calc(48px - 2px);
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: all 100ms linear;

    /* Smaller on mobile */
    @media (max-width: 480px) {
      width: 32px;
      height: 32px;
      line-height: calc(32px - 2);
    }

    /* Colors */
    &,
    &:visited {
      color: var(--text-mute);
    }

    /* Active */
    &:hover,
    &:focus {
      color: white;
      background: color-mod(var(--brand-b) alpha(4%));
      opacity: 1;
    }

    &:hover .icon,
    &:focus .icon {
      color: var(--brand-a);
    }

    /* Icon: smaller on mobile */
    @media (max-width: 480px) {
      &::before {
        font-size: 16px;
      }
    }
  }

  .icon {
    transition: color 100ms linear;
  }

  .icon :global(svg) {
    height: 24px;
    width: 24px;
  }
`

export default BackButton
