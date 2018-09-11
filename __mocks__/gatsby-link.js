import React from 'react'

const MockLink = props =>
  React.createElement('a', { href: props.to, ...props }, props.children)

export default MockLink
