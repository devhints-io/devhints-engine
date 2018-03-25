/* @flow */
import React, { PureComponent } from 'react'
import transform from './transform'
import isotopify from './isotopify'

/*::
   export type Props = {
     // Markdown HAST syntax tree
     htmlAst: any,

     // Class name of the <div>
     className: string
   }
*/

/**
 * Post content with transform magic.
 */

export default class PostContent extends PureComponent /*:: <Props> */ {
  render () {
    const { htmlAst, className } = this.props
    let content = transform(htmlAst)

    return (
      <div className={className} role='main' ref={isotopify}>
        {content}
      </div>
    )
  }
}
