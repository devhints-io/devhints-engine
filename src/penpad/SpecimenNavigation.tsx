// @ts-ignore
import Icon from '-!react-svg-loader!clarity-icons-svg/technology/container-outline.svg'
import React from 'react'
import CSS from './SpecimenNavigation.module.css'
import { Specimens } from './types'
import { Actions } from './useAppState'

interface Props {
  specimens: Specimens
  actions: Actions
}

const Navigation = (props: Props) => {
  const { specimens, actions } = props

  const names = Object.keys(specimens).sort()

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {names.map(name => {
          return (
            <li className={CSS.item} key={name}>
              <button
                className={CSS.entry}
                onClick={() => {
                  actions.setActiveSpecimen(name)
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

export default Navigation
