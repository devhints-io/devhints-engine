import cn from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

interface Props {
  children: React.ReactNode
  className?: string
}

/**
 * Intro content just below the cheatsheet title
 */

export const IntroContent = ({ children, className }: Props) => (
  <div className={cn('IntroContent', className)}>
    {children}
    <style jsx>{CSS}</style>
  </div>
)

const CSS = css`
  @media (min-width: 481px) {
    .IntroContent {
      max-width: 480px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export default IntroContent
