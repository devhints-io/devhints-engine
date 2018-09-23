// @flow

/*::
   import type { NodeContext, GatsbyActions, AllMarkdownRemark } from '../web/types'

   type Actions = GatsbyActions

   type GraphqlResult<Result> = {
     errors?: Error,
     data: Result
   }

   type Data = {
     allMarkdownRemark: AllMarkdownRemark
   }

   type Graphql = (string) => Promise<GraphqlResult<Data>>
 */

const { root, relativize } = require('./helpers')
const debug = require('debug')('app:gatsby:createPages')

/**
 * Create pages.
 */

const createPages = (
  { actions, graphql } /*: { actions: Actions, graphql: Graphql } */
) => {
  return graphql(QUERY).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      buildPage({ node, actions })
    })
  })
}

/**
 * Build a page from a node
 */

function buildPage ({ node, actions } /*: { node: any, actions: Actions } */) {
  const { createPage, createRedirect } = actions
  const path = relativize(node.fileAbsolutePath)
  const SheetTemplate = root('src/web/templates/SheetTemplate.js')

  const context /*: NodeContext */ = {
    node_id: node.id,
    nodePath: path,
    nodeType: 'sheet',
    title: node.frontmatter.title,
    category: node.frontmatter.category || '',
    weight: node.frontmatter.weight || 0,
    updated: node.frontmatter.updated
  }

  debug('Creating page:', { path })

  createPage({
    path,
    component: SheetTemplate,
    context
  })

  const aliases = node.frontmatter.aliases || []
  aliases.forEach((alias /*: string */) => {
    const paths = {
      fromPath: `/${alias}`,
      toPath: path
    }

    debug('Creating redirect:', paths)

    createRedirect({
      ...paths,
      isPermanent: true,
      redirectInBrowser: true
    })
  })

  debug('Finished')
}

/**
 * The graphql query
 */

const QUERY = `
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            category
            weight
            updated
            aliases
          }
        }
      }
    }
  }
`

module.exports = createPages
