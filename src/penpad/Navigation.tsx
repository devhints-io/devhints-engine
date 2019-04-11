import React from 'react'
import CSS from './Navigation.module.css'
import { Pages } from './types'
import { Actions } from './useAppState'

interface Props {
  pages: Pages
  actions: Actions
}

const Navigation = (props: Props) => {
  const { pages, actions } = props

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {Object.entries(pages).map(([name, component]) => {
          return (
            <li className={CSS.item}>
              <button
                className={CSS.entry}
                onClick={() => {
                  actions.setActivePage(name)
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
