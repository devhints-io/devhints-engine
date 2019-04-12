import React from 'react'
import CSS from './TitleText.module.css'
// @ts-ignore
import Chevron from '-!react-svg-loader!clarity-icons-svg/core/angle-outline.svg'

interface Props {
  parts: React.ReactNode[]
}

const TitleText = (props: Props) => {
  const { parts } = props

  return (
    <div className={CSS.root}>
      {parts.map((part, idx) => {
        if (!part) return <></>
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
