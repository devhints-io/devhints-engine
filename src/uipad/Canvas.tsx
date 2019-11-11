import React from 'react'

interface Props {
  children: React.ReactNode
}

const Canvas = (props: Props) => {
  const { children } = props

  return (
    <div className='root'>
      {children}

      <style jsx>{`
        .root {
          padding: 8px;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

export default Canvas
