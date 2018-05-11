// @flow
import * as React from 'react'

export type Props = {
  // The markdown source
  source: string
}

export const MiniMarkdown = ({ source }: Props) => (
  <React.Fragment>
    <p>{markdownish(source)}</p>
  </React.Fragment>
)

export function markdownish (source: string) {
  // TODO mini-markdown
  return [source]
}

export default MiniMarkdown
