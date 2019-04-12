// @ts-ignore
import DocsIcon from '-!react-svg-loader!clarity-icons-svg/essential/file-outline.svg'
// @ts-ignore
import SpecimenIcon from '-!react-svg-loader!clarity-icons-svg/essential/library-outline.svg'
import cn from 'classnames'
import React from 'react'
import CSS from './TitleBar.module.css'
import { useAppContext } from './useAppState'

interface TProps {
  titleText: React.ReactNode
}

const TitleBar = ({ titleText }: TProps) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) {
    return <span />
  }

  return (
    <div className={CSS.root}>
      <div className={CSS.left}>
        {/* Docs */}
        <button
          className={cn(CSS.navButton, {
            [CSS.isActive]: state.activeView.type === 'page'
          })}
          onClick={actions.navToDocs}
        >
          <DocsIcon className={CSS.navIcon} />
          <span className={CSS.navLabel}>Docs</span>
        </button>

        {/* Specimens */}
        <button
          className={cn(CSS.navButton, {
            [CSS.isActive]: state.activeView.type === 'specimen'
          })}
          onClick={actions.navToSpecimens}
        >
          <SpecimenIcon className={CSS.navIcon} />
          <span className={CSS.navLabel}>Specimens</span>
        </button>
      </div>

      {/* Middle */}
      <div className={CSS.mid}>{titleText}</div>
    </div>
  )
}

export default TitleBar
