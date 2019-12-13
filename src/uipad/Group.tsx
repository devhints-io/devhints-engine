import cn from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

interface Props {
  title?: string
  children: React.ReactNode
  flow?: 'stack' | 'row' | 'column'
}

/**
 * A group for frames.
 * @param props.flow Determines how items in a group are stacked.
 */

const Group = (props: Props) => {
  const { children, title } = props
  const flow = props.flow || 'row'

  return (
    <div className='Group'>
      <details open className='details'>
        <summary className='summary'>
          {title ? <div className='title'>{title}</div> : null}
        </summary>

        <div className={cn('body', flow && `-flow-${flow}`)}>{children}</div>
      </details>

      <style jsx>{CSS}</style>
    </div>
  )
}
const CSS = css`
  .Group,
  .body {
    width: 100%;
    /* padding: 24px; */
    /* margin: -8px; */
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .details {
    width: 100%;
  }

  .summary {
    list-style: none;
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .summary::-webkit-details-marker {
    display: none;
  }

  .title {
    font-size: 16px;
    width: 100%;
    padding: 8px;
  }

  /*
   * flow='stack'
   */

  .body.-flow-stack {
    display: block;
  }

  .body.-flow-stack > :global(*) {
    display: block;
  }

  /*
   * flow='column'
   */

  .body.-flow-column {
    display: block;
    column-count: 3;
  }

  .body.-flow-column > :global(*) {
    display: block;
    break-inside: avoid;
  }
`

export default Group
