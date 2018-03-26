/* @flow */
import * as React from 'react'
import { mapContext } from '../templates/SheetTemplate/context'

/*::
  export type Props = {
    className?: string,
    suffix: string
  }
*/

export const View = ({ className, suffix } /*: Props */) => (
  <div className={`related-post-item ${className || ''}`}>
    <a href='/vimscript'>
      <strong>Vim scripting</strong>
      <span>
        {suffix}
      </span>
    </a>
  </div>
)

export default mapContext(
  ({ CONTENT }) => ({ suffix: CONTENT.sheet.suffix })
)(View)
