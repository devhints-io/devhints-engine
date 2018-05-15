// @flow
import * as React from 'react'

export type Props = {
  // The markdown source
  source: string
}

export const MiniMarkdown = ({ source }: Props) => (
  <span
    className='mini-markdown'
    dangerouslySetInnerHTML={{ __html: paragraphify(markdownish(source)) }}
  />
)

/**
 * A very simply markdown-to-HTML converter, but only works with a very small
 * subset of inline elements. Returns HTML.
 */

export function markdownish (source: string) {
  return (
    source
      // Code
      .replace(
        /`(.*?)`/g,
        (_, label: string) => `<code>${markdownish(label)}</code>`
      )
      // Bold
      .replace(
        /\*\*(.*?)\*\*/g,
        (_, label: string) => `<strong>${markdownish(label)}</strong>`
      )
      // Link
      .replace(
        /\[([^\]]*)\]\((.*?)\)/g,
        (_, label: string, url: string) =>
          `<a href=${s(url)}>${markdownish(label)}</a>`
      )
  )
}

/**
 * Splits paragraph sections into `<p>` elements.
 * Returns HTML.
 */

export function paragraphify (source: string) {
  return source
    .split('\n\n')
    .map(para => `<p>${para}</p>`)
    .join('')
}

/**
 * Quotes a string
 * @private
 */

function s (str: string) {
  return JSON.stringify(str)
}

export default MiniMarkdown
