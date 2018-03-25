/* @flow */
import * as React from 'react'

/*::
  export type Props = {
    className?: string
  }
*/

export default ({ className } /*: Props */) => (
  <div className={`related-post-item ${className || ''}`}>
    <a href='/vimscript'>
      <strong>Vim scripting</strong>
      <span>cheatsheet</span>
    </a>
  </div>
)
