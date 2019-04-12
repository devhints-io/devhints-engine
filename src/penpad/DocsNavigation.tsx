// @ts-ignore
import Icon from '-!react-svg-loader!clarity-icons-svg/essential/file-outline.svg'
import cn from 'classnames'
import React from 'react'
// TODO change this
import CSS from './SpecimenNavigation.module.css'
import { useAppContext } from './state'
import { isActivePage } from './state/selectors'

const DocsNavigation = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  const { pages } = state
  const names = Object.keys(pages || {}).sort()

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {names.map(name => {
          return (
            <li className={CSS.item} key={name}>
              <button
                className={cn(CSS.entry, {
                  [CSS.isActive]: isActivePage(state, name)
                })}
                onClick={() => {
                  actions.setActivePage(name)
                }}
              >
                <Icon className={CSS.icon} />
                <span className={CSS.name}>{name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DocsNavigation
