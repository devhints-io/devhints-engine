import React, { memo, useEffect, useMemo, useRef } from 'react'
import doPostTransform from './doPostTransform'
import transform from './transform'

interface Props {
  /** Markdown HAST syntax tree */
  htmlAst: any

  /** Class name of the <div> */
  className?: string
}

/**
 * Post content with transform magic.
 * @param {any} props.htmlAst The markdown AST to render.
 * @param {any} props.className The classname of the parent div.
 */

const PostContent = memo((props: Props) => {
  const { htmlAst, className } = props
  const root = useRef<HTMLDivElement>(null)

  // Render HTML AST as React nodes
  const content = useMemo(() => transform(htmlAst), htmlAst)

  // Perform syntax highlighting and Isotope'ing
  useEffect(() => {
    if (root.current) doPostTransform(root.current)
  }, [])

  return (
    <div className={className} role='main' ref={root}>
      {content}
    </div>
  )
})

export default PostContent
