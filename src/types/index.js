/* @flow */

/**
 * Markdown node.
 */

export type MarkdownNode = {
  id: string,
  htmlAst?: any, // AST from Remark
  frontmatter: {
    path?: string,
    title?: string,
    intro?: string
  }
}

/**
 * An 'edge' from an allMarkdownRemark.
 */

export type MarkdownEdge = {
  Node: MarkdownNode
}

/**
 * List of MarkdownEdge's.
 */

export type MarkdownEdgeList = Array<MarkdownEdge>

/**
 * Result from a query with markdownRemark.
 */


export type QueryResult = {
  data: {
    allMarkdownRemark?: {
      edges: MarkdownEdgeList
    }
  }
