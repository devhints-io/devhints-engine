/* @flow */
import * as React from 'react'

/*::
  export type Props = {
    className?: string,
    children?: React.Node
  }
*/

export default ({ className, children } /*: Props */) => (
  <span className={`push-button ${className || ''}`}>{children}</span>
)
