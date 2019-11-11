import debugjs from 'debug'
import React from 'react'

import { DisqusData } from '../../types/types'

export interface RenderProps {
  thread: React.ReactNode
  count: React.ReactNode
}

export type Props = DisqusData & {
  children?: (rprops: RenderProps) => React.ReactNode
}

/**
 * Disqus doesn't need to load right away.
 */

const DISQUS_DELAY = 100

const debug = debugjs('app:DisqusScript')

/**
 * Adds a discus discussion.
 *
 * @example
 *     <DisqusScript host={...} url={...} identifier={...}>
 *       {(thread, count)=> (
 *         <div>{count} responses: {thread}</div>
 *       )}
 *     </DisqusScript>
 */

export default class DisqusScript extends React.Component<Props> {
  componentDidMount() {
    const { host, url, identifier } = this.props
    debug('componentDidMount() started for "%s".', url)

    setTimeout(() => {
      // @ts-ignore
      window.disqus_config = function() {
        debug('Disqus has called window.disqus_config().')
        // @ts-ignore
        this.page.url = url
        // @ts-ignore
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
      thread: <div id='disqus_thread' />,
      count: (
        <span
          className='disqus-comment-count'
          data-disqus-identifier={identifier}
          data-disqus-url={url}
        >
          Comments
        </span>
      )
    }

    // @ts-ignore
    return (
      <React.Fragment>
        {/* <noscript data> isn't standard HTML */}
        {React.createElement('noscript', { data: JSON.stringify(data) })}
        {typeof children === 'function' ? children(rprops) : null}
      </React.Fragment>
    )
  }
}

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
