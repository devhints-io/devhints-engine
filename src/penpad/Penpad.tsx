import React from 'react'
import TitleText from './TitleText'
import SourceCodePanel from './SourceCodePanel'
import Navigation from './Navigation'
import SpecimenView from './SpecimenView'
import CSS from './Penpad.module.css'
import { Config } from './types'
import useAppState from './useAppState'

const Penpad = (props: Config) => {
  const { state, actions } = useAppState(props)
  const { title, specimens } = props
  const { activeView } = state
  const activeSpecimen = specimens[activeView.id]

  return (
    <div className={CSS.root}>
      <div className={CSS.topnav}>
        <h1 className={CSS.title}>
          <TitleText parts={[<span>{title}</span>, activeView.id]} />
        </h1>
      </div>
      <div className={CSS.body}>
        <main className={CSS.main}>
          {activeView && activeView.id ? (
            <SpecimenView specimen={specimens[activeView.id]} />
          ) : null}
        </main>
        <aside className={CSS.sidebar}>
          <Navigation {...{ specimens, state, actions }} />
        </aside>
        <aside className={CSS.panels}>
          <SourceCodePanel />
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
