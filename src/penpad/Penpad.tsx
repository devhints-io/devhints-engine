import React from 'react'
import TitleText from './TitleText'
import Navigation from './Navigation'
import SpecimenView from './SpecimenView'
import CSS from './Penpad.module.css'
import { Config } from './types'
import useAppState from './useAppState'
import SpecimenPanels from './SpecimenPanels'

const Penpad = (props: Config) => {
  const { state, actions } = useAppState(props)
  const { title, specimens } = props
  const { activeView } = state

  // The active specimen
  const viewId = activeView && activeView.id
  const specimen = viewId && specimens[activeView.id]

  return (
    <div className={CSS.root}>
      <div className={CSS.topnav}>
        <h1 className={CSS.title}>
          <TitleText
            parts={[<span>{title}</span>, activeView && activeView.id]}
          />
        </h1>
      </div>
      <div className={CSS.body}>
        <main className={CSS.main}>
          {specimen ? <SpecimenView {...{ specimen }} /> : null}
        </main>
        <aside className={CSS.sidebar}>
          <Navigation {...{ specimens, state, actions }} />
        </aside>
        <aside className={CSS.panels}>
          {specimen ? (
            <SpecimenPanels {...{ specimen, id: viewId }} key={viewId} />
          ) : null}
        </aside>
      </div>
    </div>
  )
}

Penpad.defaultProps = {
  title: 'Penpad',
  pages: {}
}


export default Penpad
