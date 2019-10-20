/**
 * HAST syntax tree. (todo)
 */

export type HtmlAst = any

/**
 * Frontmatter for cheat sheets.
 */

export interface Frontmatter {
  path?: string // TODO remove this
  title?: string
  intro?: string
  category?: string
  aliases?: string[]
}

/**
 * Markdown node.
 */

export interface MarkdownNode {
  id: string
  htmlAst: HtmlAst // AST from Remark
  frontmatter: Frontmatter
}

/**
 * An 'edge' from an allMarkdownRemark.
 */

export interface MarkdownEdge {
  node: MarkdownNode
}

/**
 * List of MarkdownEdge's.
 */

export type MarkdownEdgeList = MarkdownEdge[]

/**
 * Result from a query with markdownRemark.
 */

export interface QueryResult {
  data: {
    allMarkdownRemark?: AllMarkdownRemark
  }
}

export interface AllMarkdownRemark {
  edges: MarkdownEdgeList
}

/**
 * A link to a cheatsheet.
 */

export interface SiteLink {
  path: string
  title: string
}

/**
 * An array of SiteLinks.
 */

export type SiteLinkList = SiteLink[]

/**
 * Content config.
 * See `config.js`.
 */

export interface Content {
  home: {
    title: string
    description: string
    recentlyUpdated: string
    updatedLabel: string
  }
  siteHeader: {
    title: string
    tagline: string
  }
  topNav: {
    title: string
    edit: string
    editOnGithub: string
  }
  sheet: {
    suffix: string
  }
  relatedPostsCallout: {
    description: string
    link: string
  }
}

export interface NodeContext {
  node_id: string // Internal gatsby identifier of Markdown node
  nodePath: string // '/vim'
  nodeType: 'sheet'
  title: string
  category: string
  weight: number
  updated: string | null | undefined
  isFeatured: boolean
}

/**
 * TBD
 */

export interface HastComment {
  type: 'comment'
  value: string
}

export interface HastElement {
  tagName: string
  type: 'element'
  properties: object
  children: HastNode[]
}

export interface HastText {
  type: 'text'
  value: string
}

export type HastNode = HastComment | HastElement | HastText

/**
 * TBD
 */

export interface PageEdge {
  node: {
    id: string
    context: NodeContext
  }
}

/**
 * TBD
 */

export interface AllSitePage {
  edges: PageEdge[]
}

/**
 * `SiteLink`s that are grouped by category.
 */

export interface GroupedSiteLinks {
  [key: string]: SiteLink[]
}

/**
 * Global React context
 */

export interface Context {
  CONTENT: Content
  sheet?: Sheet
  siteSearchIndex?: SiteSearchIndex
}

export interface SearchPageItem {
  id: string
  title: string
  category: string
  nodePath: string
}

export interface Sheet {
  path: string
  title: string | null | void
  htmlAst: any
}

export interface DisqusData {
  host: string
  url: string
  identifier: string
}

export interface SiteSearchIndex {
  index: any /* index from elasticlunr */
}

export interface GatsbyActions {
  createPage: (options: {
    path: string
    component: string
    context?: {}
  }) => void

  createRedirect: (options: {
    fromPath: string
    toPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
  }) => void
}
