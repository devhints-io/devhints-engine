/* @flow */
import * as React from 'react'

/*::
  export type Props = {
    className?: string,
    children?: React.Node
  }
*/

const SpanPushButton = ({ className, children } /*: Props */) => (
  <span className={`push-button ${className || ''}`}>{children}</span>
)

export default SpanPushButton
