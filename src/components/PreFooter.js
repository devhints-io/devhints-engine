/* @flow */
import React from 'react'

/**
 * Pre-footer separator in the cheatsheets page
 */

export const PreFooter = () => (
  <div className='PreFooter'>
    <i className='icon' />

    <style jsx>{`
      .PreFooter {
        padding: 32px;
        padding-top: 24px;
        padding-bottom: 48px;
        text-align: center;
      }

      .icon::before {
        content: '';
        /* TODO @include ion-ios-flash(32px, $base-mute); */
        opacity: 0.25;
      }
    `}</style>
  </div>
)

export default PreFooter
