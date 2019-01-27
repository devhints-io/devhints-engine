// @flow

/**
 * Add extra node fields.
 *
 * This allows us to use $node_id and $category in sheet template queries.
 */

const onCreateNode = (
  { node, actions } /*: { node: any, getNode: any, actions: any } */
) => {
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

module.exports = onCreateNode
