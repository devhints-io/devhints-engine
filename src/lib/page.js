// @flow

export type Pages = {}

/**
 * Returns related pages.
 */

export function getRelatedPages ({
  allSitePage,
  context
}: {
  allSitePage: Pages,
  context: { node_id: string }
}) {
  console.log(allSitePage)
  const id = context.node_id
  console.log(id)
  // TODO make a test for this

  return true
}
