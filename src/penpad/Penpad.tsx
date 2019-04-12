import React from 'react'
import Helmet from 'react-helmet'
import DocsBody from './DocsBody'
import CSS from './Penpad.module.css'
import SpecimensBody from './SpecimensBody'
import { AppProvider, useAppState } from './state'
import TitleBar from './TitleBar'
import { Config } from './types'

const Penpad = (props: Config) => {
  const { state, actions } = useAppState(props)
  const { title } = props
  const { activeView, specimens } = state

  // 'specimen' or 'page', depending on what's selected on top.
  const viewType = activeView.type

  // The active specimen
  const specimenId =
    (activeView.type === 'specimen' && activeView.specimenId) || null

  // The specimen object
  const specimen = (specimenId && specimens && specimens[specimenId]) || null

  return (
    <AppProvider value={{ state, actions }}>
      <div className={CSS.root}>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=1200px' />
        </Helmet>
        <div className={CSS.topnav}>
          <div className={CSS.title}>
            <TitleBar />
          </div>
        </div>
        <div className={CSS.body}>
          {viewType === 'specimen' ? (
            <SpecimensBody {...{ specimen, specimenId }} />
          ) : null}
          {viewType === 'page' ? <DocsBody /> : null}
        </div>
      </div>
    </AppProvider>
  )
}

Penpad.defaultProps = {
  title: 'Penpad',
  pages: {},
  useFrame: true
}

/*
 * Export
 */

export default Penpad
