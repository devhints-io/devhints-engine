import React from 'react'
import Helmet from 'react-helmet'
import CSS from './Penpad.module.css'
import SpecimenNavigation from './SpecimenNavigation'
import SpecimenPanels from './SpecimenPanels'
import SpecimenView from './SpecimenView'
import TitleBar from './TitleBar'
import TitleText from './TitleText'
import { Config, Specimen } from './types'
import { Actions, AppProvider, State, useAppState } from './useAppState'

const Penpad = (props: Config) => {
  const { state, actions } = useAppState(props)
  const { title } = props
  const { activeView, specimens } = state

  // 'specimen' or 'page', depending on what's selected on top.
  const viewType = activeView && activeView.type

  // The active specimen
  const viewId = (activeView && activeView.id) || null

  // The specimen object
  const specimen = (viewId && specimens && specimens[viewId]) || null

  return (
    <AppProvider value={{ state, actions }}>
      <div className={CSS.root}>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=1200px' />
        </Helmet>
        <div className={CSS.topnav}>
          <div className={CSS.title}>
            <TitleBar
              titleText={<TitleText parts={[<span>{title}</span>, viewId]} />}
            />
          </div>
        </div>
        <div className={CSS.body}>
          {viewType === 'specimen' ? (
            <BodyForSpecimens {...{ specimen, state, actions, viewId }} />
          ) : null}
          {viewType === 'page' ? <div>Welcome</div> : null}
        </div>
      </div>
    </AppProvider>
  )
}

const BodyForSpecimens = ({
  specimen,
  state,
  actions,
  viewId
}: {
  specimen: Specimen | null
  state: State
  actions: Actions
  viewId: string | null
}) => {
  const { specimens } = state

  return (
    <>
      {/* Main area */}
      <main className={CSS.main}>
        {specimen ? <SpecimenView {...{ specimen }} /> : null}
      </main>

      {/* Left */}
      <aside className={CSS.sidebar}>
        {specimens ? (
          <SpecimenNavigation {...{ specimens, state, actions }} />
        ) : null}
      </aside>

      {/* Right */}
      <aside className={CSS.panels}>
        {specimen && viewId ? (
          <SpecimenPanels {...{ specimen, id: viewId }} key={viewId} />
        ) : null}
      </aside>
    </>
  )
}

Penpad.defaultProps = {
  title: 'Penpad',
  pages: {}
}

export default Penpad
