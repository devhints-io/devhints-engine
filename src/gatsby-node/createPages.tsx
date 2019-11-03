import debugjs from 'debug'
import { AllMarkdownRemark, GatsbyActions, NodeContext } from '../types/types'
import { stripPath } from './helpers'

type Actions = GatsbyActions

interface GraphqlResult<Result> {
  errors?: Error
  data: Result
}

interface Data {
  allMarkdownRemark: AllMarkdownRemark
}

interface Options {
  SheetTemplate: string
}

type Graphql = (query: string) => Promise<GraphqlResult<Data>>

const debug = debugjs('app:gatsby:createPages')

/**
 * Create pages.
 */

const createPages = async (
  ctx: { actions: Actions; graphql: Graphql },
  options: Options
) => {
  // Get the sheetPath from the config
  const sheetPath = getSheetPath(ctx)

  // Perform query to fetch MarkdownRemark nodes
  const nodes = await getMarkdownNodes(ctx)

  nodes.forEach((node: any) => {
    buildPage({ node, actions: ctx.actions, sheetPath }, options)
  })
}

/**
 * Get the sheetPath from the config.
 *
 * @example
 *     getSheetPath()
 *     // => '/path/to/sheets'
 */

function getSheetPath(ctx: any) {
  const { config } = (ctx as any).store.getState()
  const sheetPath = config.siteMetadata.sheetPath
  return sheetPath
}

/**
 * Perform query to fetch MarkdownRemark nodes
 */

async function getMarkdownNodes(ctx: any) {
  const { graphql } = ctx
  const result = await graphql(QUERY)
  if (result.errors) throw result.errors

  return result.data.allMarkdownRemark.nodes
}

/**
 * Build a page from a node
 */

function buildPage(
  props: { node: any; actions: Actions; sheetPath: string },
  { SheetTemplate }: Options
) {
  const { node, actions, sheetPath } = props
  const { createPage, createRedirect } = actions

  // Page path (eg `/vim`)
  const path = stripPath(node.fileAbsolutePath, sheetPath, '.md')
  const context /*: NodeContext */ = buildNodeContext(node, path)

  debug('Creating page', { path })

  createPage({
    path,
    component: SheetTemplate,
    context
  })

  const aliases = node.frontmatter.aliases || []
  aliases.forEach((alias: string) => {
    const fromPath = `/${alias}`
    const toPath = path

    debug('Creating redirect', { fromPath, toPath })

    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
      redirectInBrowser: true
    })
  })
}

/**
 * Build the context that will be put into the SitePage node
 */

function buildNodeContext(node: any, path: string): NodeContext {
  const tags = node.frontmatter.tags || []

  return {
    node_id: node.id,
    nodePath: path,
    nodeType: 'sheet',
    title: node.frontmatter.title,
    category: node.frontmatter.category || '',
    weight: node.frontmatter.weight || 0,
    updated: node.frontmatter.updated,
    isFeatured: tags.includes('Featured')
  }
}

/**
 * The graphql query
 */

const QUERY = `
  {
    allMarkdownRemark {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          category
          weight
          updated
          aliases
          tags
        }
      }
    }
  }
`

export default createPages
