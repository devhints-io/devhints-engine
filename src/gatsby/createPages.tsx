import debugjs from 'debug'
import { AllMarkdownRemark, GatsbyActions, NodeContext } from '../web/types'
import { relativize, root } from './helpers'

type Actions = GatsbyActions

interface GraphqlResult<Result> {
  errors?: Error
  data: Result
}

interface Data {
  allMarkdownRemark: AllMarkdownRemark
}

type Graphql = (query: string) => Promise<GraphqlResult<Data>>

const debug = debugjs('app:gatsby:createPages')

/**
 * Create pages.
 */

const createPages = ({
  actions,
  graphql
}: {
  actions: Actions
  graphql: Graphql
}) => {
  return graphql(QUERY).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      buildPage({ node, actions })
    })

    // Because TypeScript expects the result to be a Promise
    return Promise.resolve()
  })
}

/**
 * Build a page from a node
 */

function buildPage({ node, actions }: { node: any; actions: Actions }) {
  const { createPage, createRedirect } = actions

  // Relative path, eg `/vim`
  const path = relativize(node.fileAbsolutePath)

  // Absolute path to devhints-engine
  const SheetTemplate = root('src/web/templates/SheetTemplate.tsx')

  const tags = node.frontmatter.tags || []

  const context /*: NodeContext */ = {
    node_id: node.id,
    nodePath: path,
    nodeType: 'sheet',
    title: node.frontmatter.title,
    category: node.frontmatter.category || '',
    weight: node.frontmatter.weight || 0,
    updated: node.frontmatter.updated,
    isFeatured: tags.includes('Featured')
  }

  debug('Creating page:', { path })

  createPage({
    path,
    component: SheetTemplate,
    context
  })

  const aliases = node.frontmatter.aliases || []
  aliases.forEach((alias: string) => {
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
            tags
          }
        }
      }
    }
  }
`

export default createPages
