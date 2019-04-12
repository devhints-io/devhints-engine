import React from 'react'
import Navigation from './Navigation'
import SpecimenView from './SpecimenView'
import CSS from './Styleguide.module.css'
import { Config } from './types'
import useAppState from './useAppState'

const Styleguide = (props: Config) => {
  const { state, actions } = useAppState(props)
  const { title, specimens } = props
  const { activeView } = state

  return (
    <div className={CSS.root}>
      <div className={CSS.body}>
        <main className={CSS.main}>
          {activeView && activeView.id ? (
            <SpecimenView specimen={specimens[activeView.id]} />
          ) : null}
        </main>
        <aside className={CSS.sidebar}>
          <h1 className={CSS.title}>{title}</h1>
          <Navigation {...{ specimens, state, actions }} />
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
