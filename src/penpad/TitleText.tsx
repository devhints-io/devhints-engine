// @ts-ignore
import Chevron from '-!react-svg-loader!clarity-icons-svg/core/angle-outline.svg'
import React from 'react'
import CSS from './TitleText.module.css'

interface Props {
  parts: React.ReactNode[]
}

const TitleText = (props: Props) => {
  const { parts } = props

  return (
    <div className={CSS.root}>
      {parts.map((part, idx) => {
        return (
          <React.Fragment key={idx}>
            {part ? (
              <>
                {idx === 0 ? null : <Chevron className={CSS.separator} />}
                <span className={CSS.part}>{part}</span>
              </>
            ) : null}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default TitleText
