import React from 'react'
import { Penpad, combineContext } from '../penpad'

const StyleguidePage = () => {
  const specimens = combineContext(
    require.context('../', true, /\.specimens\.(jsx?|tsx?)$/)
  )

  // const pages = combineContext(require.context('./', true, /\.mdx$/))
  const pages = {
    Home: function Home() {
      return (
        <div>
          <h1>Penpad demo</h1>
          <p>
            Welcome to Penpad, this is a very early demo! Penpad allows you to
            design and document your web UI components. It supports React, and
            can be used anywhere React can be used.
          </p>
          <h2>Penpad features</h2>
          <ul>
            <li>
              <strong>Live editing</strong> &mdash; You can edit live.
            </li>
            <li>
              <strong>Integrates anywhere</strong> &mdash; Penpad supports
              React, and work wherever React can be used.
            </li>
          </ul>
          <h2>Learn more</h2>
          <p>
            Check it out on GitHub!{' '}
            <a href='https://github.com/rstacruz/penpad'>rstacruz/penpad</a>
          </p>
        </div>
      )
    },
    'About this': function AboutThis() {
      return (
        <div>
          <h1>About this</h1>
          <p>
            This is{' '}
            <a href='https://github.com/rstacruz/penpad'>rstacruz/penpad</a>.
          </p>
        </div>
      )
    }
  }

  return <Penpad title='Devhints Penpad' pages={pages} specimens={specimens} />
}

export default StyleguidePage
