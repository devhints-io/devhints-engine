/* @flow */
import * as React from 'react'
import { GetContext } from '../templates/SheetTemplate/context'

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
  <GetContext>
    {({ CONTENT }) => (
      <RelatedPostItemView {...props} suffix={CONTENT.sheet.suffix} />
    )}
  </GetContext>
)

export default RelatedPostItem
