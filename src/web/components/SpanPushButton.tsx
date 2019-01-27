import React from 'react'

export interface Props {
  className?: string
  children?: React.ReactNode
}

const SpanPushButton = ({ className, children }: Props) => (
  <span className={`push-button ${className || ''}`}>{children}</span>
)

export default SpanPushButton
