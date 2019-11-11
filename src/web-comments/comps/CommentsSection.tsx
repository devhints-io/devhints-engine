import React from 'react'

export interface Props {
  thread: React.ReactNode
}

const CommentsSection = ({ thread }: Props) => {
  return (
    <div className='comments-section'>
      {/* TODO comments-section CSS module */}
      <div className='comments'>{thread}</div>
    </div>
  )
}

export default CommentsSection
