import cn from 'classnames'
import React from 'react'
import CSS from './AttributePeg.module.css'

interface Props {
  hint: string
}

/**
 * A dot thing
 */

export const AttributePeg = ({ hint }: Props) => (
  <abbr className={cn(CSS.root, 'hint--bottom')} data-hint={hint}>
    <span className={CSS.dot} />
  </abbr>
)

export default AttributePeg
