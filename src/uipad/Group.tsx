import React from 'react'

interface Props {
  title?: string
  children: React.ReactNode
}

const Group = (props: Props) => {
  const { children, title } = props

  return (
    <div className='root'>
      {title ? <div className='title'>{title}</div> : null}

      {children}

      <style jsx>{`
        .root {
          width: 100%;
          /* padding: 24px; */
          /* margin: -8px; */
          display: flex;
          flex-wrap: wrap;
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
