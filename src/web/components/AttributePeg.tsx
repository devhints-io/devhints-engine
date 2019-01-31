import React from 'react'

export interface Props {
  hint: string
}

/**
 * A dot thing
 */

export const AttributePeg = ({ hint }: Props) => (
  <abbr className="attribute-peg -new-layout hint--bottom" data-hint={hint}>
    <span />
  </abbr>
)

export default AttributePeg
