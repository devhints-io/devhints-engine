import React from 'react'
import CSS from './Navigation.module.css'
import { Specimens } from './types'
import { Actions } from './useAppState'

interface Props {
  specimens: Specimens
  actions: Actions
}

const Navigation = (props: Props) => {
  const { specimens, actions } = props

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {Object.entries(specimens).map(([name, component]) => {
          return (
            <li className={CSS.item}>
              <button
                className={CSS.entry}
                onClick={() => {
                  actions.setActiveSpecimen(name)
                }}
              >
                {name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navigation
