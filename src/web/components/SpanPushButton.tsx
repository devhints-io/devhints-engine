import cn from 'classnames'
import React from 'react'
import CSS from './SpanPushButton.module.css'

export interface Props {
  className?: string
  dark?: boolean
  children?: React.ReactNode
}

const SpanPushButton = (props: Props) => {
  const { className, children, dark } = props

  return (
    <span
      className={cn(className, {
        [CSS.root]: true,
        [CSS.isDark]: dark
      })}
    >
      {children}
    </span>
  )
}

export default SpanPushButton
