/* @flow */
import * as React from 'react'

export const IntroContent = ({
  children,
  className
}: {
  children: React.Node,
  className?: string
}) => (
  <div className={`intro-content ${className || ''}`}>
    {children}

    <style jsx>{`
      @media (min-width: 481px) {
        .intro-content {
          max-width: 480px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
  </div>
)

export default IntroContent
