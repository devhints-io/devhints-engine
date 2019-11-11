import React from 'react'

interface Props {
  title?: string
  children: React.ReactNode
}

const Group = (props: Props) => {
  const { children, title } = props

  return (
    <div className='Group'>
      <details open className='details'>
        <summary className='summary'>
          {title ? <div className='title'>{title}</div> : null}
        </summary>

        <div className='body'>{children}</div>
      </details>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}

export default Group
