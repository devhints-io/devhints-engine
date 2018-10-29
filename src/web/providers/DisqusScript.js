// @flow
/* eslint-disable no-console */
import * as React from 'react'
import debugjs from 'debug'

import type { DisqusData } from '../types'

export type RenderProps = {
  thread: React.Node,
  count: React.Node
}

export type Props = DisqusData & { children?: RenderProps => React.Node }

/**
 * Disqus doesn't need to load right away.
 */

const DISQUS_DELAY = 100

const debug = debugjs('app:DisqusScript')

/*
 * Injects a disqus script.
 */

export class DisqusScript extends React.Component<Props> {
  componentDidMount() {
    const { host, url, identifier } = this.props
    debug('componentDidMount() started for "%s".', url)

    setTimeout(() => {
      window.disqus_config = function() {
        debug('Disqus has called window.disqus_config().')
        this.page.url = url
        this.page.identifier = identifier
      }

      injectScript(host)
    }, DISQUS_DELAY)
  }

  render() {
    const { host, url, identifier, children } = this.props
    const data = { host, url, identifier }

    // Render props to be passed on
    const rprops: RenderProps = {
      thread: <div id="disqus_thread" />,
      count: (
        <span
          className="disqus-comment-count"
          data-disqus-identifier={identifier}
          data-disqus-url={url}
        >
          Comments
        </span>
      )
    }

    return (
      <React.Fragment>
        <noscript data={JSON.stringify(data)} />
        {typeof children === 'function' ? children(rprops) : null}
      </React.Fragment>
    )
  }
}

/*
 * Primary export
 */

export default DisqusScript

/**
 * Injects disqus's scripts into the page.
 *
 * @example
 *     inject('devhints.disqus.com')
 */

export function injectScript(host: string) {
  debug('injectScript("%s") called', host)
  injectEmbed(host)
  injectCount(host)
}

export function injectEmbed(host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/embed.js`
  s.setAttribute('data-timestamp', `#{+new Date()}`)
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}

export function injectCount(host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/count.js`
  s.id = 'dsq-count-scr'
  s.async = true
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}
