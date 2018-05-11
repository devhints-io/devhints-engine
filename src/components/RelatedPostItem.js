/* @flow */
import * as React from 'react'
import { Consumer } from '../templates/SheetTemplate/context'

/*
 * Types
 */

export type Props = {
  className?: string
}

export type ViewProps = Props & {
  suffix: string
}

/**
 * The view
 */

export const RelatedPostItemView = ({ className, suffix }: ViewProps) => (
  <div className={`related-post-item ${className || ''}`}>
    <a href='/vimscript'>
      <strong>Vim scripting</strong>
      <span>{suffix}</span>
    </a>
  </div>
)

/**
 * Connected view
 */

export const RelatedPostItem = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => (
      <RelatedPostItemView {...props} suffix={CONTENT.sheet.suffix} />
    )}
  </Consumer>
)

export default RelatedPostItem
