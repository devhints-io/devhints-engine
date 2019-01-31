import React from 'react'

export interface Props {
  keyword: string
}

/**
 * Links to external sources.
 *
 * @example
 *     <ExternalSearchLinks keyword='gatsby' />
 */

export const ExternalSearchLinks = ({ keyword }: Props) => {
  const query = keyword
  const phrase = <code>{keyword}</code>

  return (
    <ul>
      <li>
        <a href={`https://yarnpkg.com/en/packages?q=${query}`}>
          Search {phrase} on Yarn.pm
        </a>
      </li>
      <li>
        <a
          href={`https://github.com/search?q=${query}&type=Everything&repo=&langOverride=&start_value=1`}
        >
          Search {phrase} on GitHub
        </a>
      </li>
      <li>
        <a href={`https://npmjs.com/search?q=${query}`}>
          Search {phrase} on npm
        </a>
      </li>
      <li>
        <a href={`https://devdocs.io/?q=${query}`}>
          Search {phrase} on devdocs.io
        </a>
      </li>
      <li>
        <a href={`https://developer.mozilla.org/en-US/search?q=${query}`}>
          Search {phrase} on MDN
        </a>
      </li>
      <li>
        <a
          href={`https://next.duckduckgo.com/?q=${query}+cheatsheet&ia=cheatsheet&iax=1#zero_click_wrapper`}
        >
          {phrase} cheatsheet on DuckDuckGo
        </a>
      </li>
    </ul>
  )
}

export default ExternalSearchLinks
