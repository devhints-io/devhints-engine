import cn from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

interface Props {
  hint: string
}

/**
 * A dot thing
 */

export const AttributePeg = ({ hint }: Props) => (
  <abbr className={cn('AttributePeg', 'hint--bottom')} data-hint={hint}>
    <span className='dot' />
    <style jsx>{CSS}</style>
  </abbr>
)

const CSS = css`
  .root {
    display: inline-block;
    height: 12px;
    width: 20px;
    text-align: center;
  }

  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #77dab2; /* saturate(lighten(#5a8, 16%), 24%); */
    border-radius: 50%;
  }
`

export default AttributePeg
