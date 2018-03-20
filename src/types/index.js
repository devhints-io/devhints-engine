/* @flow */

export type HtmlAst = any

export type Frontmatter = {
  path?: string,
  title?: string,
  intro?: string
}

/**
 * Markdown node.
 */

export type MarkdownNode = {
  id: string,
  htmlAst?: HtmlAst, // AST from Remark
  frontmatter?: Frontmatter
}

/**
 * An 'edge' from an allMarkdownRemark.
 */

export type MarkdownEdge = {
  node: MarkdownNode
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
}

export type SiteLink = {
  path: string,
  title: string
}

export type SiteLinkList = Array<SiteLink>
