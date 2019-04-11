// Page
import React from 'react'
import Navigation from './Navigation'
import Page from './Page'
import CSS from './Styleguide.module.css'
import { Pages } from './types'
import useAppState from './useAppState'

export interface Props {
  title?: string
  pages: Pages
}

const Styleguide = (props: Props) => {
  const { state, actions } = useAppState(props)
  const { title, pages } = props

  return (
    <div className={CSS.root}>
      <div className={CSS.body}>
        <main className={CSS.main}>
          {state.activePage ? <Page page={pages[state.activePage]} /> : null}
        </main>
        <aside className={CSS.sidebar}>
          <h1 className={CSS.title}>{title}</h1>
          <Navigation {...{ pages, state, actions }} />
        </aside>
      </div>
    </div>
  )
}


Styleguide.defaultProps = {
  title: 'Styleguide',
  pages: {}
}

export default Styleguide
