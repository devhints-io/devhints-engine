import React from 'react'
import cn from 'classnames'
import CSS from './SpanPushButton.module.scss'

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
        [CSS.isDark]: props.dark
      })}
    >
      {children}
    </span>
  )
}

export default SpanPushButton
