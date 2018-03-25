/* @flow */
import * as React from 'react'

/*::
  export type Props = {
    title: string,
    suffix: string
  }
*/

/**
 * Main heading
 */

export default ({ title, suffix } /*: Props */) => (
  <header className='main-heading -center'>
    <h1 className='h1'>
      {title} <em>{suffix}</em>
    </h1>

    <div className='adbox' />
  </header>
)
