import React from 'react'
import DocsNavigation from './DocsNavigation'
import CSS from './Penpad.module.css'
import { useAppContext } from './state'
import { getActivePage } from './state/selectors'
import Markdown from './styles/github-markdown.module.css'

const DocsBody = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  const [pageId, page] = getActivePage(state) || [null, null]

  return (
    <>
      <main className={CSS.main} style={{ background: 'white' }}>
        <div
          className={Markdown.body}
          style={{ width: '700px', margin: '1em auto' }}
        >
          {typeof page === 'function' ? page() : null}
        </div>
      </main>

      <aside className={CSS.sidebar}>
        <DocsNavigation />
      </aside>
    </>
  )
}

export default DocsBody
