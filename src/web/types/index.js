/* @flow */
/* eslint-disable no-use-before-define */

/**
 * HAST syntax tree. (todo)
 */

export type HtmlAst = any

/**
 * Frontmatter for cheat sheets.
 */

export type Frontmatter = {
  path?: string, // TODO remove this
  title?: string,
  intro?: string,
  category?: string,
  aliases?: Array<string>
}

/**
 * Markdown node.
 */

export type MarkdownNode = {
  id: string,
  htmlAst: HtmlAst, // AST from Remark
  frontmatter: Frontmatter
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
    allMarkdownRemark?: AllMarkdownRemark
  }
}

export type AllMarkdownRemark = {
  edges: MarkdownEdgeList
}

/**
 * A link to a cheatsheet.
 */

export type SiteLink = {
  path: string,
  title: string
}

/**
 * An array of SiteLinks.
 */

export type SiteLinkList = Array<SiteLink>

/**
 * Content config.
 * See `config.js`.
 */

export type Content = {
  home: {
    title: string,
    description: string,
    recentlyUpdated: string,
    updatedLabel: string
  },
  siteHeader: {
    title: string,
    tagline: string
  },
  topNav: {
    title: string,
    edit: string,
    editOnGithub: string
  },
  sheet: {
    suffix: string
  },
  relatedPostsCallout: {
    description: string,
    link: string
  }
}

export type NodeContext = {
  node_id: string, // Internal gatsby identifier of Markdown node
  nodePath: string, // File path (eg, 'vim')
  title: string,
  category: string
}

/**
 * TBD
 */

export type HastComment = {
  type: 'comment',
  value: string
}

export type HastElement = {
  tagName: string,
  type: 'element',
  properties: Object,
  children: Array<HastNode>
}

export type HastText = {
  type: 'text',
  value: string
}

export type HastNode = HastComment | HastElement | HastText

/**
 * TBD
 */

export type PageEdge = {
  node: {
    id: string,
    context: NodeContext
  }
}

/**
 * TBD
 */

export type AllSitePage = {
  edges: Array<PageEdge>
}

/**
 * `SiteLink`s that are grouped by category.
 */

export type GroupedSiteLinks = {
  [string]: Array<SiteLink>
}

/**
 * Global React context
 */

export type Context = {
  CONTENT: Content,
  sheet?: Sheet,
  siteSearchIndex?: SiteSearchIndex
}

export type SearchPageItem = {
  id: string,
  title: string,
  category: string,
  nodePath: string
}

export type Sheet = {
  path: string,
  title: ?string,
  htmlAst: any
}

export type DisqusData = {
  host: string,
  url: string,
  identifier: string
}

export type SiteSearchIndex = {
  index: any /* index from elasticlunr */
}

/**
 * Actions from gatsby-node.js
 */

export type GatsbyActions = {
  createPage: ({
    path: string,
    component: string,
    context: NodeContext
  }) => void,
  createRedirect: ({
    fromPath: string,
    toPath: string,
    isPermanent?: boolean,
    redirectInBrowser?: boolean
  }) => void
}
