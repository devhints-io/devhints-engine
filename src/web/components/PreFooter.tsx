/* @flow */
import React from 'react'
import css from 'styled-jsx/css'

/**
 * Pre-footer separator in the cheatsheets page
 */

export const PreFooter = () => (
  <div className="pre-footer">
    <i className="icon" />

    <style jsx>{STYLE}</style>
  </div>
)

export const STYLE = css`
  .pre-footer {
    padding: 32px;
    padding-top: 24px;
    padding-bottom: 48px;
    text-align: center;
  }

  .icon::before {
    content: '';
    /* TODO pre-footer icon -- @include ion-ios-flash(32px, $base-mute); */
    opacity: 0.25;
  }
`

export default PreFooter
