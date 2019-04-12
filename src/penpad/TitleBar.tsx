// @ts-ignore
import DocsIcon from '-!react-svg-loader!clarity-icons-svg/essential/file-outline.svg'
// @ts-ignore
import SpecimenIcon from '-!react-svg-loader!clarity-icons-svg/essential/library-outline.svg'
import cn from 'classnames'
import React from 'react'
import CSS from './TitleBar.module.css'

interface TProps {
  titleText: React.ReactNode
}

const TitleBar = ({ titleText }: TProps) => {
  return (
    <div className={CSS.root}>
      <div className={CSS.left}>
        <button className={CSS.navButton}>
          <DocsIcon className={CSS.navIcon} />
          <span className={CSS.navLabel}>Docs</span>
        </button>
        <button className={cn(CSS.navButton, CSS.isActive)}>
          <SpecimenIcon className={CSS.navIcon} />
          <span className={CSS.navLabel}>Specimens</span>
        </button>
      </div>
      <div className={CSS.mid}>{titleText}</div>
    </div>
  )
}

export default TitleBar
