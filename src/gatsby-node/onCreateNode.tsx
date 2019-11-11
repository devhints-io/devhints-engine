/**
 * Add extra node fields.
 *
 * This allows us to use $node_id and $category in sheet template queries.
 */

interface Props {
  node: any
  getNode: any
  actions: any
}

const onCreateNode = (props: Props) => {
  createNodeFields(props)
}

const createNodeFields = ({ node, actions }: Props) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: 'node_id',
      value: node.id
    })

    createNodeField({
      node,
      name: 'category',
      value: node.frontmatter.category || 'Default'
    })
  }
}

export default onCreateNode
