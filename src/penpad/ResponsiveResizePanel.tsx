import cn from 'classnames'
import React from 'react'
import CSS from './ResponsiveResizePanel.module.css'
import { useAppContext } from './state'
import Panel from './styles/panels.module.css'
import Util from './utils.module.css'

const ResponsiveResizePanel = () => {
  const { state, actions } = useAppContext()
  const currentWidth = state && state.frameWidth

  const widths = [null, 479, 767, 1199]

  return (
    <div className={Panel.root}>
      {/*
        <div className={Panel.header}>
          <h3 className={Panel.title}>Responsive</h3>
        </div>
      */}
      <div className={Panel.body}>
        {widths.map((width, index) => {
          const isActive = currentWidth === width

          return (
            <button
              className={cn(CSS.button, { [CSS.isActive]: isActive })}
              key={width || index}
              onClick={() => actions && actions.setFrameWidth(width)}
            >
              {width || 'Reset'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ResponsiveResizePanel
