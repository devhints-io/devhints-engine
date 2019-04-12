import React from 'react'
import CSS from './TitleText.module.css'
import Chevron from '-!react-svg-loader!clarity-icons-svg/core/angle-outline.svg'

const TitleText = props => {
  const { parts } = props

  return (
    <div className={CSS.root}>
      {parts.map((part, idx) => {
        return (
          <>
            {idx === 0 ? null : <Chevron className={CSS.separator} />}
            <span className={CSS.part}>{part}</span>
          </>
        )
      })}
    </div>
  )
}

export default TitleText
