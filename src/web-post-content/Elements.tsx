import cn from 'classnames'
import React from 'react'
import redent from 'redent'

export const PreCode = (props: {
  lang?: string
  children: string
  className?: string
}) => {
  const { lang, children, className } = props
  return (
    <pre className={cn(className)}>
      <code className={lang ? `lang-${lang}` : undefined}>
        {redent(children).trim()}
      </code>
    </pre>
  )
}

export const H2Section = (props: {
  className?: string
  title: React.ReactNode
  children: React.ReactNode
}) => {
  const { title, className, children } = props
  return (
    <div className={cn('h2-section', className)}>
      <h2 className={className}>{title}</h2>
      <div className={cn('body h3-section-list', className)}>{children}</div>
    </div>
  )
}

export const H3Section = (props: {
  className?: string
  title: React.ReactNode
  children: React.ReactNode
}) => {
  const { title, className, children } = props
  return (
    <div className={cn('h3-section', className)}>
      <h3 className={className}>{title}</h3>
      <div className='body'>{children}</div>
    </div>
  )
}
