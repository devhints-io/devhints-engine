// @flow
import * as React from 'react'

import type { DisqusData } from '../types'

export type Props = DisqusData & { children?: () => React.Node }

/**
 * Disqus doesn't need to load right away.
 */

const DISQUS_DELAY = 100

/*
 * Injects a disqus script.
 */

export class DisqusScript extends React.Component<Props> {
  componentDidMount () {
    const { host, url, identifier } = this.props

    setTimeout(() => {
      window.disqus_config = function () {
        this.page.url = url
        this.page.identifier = identifier
      }

      injectScript(host)
    }, DISQUS_DELAY)
  }

  render () {
    const { host, url, identifier, children } = this.props
    const data = { host, url, identifier }
    return (
      <React.Fragment>
        <noscript data={JSON.stringify(data)} />
        {typeof children === 'function' ? children() : null}
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

export function injectScript (host: string) {
  injectEmbed(host)
  injectCount(host)
}

export function injectEmbed (host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/embed.js`
  s.setAttribute('data-timestamp', `#{+new Date()}`)
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}

export function injectCount (host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/count.js`
  s.id = 'dsq-count-scr'
  s.async = true
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}
