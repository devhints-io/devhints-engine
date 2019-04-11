import React from 'react'
import Navigation from './Navigation'
import SpecimenView from './SpecimenView'
import CSS from './Styleguide.module.css'
import { Specimens } from './types'
import useAppState from './useAppState'

export interface Props {
  title?: string
  specimens: Specimens
}

const Styleguide = (props: Props) => {
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
