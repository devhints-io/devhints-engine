/* @flow */
import * as React from 'react'
import { useContext } from '../templates/SheetTemplate/context'

/*::
  import type { Content } from '../templates/SheetTemplate/context'

  export type Props = {
    className?: string,
    CONTENT: Content
  }
*/

export const View = ({ className, CONTENT } /*: Props */) => (
  <div className={`related-post-item ${className || ''}`}>
    <a href='/vimscript'>
      <strong>Vim scripting</strong>
      <span>
        {CONTENT.sheet.suffix}
      </span>
    </a>
  </div>
)

export default useContext(View)
