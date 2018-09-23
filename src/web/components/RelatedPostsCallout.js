/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'
import SpanPushButton from './SpanPushButton'

export type Props = {
  pageCount: number
}

export const RelatedPostsCallout = ({ pageCount }: Props) => (
  <span>
    <Link className='related-posts-callout' to='/'>
      <div className='text'>
        <i className='icon' />
        <span className='description'>
          Over {pageCount} curated cheatsheets, by developers for developers.
        </span>
        <SpanPushButton className='-dark'>Devhints home</SpanPushButton>
      </div>
    </Link>

    <style jsx>{`
      @import 'src/styles/common';

      :global(.related-posts-callout) {
        & {
          display: flex;
          text-decoration: none;
          background: var(--brand-a-gradient);
          padding: 32px;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 2px;
          box-shadow: var(--shadow2);
          text-shadow: 0 1px 1px color-mod(black alpha(20%));
        }

        &,
        &:visited {
          color: white;
        }

        &:hover,
        &:focus {
          background: color-mod(var(--brand-a) lightness(-8%));
        }
      }

      .text {
        margin: auto;
        text-align: center;
      }

      .icon {
        margin-bottom: 16px;
        display: block;
      }

      .icon::before {
        content: '';
        display: inline-block;
        /* TODO @include ion-ios-arrow-back(48px, adjust-color-mod($base-a, $lightness: 16%, $hue: 20deg)); */
        height: 64px;
        width: 64px;
        border: solid 2px color-mod(var(--brand-a) lightness(+16%) hue(+20deg));
        border-radius: 50%;
        text-indent: -2px;
        text-shadow: none;
      }

      .description {
        @apply --font-size-1;
        line-height: 1.4;
        font-weight: 300;
        display: block;
        margin-bottom: 16px;
      }
    `}</style>
  </span>
)

export default RelatedPostsCallout
