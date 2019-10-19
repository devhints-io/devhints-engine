import React from 'react'

export interface Props {
  // The markdown source
  source: string
}

/**
 * Renders mini-Markdown as HTML. Supports a subset of Markdown.
 *
 * @example
 *     <MiniMarkdown source='hello, *world*!' />
 */

export const MiniMarkdown = ({ source }: Props) => (
  <span
    className='mini-markdown'
    dangerouslySetInnerHTML={{ __html: paragraphify(markdownish(source)) }}
  />
)

/**
 * A very simply markdown-to-HTML converter, but only works with a very small
 * subset of inline elements. Returns HTML.
 *
 * @example
 *     markdownish('hello *world*')
 *     // => 'hello <em>world</em>'
 */

export function markdownish(source: string): string {
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
 *
 * @example
 *     paragraphify('hello\n\nthere')
 *     // => '<p>hello</p><p>there</p>'
 */

export function paragraphify(source: string): string {
  return source
    .split('\n\n')
    .map(para => `<p>${para}</p>`)
    .join('')
}

/**
 * Quotes a string.
 * @private
 */

function s(str: string) {
  return JSON.stringify(str)
}

export default MiniMarkdown
